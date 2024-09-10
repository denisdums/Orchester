import {IEvent} from "~/interfaces/Event.interface";
import EventSquareCard from "~/components/molecules/EventSquareCard";

export type NextEventsListProps = {
    events: IEvent[]
}

export default function NextEventsList({events}: NextEventsListProps) {
    return (
        <div className="col-span-4 bg-base-100">
            <h2>Prochains évènements</h2>
            <div className="carousel carousel-center p-4 space-x-4 rounded-box">
                {events.map((event: IEvent, index: number) => (
                    <EventSquareCard event={event} key={index}/>
                ))}
            </div>
        </div>
    )
}