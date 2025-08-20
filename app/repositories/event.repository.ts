import {StrapiClient} from "~/db/Strapi";
import {IEventParams, IRawEvent} from "~/interfaces/event.interface";
import {IMeta} from "~/interfaces/meta.interface";

export const EventRepository = {
    type: "events",
    getAll: async (page: number = 1, fullLoading: boolean = false): Promise<{
        data: IRawEvent[],
        meta: IMeta
    }> => {
        const loadingParam = fullLoading ? {
            "pagination[page]": 1,
            "pagination[pageSize]": 150
        } : {};

        const {data, meta} = await StrapiClient.find(EventRepository.type, page, {
            params: {
                populate: "*",
                sort: "date:desc",
                ...loadingParam,
                "pagination[pageSize]": 12
            }
        });
        return {data, meta}
    },

    getByID: async (id: string): Promise<{ data: IRawEvent }> => {
        const {data} = await StrapiClient.findOne(EventRepository.type, id.toString(), {
            params: {
                populate: "*"
            }
        });
        return {data};
    },

    savePresences: async (eventID: string, presences: string[]): Promise<{ data: IRawEvent }> => {
        const {data} = await StrapiClient.update(EventRepository.type, eventID.toString(), {
            "musician_presences": presences
        })
        return {data};
    },

    saveResponse: async (eventID: string, userId: string, response: boolean): Promise<{ data: IRawEvent }> => {
        const strapiEvent = await EventRepository.getByID(eventID);
        const responses = strapiEvent.data.attributes.musician_responses;
        const index = responses.findIndex((response) => response.id.toString() === userId);
        if (index !== -1) responses.splice(index, 1);

        responses.push({
            id: parseInt(userId),
            presence: response
        });

        const {data} = await StrapiClient.update(EventRepository.type, eventID.toString(), {
            "musician_responses": responses
        })

        return {data};
    },

    getNextEvents: async (): Promise<{ data: IRawEvent[] }> => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        const {data} = await StrapiClient.find(EventRepository.type, 1, {
            params: {
                populate: "*",
                sort: "date:asc",
                "filters[date][$gte]": date.toISOString(),
                "pagination[pageSize]": 4
            }
        });
        return {data}
    },

    getPresencesByMusicianID: async (musicianID: string, filters?: IEventParams[]): Promise<IRawEvent[]> => {
        const params = {
            populate: "*",
            "filters[musician_presences][id][$eq]": musicianID,
        }

        const additionalFilters = {}

        if (filters && filters.length > 0) {
            filters.forEach(filter => {
                // @ts-expect-error no-type
                additionalFilters[`${filter.key}`] = filter.value;
            });
        }

        const {data} = await StrapiClient.find(EventRepository.type, 1, {
            params: {
                ...params,
                ...additionalFilters,
            }
        });
        return data
    }
}