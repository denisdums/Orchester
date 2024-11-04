import {IEventDetail} from "~/interfaces/event.interface";
import {useUser} from "~/providers/User.provider";
import classNames from "classnames";
import {useRef, useState} from "react";
import {useEventResponseForm} from "~/hooks/useEventResponseForm";
import Spinner from "~/components/atoms/Spinner";

export type EventResponseFormProps = {
    event: IEventDetail;
}

export default function EventResponseForm({event}: EventResponseFormProps) {
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const {user} = useUser();
    const {setEventPresence, isEventResponseLoading} = useEventResponseForm();

    const eventResponse = user && event.responses.find(response => response.musician.id === user.id);
    const [isResponded, setIsResponded] = useState<boolean>(!!eventResponse);
    const [isPresent, setIsPresent] = useState<boolean>(eventResponse?.isPresent ?? false);

    const presentButtonClassNames = classNames({"bg-neutral/5": isResponded && isPresent});
    const absentButtonClassNames = classNames({"bg-neutral/5": isResponded && !isPresent});

    const handlePresent = () => {
        setIsPresent(true);
        setIsResponded(true);
        handleSubmit(true)
        detailsRef.current?.removeAttribute("open");
    }

    const handleAbsent = () => {
        setIsPresent(false);
        setIsResponded(true);
        handleSubmit(false)
        detailsRef.current?.removeAttribute("open");
    }

    const handleSubmit = (isPresent: boolean) => {
        const formData = new FormData();
        formData.append('isPresent', isPresent ? "true" : "false");
        setEventPresence(event.id, formData);
    }

    return (
        <details className="dropdown" ref={detailsRef}>
            <summary className="m-1 btn btn-primary">
                {isResponded ? (isPresent ? "Vous avez répondu: Présent" : "Vous avez répondu: Absent") : "Répondre"}
                {isEventResponseLoading && <Spinner/>}
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                    <button className={presentButtonClassNames} onClick={handlePresent}>Présent</button>
                </li>
                <li>
                    <button className={absentButtonClassNames} onClick={handleAbsent}>Absent</button>
                </li>
            </ul>
        </details>
    )
}