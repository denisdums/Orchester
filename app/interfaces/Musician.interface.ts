import {IPupitre} from "~/interfaces/Pupitre.interface";

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