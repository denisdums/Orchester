import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {DateLibOptions} from "react-day-picker";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    if (typeof date === 'string') {
        date = new Date(date)
    }

    return formatDateFromOptions(date, dateOptions)
}

export function formatDateFromOptions(date: Date, options: Intl.DateTimeFormatOptions | DateLibOptions | undefined): string {
    const dateLocale = 'fr-FR'
    return date.toLocaleDateString(dateLocale, options)
}