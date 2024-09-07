import {IEvent, IEventDetail, IRawEvent} from "~/interfaces/Event.interface";
import {EventRepository} from "~/repositories/EventRepository";
import {EventFactory} from "~/factories/EventFactory";
import {MusicianService} from "~/services/MusicianService";
import {IMusician} from "~/interfaces/Musician.interface";

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
    }
}