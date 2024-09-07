import {IRawUser, IUser, IUserRole} from "~/interfaces/User.interface";
import {IMusician} from "~/interfaces/Musician.interface";

export const UserFactory = {
    fromRawUserToUser: (user: IRawUser, relatedMusician: IMusician): IUser => {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            provider: user.provider,
            confirmed: user.confirmed,
            blocked: user.blocked,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            role: user.role,
            musician: relatedMusician
        }
    },
}