import {IMusician} from "~/interfaces/musician.interface";

export interface IRawUserSmall {
    id: number,
    attributes: {
        username: string,
        email: string,
        provider: string,
        confirmed: boolean,
        blocked: boolean,
        createdAt: string,
        updatedAt: string
    }
}

export interface IRawUser {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string,
    role: IUserRole,
    fiche_information: {
        id: number,
        createdAt: string,
        updatedAt: string,
        full_name: string,
        birth_date: string
    }
}


export interface IUser {
    id: number;
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string,
    role: IUserRole,
    musician: IMusician
}

export interface IUserRole {
    id: number,
    name: string,
    description: string,
    type: string,
    createdAt: string,
    updatedAt: string
}