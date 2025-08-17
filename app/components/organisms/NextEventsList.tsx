import {IEvent} from "~/interfaces/event.interface";
import EventCard from "~/components/molecules/EventCard";
import {H4} from "~/components/ui/typography";

export type NextEventsListProps = {
    events: IEvent[]
}

export default function NextEventsList({events}: NextEventsListProps) {
    return (
        <div className="col-span-4 bg-base-100 flex flex-col gap-4">
            <H4>Prochains évènements</H4>
            {events.length ? (
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}>
                    {events.map((event, index) => (
                        <EventCard event={event} key={index}/>
                    ))}
                </div>
            ) : (
                <div className="text-center text-muted-foreground">
                    Aucun évènement à venir.
                </div>
            )}
        </div>
    )
}