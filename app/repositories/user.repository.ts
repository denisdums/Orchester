import {StrapiClient} from "~/db/Strapi";
import {IMeta} from "~/interfaces/meta.interface";
import {IRawUser} from "~/interfaces/user.interface";

export const UserRepository = {
    type: "users",
    getAll: async (page: number = 1): Promise<{ data: IRawUser[], meta: IMeta }> => {
        const {data, meta} = await StrapiClient.find(UserRepository.type, page);
        return {data, meta}
    },

    getByID: async (id: string): Promise<IRawUser> => {
        return await StrapiClient.findOne(UserRepository.type, id, {
            params: {
                populate: "*"
            }
        });
    },

    authenticate: async (email: string, password: string) => {
        return await StrapiClient.authenticate(email, password);
    }
}