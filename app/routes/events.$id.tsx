import type {MetaFunction} from "@remix-run/node";
import {LoaderFunctionArgs, useLoaderData} from "react-router";
import {IUser} from "~/interfaces/User.interface";
import Event from "~/pages/Event";
import {IEventDetail} from "~/interfaces/Event.interface";
import {MusicianService} from "~/services/MusicianService";
import {EventService} from "~/services/EventService";
import {IMusicianGroup} from "~/interfaces/Musician.interface";
import {SessionService} from "~/services/SessionService";
import {redirect} from "@remix-run/node";
import {UserService} from "~/services/UserService";

export type EventLoaderData = {
    user: IUser,
    event: IEventDetail,
    musicianGroups: IMusicianGroup[]
}

export const meta: MetaFunction = ({data}: any) => {
    return [
        {title: `Evènement | ${data.event.title}`},
        {name: "description", content: "Liste des musiciens"},
    ];
};

export async function loader({params, request   }: LoaderFunctionArgs) {
    const {isLoggedIn, userId, userJwt} = await SessionService.isUserLoggedIn(request);

    if (!isLoggedIn || !userId || !userJwt) {
        return redirect('/login');
    }

    if (!params.id) {
        throw new Response("No ID provided", {status: 400});
    }

    const event = await EventService.getByID(params.id);
    const {musicianGroups} = await MusicianService.getMusicianGroups();
    const user = await UserService.getByID(userId);

    return {event, musicianGroups, user}
}

export default function Index() {
    const loaderData = useLoaderData() as EventLoaderData;

    return <Event user={loaderData.user}
               event={loaderData.event}
               musicianGroups={loaderData.musicianGroups}/>
}
