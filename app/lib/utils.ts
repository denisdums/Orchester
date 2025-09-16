import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {DateLibOptions} from "react-day-picker";
import {IStrapiParams} from "~/interfaces/strapi.interface";

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

export function getDefaultStartDate(): string {
    const now = new Date();
    const defaultStartDate = new Date(now.getFullYear(), 8, 1);
    while (defaultStartDate.getDay() !== 6) {
        defaultStartDate.setDate(defaultStartDate.getDate() + 1);
    }
    if (now < defaultStartDate) {
        defaultStartDate.setFullYear(defaultStartDate.getFullYear() - 1);
    }
    return defaultStartDate.toISOString()
}

export function getDefaultEndDate(): string {
    return new Date().toISOString()
}

export function getDateFiltersFromRequest(request: Request): { startDate?: string, endDate?: string } {
    const searchParams = new URL(request.url).searchParams;
    const startDate = searchParams.get('startDate') ?? getDefaultStartDate();
    const endDate = searchParams.get('endDate') ?? getDefaultEndDate();
    return {startDate, endDate};
}

export function getStrapiDateFilters(startDate?: string, endDate?: string): IStrapiParams[] {
    const filters: IStrapiParams[] = [
        {
            key: 'sort',
            value: 'date:desc',
        },
        {
            key: 'pagination[pageSize]',
            value: '100',
        }
    ];

    if (startDate) {
        filters.push({key: 'filters[date][$gt]', value: new Date(startDate).toISOString()});
    }

    if (endDate) {
        filters.push({key: 'filters[date][$lt]', value: new Date(endDate).toISOString()});
    }
    return filters;
}

