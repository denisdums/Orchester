import Separator from "~/components/atoms/Separator";
import {IUser} from "~/interfaces/User.interface";
import {IEvent} from "~/interfaces/Event.interface";
import EventList from "~/components/organisms/EventList";

export type EventsProps = {
    user: IUser,
    events: IEvent[]
}
export default function Events({user, events}: EventsProps) {

    return (
        <div className="flex flex-col gap-24 py-10">
            <div className="hero">
                <h1 className="text-5xl font-bold text-center">Liste des évènements</h1>
            </div>
            <Separator/>
            <EventList events={events}/>
        </div>
    )
}