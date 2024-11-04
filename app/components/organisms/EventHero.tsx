import {IEventDetail} from "~/interfaces/event.interface";
import {useEffect, useState} from "react";

export type EventHeroProps = {
    event: IEventDetail;
}

export default function EventHero({event}: EventHeroProps) {
    const [dateInLetters, setDateInLetters] = useState<string>("");

    useEffect(() => {
        const date = new Date(event.date);
        setDateInLetters(date.toLocaleString('default', {weekday: 'long'}) + " " + date.getDate() + " " + date.toLocaleString('default', {month: 'long'}) + " " + date.getFullYear())
    }, [event.date]);

    return (
        <section>
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="py-2 px-4 border rounded-full text-xs">
                            {dateInLetters}
                        </div>
                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                            {event.title}
                        </h1>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            {event.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}