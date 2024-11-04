import {UserRepository} from "~/repositories/user.repository";
import {redirect} from "@remix-run/node";
import {SessionService} from "~/services/session.service";
import {StrapiClientAuthenticateResponse} from "~/db/Strapi";
import {IUser} from "~/interfaces/user.interface";
import {MusicianService} from "~/services/musician.service";
import {UserFactory} from "~/factories/user.factory";

export const UserService = {
    getByID: async (id: string): Promise<IUser> => {
        const rawUser = await UserRepository.getByID(id);
        const relatedMusician = await MusicianService.getByID(rawUser.fiche_information.id.toString());
        return UserFactory.fromRawUserToUser(rawUser, relatedMusician);
    },

    authenticate: async (email: string, password: string): Promise<StrapiClientAuthenticateResponse | undefined> => {
        return await UserRepository.authenticate(email, password);
    },

    logout: async (request: Request) => {
        const session = await SessionService.getUserSession(request);
        return redirect("/", {
            headers: {
                "Set-Cookie": await SessionService.getSessionStorage().destroySession(session),
            },
        });
    }
}