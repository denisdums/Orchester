import {StrapiClient} from "~/db/Strapi";
import {IRawEvent} from "~/interfaces/event.interface";

export const EventRepository = {
    type: "events",
    getAll: async (): Promise<{ data: IRawEvent[] }> => {
        const {data} = await StrapiClient.find(EventRepository.type, 1, {
            params: {
                populate: "*",
            }
        });
        return {data}
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
                "filters[date][$gte]": date.toISOString()
            }
        });
        return {data}
    },

    getPresencesByMusicianID: async (musicianID: string): Promise<IRawEvent[]> => {
        const {data} = await StrapiClient.find(EventRepository.type, 1, {
            params: {
                populate: "*",
                "filters[musician_presences][id][$eq]": musicianID
            }
        });
        return data
    }
}