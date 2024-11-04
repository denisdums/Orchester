import {IMusician} from "~/interfaces/musician.interface";
import classNames from "classnames";
import {IEventResponse} from "~/interfaces/event.interface";

export type EventPresenceCheckboxProps = {
    musician: IMusician,
    response: IEventResponse | undefined
}
export default function EventResponseCard({musician, response}: EventPresenceCheckboxProps) {
    return (
        <div className={classNames("p-2 rounded bordered", {
            "bg-neutral/5": !response,
            "bg-primary": response && response.isPresent,
            "bg-secondary/20": response && !response.isPresent,
        })}>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className={classNames("label-text", {
                        "text-neutral/50": !response,
                        "text-white": !!response && response.isPresent,
                        "text-secondary": !!response && !response.isPresent,
                    })}>{musician.full_name}</span>
                </label>
            </div>
        </div>
    )
}