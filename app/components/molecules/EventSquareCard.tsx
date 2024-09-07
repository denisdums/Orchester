import {IEvent} from "~/interfaces/Event.interface";
import {Link} from "@remix-run/react";

export type EventSquareCardProps = {
    event: IEvent
}

export default function EventSquareCard({event}: EventSquareCardProps) {
    const date = new Date(event.date);
    const dayInLetters = date.toLocaleString('default', {weekday: 'long'});
    const day = date.getDate() > 1 ? date.getDate() : "1er";
    const monthInLetters = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear();

    return (
        <div className="carousel-item relative group">
            <div className="transition-all card min-w-32 aspect-[1/1] shadow-lg group-hover:shadow-xl flex items-center justify-center">
                <div className="card-body justify-center items-center text-center">
                    <div className='leading-none flex flex-col items-center'>
                        <span className="text-lg font-bold first-letter:uppercase">{dayInLetters} {day} {monthInLetters}</span>
                        <span className="text-4xl font-bold text-neutral/10">{year}</span>
                    </div>
                    <Link to={'/events/' + event.id} className="after:block after:absolute after:w-full after:h-full after:top-0 after:left-0">
                        <p className="text-neutral/60">{event.title}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}