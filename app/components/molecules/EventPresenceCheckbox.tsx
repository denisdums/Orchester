import {IMusician} from "~/interfaces/Musician.interface";

export type EventPresenceCheckboxProps = {
    musician: IMusician,
    isChecked: boolean
}
export default function EventPresenceCheckbox({musician, isChecked}: EventPresenceCheckboxProps) {
    return (
        <div className="bg-neutral/5 p-2 rounded bordered">
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text">{musician.full_name}</span>
                    <input type="checkbox" name="presence" value={musician.id} className="checkbox checkbox-primary"
                           defaultChecked={isChecked}/>
                </label>
            </div>
        </div>
    )
}