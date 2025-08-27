import {IMusician} from "~/interfaces/musician.interface";
import {Card, CardContent} from "~/components/ui/card";
import {Checkbox} from "~/components/ui/checkbox";
import {PropsWithoutRef, useState} from "react";

export type EventPresenceCheckboxProps = PropsWithoutRef<{
    musician: IMusician,
    initialValue: EventPresenceCheckboxInitialValue
}>

export type EventPresenceCheckboxInitialValue = "excuse" | "presence" | null;

export default function EventPresenceCheckbox({musician, initialValue = null}: EventPresenceCheckboxProps) {
    const [selected, setSelected] = useState<"excuse" | "presence" | null>(initialValue);

    return (
        <Card className="relative">
            <CardContent className="pt-6 flex-col-reverse flex md:flex-row items-center gap-4">
                <div className="flex items-center gap-1">
                    <Checkbox checked={selected === "excuse"}
                              onCheckedChange={(v) => setSelected(v ? "excuse" : null)}
                              defaultChecked={selected === "excuse"} value={musician.id} name="excuse" className="h-6 w-6
                     border-[#f59e0b] data-[state=checked]:bg-[#f59e0b] data-[state=checked]:text-[#ffffff]"/>
                    <div className="h-6 w-6 shrink-0 rounded-sm shadow flex items-center justify-center bg-muted text-muted-foreground">
                        /
                    </div>
                    <Checkbox checked={selected === "presence"}
                              onCheckedChange={(v) => setSelected(v ? "presence" : null)}
                              defaultChecked={selected === "presence"}
                              value={musician.id}
                              name="presence" className="h-6 w-6 border-[#16a34a] data-[state=checked]:bg-[#16a34a] data-[state=checked]:text-[#ffffff]"/>
                </div>
                <p className="text-sm font-medium leading-none">
                    {musician.full_name}
                </p>
            </CardContent>
        </Card>
    )
}