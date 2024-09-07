import type {MetaFunction} from "@remix-run/node";
import {LoaderFunctionArgs, useLoaderData} from "react-router";
import {MusicianService} from "~/services/MusicianService";
import {IMusician} from "~/interfaces/Musician.interface";
import Musicians from "~/pages/Musicians";

export const meta: MetaFunction = () => {
    return [
        {title: "Musiciens"},
        {name: "description", content: "Liste des musiciens"},
    ];
};

export async function loader({request}:LoaderFunctionArgs): Promise<{ musicians: IMusician[], meta: Record<string, any> }> {
    const page = new URL(request.url).searchParams.get('page');
    const {musicians, meta} = await MusicianService.getAll(parseInt(page || '1'));
    return {musicians, meta}
}

export default function Index() {
    const {musicians, meta} = useLoaderData() as { musicians: IMusician[], meta: Record<string, any>};
    return <Musicians musicians={musicians} meta={meta}/>;
}
