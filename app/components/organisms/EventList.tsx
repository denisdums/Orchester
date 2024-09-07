import {IEvent} from "~/interfaces/Event.interface";
import EventCard from "~/components/molecules/EventCard";

export type EventListProps = {
    events: IEvent[]
}

export default function EventList({events}: EventListProps) {
    return (
        <div className="flex flex-col gap-10 w-full max-w-xl mx-auto">
            {events.map((event, index) => <EventCard event={event} key={index}/>)}
        </div>
    )
}