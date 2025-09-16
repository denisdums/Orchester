import type {MetaFunction} from "@remix-run/node";
import {LoaderFunctionArgs, useLoaderData} from "react-router";
import {SessionService} from "~/services/session.service";
import {UserService} from "~/services/user.service";
import {redirect} from "@remix-run/node";
import {MusicianService} from "~/services/musician.service";
import {EventService} from "~/services/event.service";
import EventsTable from "~/pages/EventsTable";
import {IUser} from "~/interfaces/user.interface";
import {IEvent} from "~/interfaces/event.interface";
import {IMusicianGroup} from "~/interfaces/musician.interface";
import {getDateFiltersFromRequest, getStrapiDateFilters} from "~/lib/utils";

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


    const {startDate, endDate} = getDateFiltersFromRequest(request)
    const filters = getStrapiDateFilters(startDate, endDate);

    const {events} = await EventService.getAllForTable(filters)
    const {musicianGroups} = await MusicianService.getMusicianGroups();


    return {user, events, musicianGroups, startDate, endDate};
}

export default function Index() {
    const {user, events, musicianGroups, startDate, endDate} = useLoaderData() as {
        user: IUser,
        events: IEvent[],
        musicianGroups: IMusicianGroup[],
        startDate?: string,
        endDate?: string
    }

    return <EventsTable user={user} events={events} musicianGroups={musicianGroups} startDate={startDate}
                        endDate={endDate}/>
}
