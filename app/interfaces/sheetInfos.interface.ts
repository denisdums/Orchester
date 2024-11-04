import {IRawUserSmall} from "~/interfaces/user.interface";
import {IRawPupitre} from "~/interfaces/pupitre.interface";

export interface IRawSheetInfos {
    id: number,
    attributes: {
        createdAt: string,
        updatedAt: string,
        birth_date: string,
        full_name: string,
        suit: [IRawSuitType],
        user: {
            data: IRawUserSmall
        },
        pupitre: {
            data: IRawPupitre
        }
    }
}

export interface IRawSuitType {
    id: number,
    __component: string,
    type: string,
    quantity: number,
    size: string
}