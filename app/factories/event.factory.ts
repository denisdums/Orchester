import {IEvent, IEventDetail, IRawEvent} from "~/interfaces/event.interface";
import {IMusician} from "~/interfaces/musician.interface";
import {formatDate} from "~/lib/utils";

export const EventFactory = {
    fromRawEventToEvent: (event: IRawEvent): IEvent => {
        return {
            id: event.id,
            title: event.attributes.title,
            date: formatDate(event.attributes.date),
            rawDate: event.attributes.date,
            description: event.attributes.description,
            createdAt: event.attributes.createdAt,
            updatedAt: event.attributes.updatedAt,
            presences: event.attributes.musician_presences.data.map(({id}) => id),
            excuses: event.attributes.musician_excuses.data.map(({id}) => id),
        }
    },

    fromRawEventToEventDetails: (
        event: IRawEvent,
        musiciansPresences: IMusician[],
        musiciansExcuses: IMusician[],
    ): IEventDetail => {
        return {
            id: event.id,
            title: event.attributes.title,
            date: formatDate(event.attributes.date),
            description: event.attributes.description,
            createdAt: event.attributes.createdAt,
            updatedAt: event.attributes.updatedAt,
            presences: musiciansPresences,
            excuses: musiciansExcuses,
        }
    },
}