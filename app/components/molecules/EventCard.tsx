import {Link} from "@remix-run/react";
import {IEvent} from "~/interfaces/Event.interface";

export type EventCardProps = {
    event: IEvent
}

export default function EventCard({event}: EventCardProps) {
    return (
        <div className="card w-full bg-base-100 shadow-xl relative">
            <div className="card-body flex flex-col gap-5">
                <div className="flex justify-between">
                    <Link to={`/events/${event.id}`}
                          className="after:block after:absolute after:w-full after:h-full after:top-0 after:left-0">
                        <h2 className="card-title">{event.title}</h2>
                    </Link>
                    <span className="text-neutral/30">{new Date(event.date).toLocaleString()}</span>
                </div>
                <p>{event.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Voir l'évènement</button>
                </div>
            </div>
        </div>
    )
}