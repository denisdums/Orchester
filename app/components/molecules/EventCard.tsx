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
        <Card>
            <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
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