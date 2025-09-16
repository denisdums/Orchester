import {IEvent, IEventDetail, IRawEvent} from "~/interfaces/event.interface";
import {EventRepository} from "~/repositories/event.repository";
import {EventFactory} from "~/factories/event.factory";
import {MusicianService} from "~/services/musician.service";
import {IMeta} from "~/interfaces/meta.interface";
import {IStrapiParams} from "~/interfaces/strapi.interface";

export const EventService = {
    getAll: async (page: number = 1): Promise<{ events: IEvent[], meta: IMeta }> => {
        const {data, meta} = await EventRepository.getAll(page);
        const events = data.map((rawEvent: IRawEvent) => EventFactory.fromRawEventToEvent(rawEvent));
        return {events, meta}
    },

    getAllForTable: async (filters?: IStrapiParams[]): Promise<{ events: IEvent[], meta: IMeta }> => {
        const {data, meta} = await EventRepository.getAll(1, true, filters);
        const events = data.map((rawEvent: IRawEvent) => EventFactory.fromRawEventToEvent(rawEvent));
        return {events, meta}
    },

    getByID: async (id: string): Promise<IEventDetail> => {
        const {data} = await EventRepository.getByID(id);

        const musicianPresences = await Promise.all(data.attributes.musician_presences.data.map(({id}) => {
            return MusicianService.getByID(id.toString());
        }))
        const musicianExcuses = await Promise.all(data.attributes.musician_excuses.data.map(({id}) => {
            return MusicianService.getByID(id.toString());
        }))

        return EventFactory.fromRawEventToEventDetails(data, musicianPresences, musicianExcuses);
    },

    getNextEvents: async (): Promise<IEvent[]> => {
        const {data} = await EventRepository.getNextEvents();
        return data.map((rawEvent: IRawEvent) => EventFactory.fromRawEventToEvent(rawEvent));
    },

    savePointing: async (eventID: string, presences: string[], excuses: string[]): Promise<boolean> => {
        const {data} = await EventRepository.savePointing(eventID, presences, excuses);
        return !!data
    },

    getPresencesByMusicianID: async (musicianID: string, filters?: IStrapiParams[]): Promise<IEvent[]> => {
        const events = await EventRepository.getPresencesByMusicianID(musicianID, filters);
        return events.map((rawEvent: IRawEvent) => EventFactory.fromRawEventToEvent(rawEvent));
    }
}