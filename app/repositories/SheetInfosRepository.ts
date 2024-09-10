import {StrapiClient} from "~/db/Strapi";
import {IMeta} from "~/interfaces/Meta.interface";
import {IRawSheetInfos} from "~/interfaces/SheetInfos.interface";

export const SheetInfosRepository = {
  type: "fiche-informations",
  getAll: async (page: number = 1, fullLoading: boolean = false): Promise<{
    data: IRawSheetInfos[],
    meta: IMeta
  }> => {
    const loadingParam = fullLoading ? {
      "pagination[page]": 1,
      "pagination[pageSize]": 150
    } : {};

    const {data, meta} = await StrapiClient.find(SheetInfosRepository.type, page, {
      params: {
        populate: "*",
        sort: "pupitre.title",
        ...loadingParam
      }
    });
    return {data, meta}
  },

  getByID: async (id: string | number): Promise<{ data: IRawSheetInfos }> => {
    const {data} = await StrapiClient.findOne(SheetInfosRepository.type, id.toString(), {
      params: {
        populate: "*"
      }
    });

    return {data};
  },
}