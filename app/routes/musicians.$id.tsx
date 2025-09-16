import type {MetaFunction} from "@remix-run/node";
import {LoaderFunctionArgs, useLoaderData} from "react-router";
import {MusicianService} from "~/services/musician.service";
import {IMusician} from "~/interfaces/musician.interface";
import Musician from "~/pages/Musician";
import {IStrapiParams} from "~/interfaces/strapi.interface";
import {getDateFiltersFromRequest, getDefaultEndDate, getDefaultStartDate, getStrapiDateFilters} from "~/lib/utils";

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

    const {startDate, endDate} = getDateFiltersFromRequest(request)
    const filters = getStrapiDateFilters(startDate, endDate);

    const musician = await MusicianService.getByID(params.id, filters);

    return {musician, startDate, endDate};
}

export default function Index() {
    const {musician, startDate, endDate} = useLoaderData() as { musician: IMusician, startDate?: string, endDate?: string };
    return <Musician musician={musician} startDate={startDate} endDate={endDate}/>;
}
