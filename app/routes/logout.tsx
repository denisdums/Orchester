import {SessionService} from "~/services/session.service";

export async function loader() {
    return await SessionService.deleteUserSession('/')
}
