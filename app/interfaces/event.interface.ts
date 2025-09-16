import {IMusician} from "~/interfaces/musician.interface";

export interface IRawEvent {
    id: number
    attributes: {
        title: string,
        date: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        musician_presences: {
            data: IRawEventMusician[]
        }
        musician_excuses: {
            data: IRawEventMusician[]
        },
    }
}

export interface IEvent {
    id: number
    title: string,
    date: string,
    rawDate: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    presences: number[],
    excuses: number[],
}

export interface IEventDetail {
    id: number
    title: string,
    date: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    presences: IMusician[],
    excuses: IMusician[],
}

export type IPupitreCount = {
    title: string
    count: number
}

export type IRawEventMusician = {
    id: number,
    attributes: {
        createdAt: string,
        updatedAt: string,
        full_name: string,
        birth_date: string
    }
}