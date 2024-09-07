import {IMusicianGroup} from "~/interfaces/Musician.interface";
import EventPresenceCheckbox from "~/components/molecules/EventPresenceCheckbox";
import {Form, useRevalidator} from "@remix-run/react";
import {useEventPresenceForm} from "~/hooks/useEventPresenceForm";
import {IEventDetail} from "~/interfaces/Event.interface";
import {useEffect} from "react";
import Spinner from "~/components/atoms/Spinner";
import {useToast} from "~/providers/Toast.provider";

export type EventPresencesFormProps = {
    musicianGroups: IMusicianGroup[],
    event: IEventDetail
}

export default function EventPresencesForm({musicianGroups, event}: EventPresencesFormProps) {
    const {setEventPresence, isEventPresenceLoading, eventPresenceResponseData} = useEventPresenceForm();
    const revalidator = useRevalidator();
    const {setToast} = useToast();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setEventPresence(event.id, formData);
    }

    useEffect(() => {
        if (!eventPresenceResponseData || isEventPresenceLoading) return;
        if (eventPresenceResponseData.success) {
            revalidator.revalidate();
            setToast({
                status: "success",
                content: "Présences enregistrées"
            });
        } else {
            setToast({
                status: "error",
                content: "Erreur lors de l'enregistrement des présences"
            });
        }
    }, [eventPresenceResponseData, isEventPresenceLoading]);

    return (
        <Form method='post' onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {musicianGroups.map((group, index) => (
                    <div key={index} className="col-span-2 lg:col-span-3 flex flex-col gap-2">
                        <h2>{group.title}</h2>
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

            <div className="fixed bottom-10 right-10">
                <button type="submit" className="btn btn-primary">
                    Enregistrer
                    {isEventPresenceLoading && <Spinner/>}
                </button>
            </div>
        </Form>
    )
}