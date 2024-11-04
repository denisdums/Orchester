import {IPupitre, IRawPupitre} from "~/interfaces/pupitre.interface";

export const PupitreFactory = {
    fromRawPupitreToPupitre: (pupitre: IRawPupitre): IPupitre => {
        return {
            id: pupitre.id,
            title: pupitre.attributes.title,
            createdAt: pupitre.attributes.createdAt,
            updatedAt: pupitre.attributes.updatedAt,
        }
    },
}