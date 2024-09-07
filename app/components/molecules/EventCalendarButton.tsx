import {IEvent} from "~/interfaces/Event.interface";
import {atcb_action} from "add-to-calendar-button-react";
import {createRef} from "react";
import CalendarIcon from "~/components/atoms/CalendarIcon";

export type EventCalendarButtonProps = {
    event: IEvent
    className?: string
}

export default function EventCalendarButton({event, className}: EventCalendarButtonProps) {
    const buttonRef = createRef<HTMLButtonElement>();

    const date = new Date(event.date);

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);  // Ajoutez 1 au mois car les mois vont de 0 à 11
    const day = ('0' + date.getDate()).slice(-2);
    const formattedDate = year + '-' + month + '-' + day;

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const calendarTime = hours + ":" + minutes;
    const calendarTimeEnd = ('0' + (date.getHours() + 1)).slice(-2) + ":" + minutes

    const calendarOptions = ['Apple', 'Google'] as ("Apple" | "Google" | "iCal" | "Microsoft365" | "MicrosoftTeams" | "Outlook.com" | "Yahoo")[];

    const config = {
        trigger: 'click',
        hideCheckmark: true,
        inline: true,
        name: event.title,
        options: calendarOptions,
        location: "World Wide Web",
        startDate: formattedDate,
        endDate: formattedDate,
        startTime: calendarTime,
        endTime: calendarTimeEnd,
        timeZone: "Europe/Paris",
        customLabels: {"close":"Fermer"}
    }

    async function handleClick() {
        await atcb_action(config, buttonRef.current || undefined);
    }

    return (
        <div className={className}>
            <div id={'atcb-btn-custom-close'}></div>
            <button className="btn btn-secondary" onClick={handleClick} ref={buttonRef}>
                <CalendarIcon className="w-4"/>
            </button>
        </div>
    )
}