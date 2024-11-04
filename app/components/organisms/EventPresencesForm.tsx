import {IMusicianGroup} from "~/interfaces/musician.interface";
import EventPresenceCheckbox from "~/components/molecules/EventPresenceCheckbox";
import {Form, useRevalidator} from "@remix-run/react";
import {useEventPresenceForm} from "~/hooks/useEventPresenceForm";
import {IEventDetail} from "~/interfaces/event.interface";
import {useEffect} from "react";
import Spinner from "~/components/atoms/Spinner";
import {H3} from "~/components/ui/typography";
import {Button} from "~/components/ui/button";
import {useToast} from "~/hooks/useToast";

export type EventPresencesFormProps = {
    musicianGroups: IMusicianGroup[],
    event: IEventDetail
}

export default function EventPresencesForm({musicianGroups, event}: EventPresencesFormProps) {
    const {setEventPresence, isEventPresenceLoading, eventPresenceResponseData} = useEventPresenceForm();
    const revalidator = useRevalidator();
    const {toast} = useToast();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setEventPresence(event.id, formData);
    }

    useEffect(() => {
        if (!eventPresenceResponseData || isEventPresenceLoading) return;
        if (eventPresenceResponseData.success) {
            revalidator.revalidate();
            toast({
                title: "Présences enregistrées",
                description: "Les présences ont bien été enregistrées",
                duration: 2000
            });
        } else {
            toast({
                variant: "destructive",
                title: "Erreur",
                description: "Erreur lors de l'enregistrement des présences",
                duration: 2000
            });
        }
    }, [eventPresenceResponseData, isEventPresenceLoading]);

    return (
        <Form method='post' onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {musicianGroups.map((group, index) => (
                    <div key={index} className="col-span-2 lg:col-span-3 flex flex-col gap-2">
                        <H3>{group.title}</H3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                            {group.musicians.map((musician, index) => (
                                <EventPresenceCheckbox key={index}
                                                       musician={musician}
                                                       isChecked={!!event.presences.find((presence) => presence.id === musician.id)}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-10 right-10 drop-shadow shadow shadow-accent">
                <Button type="submit">
                    Enregistrer
                    {isEventPresenceLoading && <Spinner/>}
                </Button>
            </div>
        </Form>
    )
}