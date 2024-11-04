import {IUser} from "~/interfaces/user.interface";
import {IEvent} from "~/interfaces/event.interface";
import EventList from "~/components/organisms/EventList";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "~/components/ui/breadcrumb";
import {Slash} from "lucide-react";

export type EventsProps = {
    user: IUser,
    events: IEvent[]
}
export default function Events({events}: EventsProps) {

    return (
        <>
            <Breadcrumb className="pb-12">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink to="/">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash/>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        Liste des évènements
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col gap-24">
                <EventList events={events}/>
            </div>
        </>
    )
}