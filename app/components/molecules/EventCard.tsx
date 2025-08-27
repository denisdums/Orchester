import {IEvent} from "~/interfaces/event.interface";
import {Link} from "@remix-run/react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";

export type EventSquareCardProps = {
    event: IEvent,
    key?: number
}

export default function EventCard(props: EventSquareCardProps) {
    const {event} = props;

    return (
        <Card className="relative hover:shadow-lg transition-shadow">
            <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{event.description}</p>
            </CardContent>
            <Link to={'/events/' + event.id}
                  className="after:absolute  after:top-0 after:left-0 after:w-full after:h-full">
            </Link>
        </Card>

    )
}