import {SessionService} from "~/services/SessionService";

export async function loader() {
    return await SessionService.deleteUserSession('/')
}
