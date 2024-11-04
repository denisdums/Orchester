import {IEvent} from "~/interfaces/event.interface";
import {Link} from "@remix-run/react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import {useEffect, useState} from "react";

export type EventSquareCardProps = {
    event: IEvent,
    key?: number
}

export default function EventCard(props: EventSquareCardProps) {
    const {event} = props;
    const date = new Date(event.date);
    const day = date.getDate() > 1 ? date.getDate() : "1er";
    const year = date.getFullYear();

    const [dayInLetters, setDayInLetters] = useState<string>('')
    const [monthInLetters, setMonthInLetters] = useState<string>('')

    useEffect(() => {
        setDayInLetters(date.toLocaleString('default', {weekday: 'long'}));
        setMonthInLetters(date.toLocaleString('default', {month: 'long'}));
    }, [date])

    return (
        <Card>
            <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{dayInLetters} {day} {monthInLetters} {year}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{event.description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild={true}>
                    <Link to={'/events/' + event.id}>
                        Voir l'évènement
                    </Link>
                </Button>
            </CardFooter>
        </Card>

    )
}