import {IMusician} from "~/interfaces/musician.interface";
import {Card, CardContent} from "~/components/ui/card";
import {Checkbox} from "~/components/ui/checkbox";
import {PropsWithoutRef} from "react";

export type EventPresenceCheckboxProps = PropsWithoutRef<{
    musician: IMusician,
    isChecked: boolean
}>
export default function EventPresenceCheckbox({musician, isChecked}: EventPresenceCheckboxProps) {
    return (
        <Card className="relative">
            <CardContent className="pt-6 flex items-center gap-4">
                <Checkbox id={musician.id.toString()} defaultChecked={isChecked} value={musician.id} name="presence"
                          className="h-6 w-6"/>
                <label
                    htmlFor={musician.id.toString()}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
                    after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full cursor-pointer"
                >
                    {musician.full_name}
                </label>
            </CardContent>
        </Card>
    )
}