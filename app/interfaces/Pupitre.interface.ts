export interface IRawPupitre  {
    id: number,
    attributes: {
        title: string,
        createdAt: string,
        updatedAt: string
    }
}

export interface IPupitre {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
}