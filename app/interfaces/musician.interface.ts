import {IPupitre} from "~/interfaces/pupitre.interface";
import {IEvent} from "~/interfaces/event.interface";

export interface IMusician {
    id: number,
    birth_date: string,
    user_id: number,
    pupitre: IPupitre,
    createdAt: string,
    updatedAt: string,
    full_name: string,
    first_name: string,
    suit: IMusicianSuitItem[],
    editLink: string;
    presences?: IEvent[],
}

export interface IMusicianSuitItem {
    name: string;
    quantity: number;
    size: string;
}

export interface IMusicianGroup {
    title: string,
    musicians: IMusician[]
}