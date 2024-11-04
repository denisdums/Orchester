import {IPiece} from "~/interfaces/piece.interface";
import {useContext} from "react";
import {UserContext} from "~/providers/User.provider";
import NextEventsList from "~/components/organisms/NextEventsList";
import {IEvent} from "~/interfaces/event.interface";
import Hero from "~/components/templates/hero";

export type HomepageProps = {
    currentPieces: IPiece[]
    events: IEvent[]
}
export default function Homepage({currentPieces, events}: HomepageProps) {
    const {user} = useContext(UserContext);

    return (
        <div className="flex flex-col gap-12 py-8">
            <Hero/>
            {user && (
                <NextEventsList events={events}/>
            )}
        </div>
    )
}