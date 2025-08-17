"use client"

import {Calendar as CalendarIcon} from "lucide-react"
import {Button} from "~/components/ui/button"
import {Calendar} from "~/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger} from "~/components/ui/popover"
import {formatDate} from "~/lib/utils";
import { fr } from "react-day-picker/locale";
import {OnSelectHandler} from "react-day-picker";

export function DatePicker(props: { onChange?: OnSelectHandler<Date | undefined>, label?: string, date?: Date }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={props.date}
                    className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                >
                    <CalendarIcon/>
                    {props.date ? formatDate(props.date) : <span> { props.label ?? 'Choisissez une date'}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={props.date} onSelect={props.onChange} locale={fr}/>
            </PopoverContent>
        </Popover>
    )
}