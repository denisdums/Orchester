import type {MetaFunction} from "@remix-run/node";
import {LoaderFunctionArgs, useLoaderData} from "react-router";
import {MusicianService} from "~/services/MusicianService";
import {IMusician} from "~/interfaces/Musician.interface";
import Musician from "~/pages/Musician";

export const meta: MetaFunction = () => {
    return [
        {title: "Musiciens"},
        {name: "description", content: "Liste des musiciens"},
    ];
};

export async function loader({params}: LoaderFunctionArgs) {
    if (!params.id) {
        throw new Response("No ID provided", {status: 400});
    }
    const musician = await MusicianService.getByID(params.id);
    return {musician}
}

export default function Index() {
    const {musician} = useLoaderData() as { musician: IMusician };
    return <Musician musician={musician}/>;
}
