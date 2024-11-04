import type {MetaFunction} from "@remix-run/node";
import {LoaderFunctionArgs, useLoaderData} from "react-router";
import {SessionService} from "~/services/session.service";
import {UserService} from "~/services/user.service";
import {redirect} from "@remix-run/node";
import {IUser} from "~/interfaces/user.interface";
import Account from "~/pages/Account";
export const meta: MetaFunction = () => {
    return [
        {title: "Mon compte"},
        {name: "description", content: "Mon compte"},
    ];
};

export async function loader({request}: LoaderFunctionArgs) {
    const {isLoggedIn, userId, userJwt} = await SessionService.isUserLoggedIn(request);

    if (!isLoggedIn || !userId || !userJwt) {
        return redirect('/login');
    }

    const user = await UserService.getByID(userId);
    return {user}
}

export default function Index() {
    const { user} = useLoaderData() as { isLogged: boolean, user: IUser };
    return <Account user={user}/>;
}
