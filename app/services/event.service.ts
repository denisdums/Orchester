import {IEvent, IEventDetail, IRawEvent} from "~/interfaces/event.interface";
import {EventRepository} from "~/repositories/event.repository";
import {EventFactory} from "~/factories/event.factory";
import {MusicianService} from "~/services/musician.service";

export const EventService = {
    getAll: async (): Promise<IEvent[]> => {
        const {data} = await EventRepository.getAll();
        return data.map((rawEvent: IRawEvent) => EventFactory.fromRawEventToEvent(rawEvent));
    },

    getByID: async (id: string): Promise<IEventDetail> => {
        const {data} = await EventRepository.getByID(id);
        const musicianPresences = await Promise.all(data.attributes.musician_presences.data.map(({id}) => {
            return MusicianService.getByID(id.toString());
        }))
        const musicianResponses = await Promise.all(data.attributes.musician_responses.map(async (data) => {
            const musician = await MusicianService.getByID(data.id.toString());
            return {isPresent: data.presence, musician: musician};
        }))
        return EventFactory.fromRawEventToEventDetails(data, musicianPresences, musicianResponses);
    },

    getNextEvents: async (): Promise<IEvent[]> => {
        const {data} = await EventRepository.getNextEvents();
        return data.map((rawEvent: IRawEvent) => EventFactory.fromRawEventToEvent(rawEvent));
    },

    savePresences: async (eventID: string, presences: string[]): Promise<IEventDetail> => {
        const {data} = await EventRepository.savePresences(eventID, presences);
        return EventService.getByID(data.id.toString());
    },

    saveResponse: async (eventID: string, userId: string, response: boolean): Promise<IEventDetail> => {
        const {data} = await EventRepository.saveResponse(eventID, userId, response);
        return EventService.getByID(data.id.toString());
    },

    getPresencesByMusicianID: async (musicianID: string): Promise<IEvent[]> => {
        const events = await EventRepository.getPresencesByMusicianID(musicianID);
        return events.map((rawEvent: IRawEvent) => EventFactory.fromRawEventToEvent(rawEvent));
    }
}