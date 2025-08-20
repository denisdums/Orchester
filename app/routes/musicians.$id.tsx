import type {MetaFunction} from "@remix-run/node";
import {LoaderFunctionArgs, useLoaderData} from "react-router";
import {MusicianService} from "~/services/musician.service";
import {IMusician} from "~/interfaces/musician.interface";
import Musician from "~/pages/Musician";
import {IEventParams} from "~/interfaces/event.interface";

export const meta: MetaFunction = () => {
    return [
        {title: "Musiciens"},
        {name: "description", content: "Liste des musiciens"},
    ];
};

export async function loader({request, params}: LoaderFunctionArgs) {
    if (!params.id) {
        throw new Response("No ID provided", {status: 400});
    }

    const searchParams = new URL(request.url).searchParams;
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const filters: IEventParams[] = [
        {
            key: 'sort',
            value: 'date:desc',
        },
        {
            key: 'pagination[pageSize]',
            value: '100',
        }
    ];

    if (startDate) {
        filters.push({key: 'filters[date][$gt]', value: new Date(startDate).toISOString()});
    }

    if (endDate) {
        filters.push({key: 'filters[date][$lt]', value: new Date(endDate).toISOString()});
    }

    const musician = await MusicianService.getByID(params.id, filters);

    return {musician, startDate, endDate};
}

export default function Index() {
    const {musician, startDate, endDate} = useLoaderData() as { musician: IMusician, startDate?: string, endDate?: string };
    return <Musician musician={musician} startDate={startDate} endDate={endDate}/>;
}
