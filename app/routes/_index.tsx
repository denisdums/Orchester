import type {MetaFunction} from "@remix-run/node";
import Homepage from "~/pages/Homepage";
import {json, useLoaderData} from "react-router";
import {EventService} from "~/services/event.service";
import {IEvent} from "~/interfaces/event.interface";

export const meta: MetaFunction = () => {
    return [
        {title: "Orchester"},
        {name: "description", content: "Une app de costume"},
    ];
};

export const loader = async () => {
    const events  = await EventService.getNextEvents();
    return json({events})
}
export default function Index(){
    const {events} = useLoaderData() as {events: IEvent[]};
    return <Homepage events={events}/>;
}
