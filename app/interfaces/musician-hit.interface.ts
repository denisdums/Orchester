import type {BaseHit, Hit} from "instantsearch.js";

export interface IMusicianHit extends IRawMusicianHit{
    image?: string,
    initials: string,
}


export type IRawMusicianHit  = {
    birth_date: string;
    createdAt: string;
    full_name: string;
    id: number;
    pupitre: { id: number; title: string; createdAt: string; updatedAt: string; };
    suit: [];
    updatedAt: string;
    user: { id: number; username: string; email: string; provider: string; password: string; };
} & Hit<BaseHit>