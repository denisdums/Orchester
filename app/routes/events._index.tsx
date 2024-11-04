import type {MetaFunction} from "@remix-run/node";
import {LoaderFunctionArgs, useLoaderData} from "react-router";
import {SessionService} from "~/services/session.service";
import {UserService} from "~/services/user.service";
import {redirect} from "@remix-run/node";
import {IUser} from "~/interfaces/user.interface";
import {EventService} from "~/services/event.service";
import Events from "~/pages/Events";
import {IEvent} from "~/interfaces/event.interface";

export const meta: MetaFunction = () => {
    return [
        {title: "Evènements"},
        {name: "description", content: "Evènements"},
    ];
};

export async function loader({request}: LoaderFunctionArgs) {
    const {isLoggedIn, userId, userJwt} = await SessionService.isUserLoggedIn(request);

    if (!isLoggedIn || !userId || !userJwt) {
        return redirect('/login');
    }

    const user = await UserService.getByID(userId);

    if (!user || user.role.type !== 'comite') {
        throw new Response("Unauthorized", {status: 401});
    }

    const events = await EventService.getAll();

    return {user, events}
}

export default function Index() {
    const {user, events} = useLoaderData() as { user: IUser, events: IEvent[] }
    return <Events user={user} events={events}/>
}
