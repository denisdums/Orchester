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
import {IMeta} from "~/interfaces/meta.interface";
import StrapiPagination from "~/components/molecules/StrapiPagination";
import StrapiListInfos from "~/components/molecules/StrapiListInfos";

export type EventsProps = {
    user: IUser,
    events: IEvent[],
    meta: IMeta
}
export default function Events({events, meta}: EventsProps) {

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
            <div className="flex flex-col gap-10">
                <StrapiListInfos meta={meta}/>
                <EventList events={events}/>
                <StrapiPagination meta={meta}/>
            </div>
        </>
    )
}