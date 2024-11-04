import {IUser} from "~/interfaces/user.interface";
import {IEventDetail} from "~/interfaces/event.interface";
import {IMusicianGroup} from "~/interfaces/musician.interface";
import EventPresencesForm from "~/components/organisms/EventPresencesForm";
import {EventStats} from "~/components/organisms/EventStats";
import EventHero from "~/components/organisms/EventHero";
import {useFeatureFlags} from "~/providers/FeatureFlags.provider";
import {Separator} from "~/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "~/components/ui/breadcrumb";
import {Slash} from "lucide-react";

export type EventProps = {
    user: IUser,
    event: IEventDetail
    musicianGroups: IMusicianGroup[]
}
export default function Event({user, event, musicianGroups}: EventProps) {
    const {flags} = useFeatureFlags();


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
                        <BreadcrumbLink to="/events">Evènements</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash/>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        {event.title}
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col gap-8 py-10">
                <EventHero event={event}/>
                {user && user.role.type === "comite" && (
                    <>
                        <Separator/>
                        <Tabs defaultValue="presences">
                            <TabsList className="block w-max mx-auto">
                                <TabsTrigger value="presences">Présences</TabsTrigger>
                                <TabsTrigger value="stats-presence">Stats Présences</TabsTrigger>
                            </TabsList>
                            <TabsContent value="presences">
                                <EventPresencesForm musicianGroups={musicianGroups} event={event}/>
                            </TabsContent>
                            <TabsContent value="stats-presence">
                                <EventStats event={event} musicianGroups={musicianGroups}/>
                            </TabsContent>
                        </Tabs>
                    </>
                )}
            </div>
        </>
    )
}