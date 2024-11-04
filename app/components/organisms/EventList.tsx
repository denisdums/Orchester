import {IEvent} from "~/interfaces/event.interface";
import EventCard from "~/components/molecules/EventCard";

export type EventListProps = {
    events: IEvent[]
}

export default function EventList({events}: EventListProps) {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 container">
            {events.map((event, index) => <EventCard event={event} key={index}/>)}
        </div>
    )
}