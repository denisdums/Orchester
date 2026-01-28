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
import {IMusician, IMusicianGroup} from "~/interfaces/musician.interface";
import {getDateFiltersFromRequest, getStrapiDateFilters} from "~/lib/utils";
import EventsScoreTable from "~/pages/EventsScoreTable";

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
    const {musicians} = await MusicianService.getAll(1, true);

    const musiciansLength = musicians.length;
    const eventsUsedForScores = events.filter(event => (event.title.startsWith('Défilé') || event.title.startsWith('Répétition')) && event.presences.length > 0);
    const eventsWithScores = eventsUsedForScores.map(event => {
        const isDefile = event.title.startsWith('Défilé');
        const presencesLength = event.presences.length;
        const absentMusicians = musiciansLength - presencesLength;
        const scoreForPresence = 1 + (absentMusicians / presencesLength);
        const score = isDefile ? scoreForPresence * 2 : scoreForPresence;
        return {
            ...event,
            scoresPerMusician: musicians.map(musician => {
                const wasPresent = event.presences.some(presence => presence === musician.id);
                return {
                    musicianId: musician.id,
                    score: wasPresent ? score : 0
                }
            })
        }
    })

    const musiciansWithTotalScores = musicians.map(musician => {
        const totalScore = eventsWithScores.reduce((acc, event) => {
            const scoreEntry = event.scoresPerMusician.find(score => score.musicianId === musician.id);
            return acc + (scoreEntry ? scoreEntry.score : 0);
        }, 0);

        const totalOfPresences = eventsWithScores.reduce((acc, event) => {
            const scoreEntry = event.scoresPerMusician.find(score => score.musicianId === musician.id);
            return acc + (scoreEntry && scoreEntry.score > 0 ? 1 : 0);
        }, 0);
        const percentageOfPresenceAtEvents = totalOfPresences > 0 ? (totalOfPresences / eventsWithScores.length) * 100 : 0;

        return {
            ...musician,
            totalScore: parseInt(totalScore.toFixed()),
            percentageOfPresenceAtEvents: parseInt(percentageOfPresenceAtEvents.toFixed())
        }
    }).sort((a, b) => b.totalScore - a.totalScore);


    return {user, events, musiciansWithTotalScores, startDate, endDate};
}

export default function Index() {
    const {user, musiciansWithTotalScores, startDate, endDate} = useLoaderData() as {
        user: IUser,
        musiciansWithTotalScores: (IMusician & { totalScore: number, percentageOfPresenceAtEvents: number })[],
        startDate?: string,
        endDate?: string
    }


    return <EventsScoreTable user={user} musiciansWithTotalScores={musiciansWithTotalScores} startDate={startDate}
                             endDate={endDate}/>;
}
