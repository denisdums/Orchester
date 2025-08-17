import {IEvent, IEventDetail, IEventResponse, IRawEvent} from "~/interfaces/event.interface";
import {IMusician} from "~/interfaces/musician.interface";
import {formatDate} from "~/lib/utils";

export const EventFactory = {
    fromRawEventToEvent: (event: IRawEvent): IEvent => {
        return {
            id: event.id,
            title: event.attributes.title,
            date: formatDate(event.attributes.date),
            description: event.attributes.description,
            createdAt: event.attributes.createdAt,
            updatedAt: event.attributes.updatedAt,
        }
    },

    fromRawEventToEventDetails: (
        event: IRawEvent,
        musiciansPresences: IMusician[],
        musiciansResponses: IEventResponse[]
    ): IEventDetail => {
        return {
            id: event.id,
            title: event.attributes.title,
            date: formatDate(event.attributes.date),
            description: event.attributes.description,
            createdAt: event.attributes.createdAt,
            updatedAt: event.attributes.updatedAt,
            presences: musiciansPresences,
            responses: musiciansResponses,
        }
    },
}