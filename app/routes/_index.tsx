import type {MetaFunction} from "@remix-run/node";
import Homepage from "~/pages/Homepage";
import {json, LoaderFunctionArgs, useLoaderData} from "react-router";
import {PieceService} from "~/services/piece.service";
import {IPiece} from "~/interfaces/piece.interface";
import {EventService} from "~/services/event.service";
import {IEvent} from "~/interfaces/event.interface";

export const meta: MetaFunction = () => {
    return [
        {title: "Orchester"},
        {name: "description", content: "Une app de costume"},
    ];
};

export const loader = async ({}: LoaderFunctionArgs) => {
    const currentPieces = await PieceService.getCurrentPiecesList();
    const events  = await EventService.getNextEvents();
    return json({currentPieces, events})
}
export default function Index(){
    const {currentPieces, events} = useLoaderData() as {currentPieces: IPiece[], events: IEvent[]};
    return <Homepage currentPieces={currentPieces} events={events}/>;
}
