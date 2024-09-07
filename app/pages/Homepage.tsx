import {IPiece} from "~/interfaces/Piece.interface";
import {useContext} from "react";
import {UserContext} from "~/providers/User.provider";
import Separator from "~/components/atoms/Separator";
import BinderList from "~/components/organisms/BinderList";
import {Link} from "@remix-run/react";
import NextEventsList from "~/components/organisms/NextEventsList";
import {IEvent} from "~/interfaces/Event.interface";

export type HomepageProps = {
    currentPieces: IPiece[]
    events: IEvent[]
}
export default function Homepage({currentPieces, events}: HomepageProps) {
    const {user} = useContext(UserContext);

    return (
        <div className="flex flex-col gap-24 py-10">
            <div className="hero bg-base-200 py-10">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Bienvenue {user?.musician.first_name} !</h1>
                        <p className="py-6">Orchester est un outil permettant de garder à jour toutes les informations
                            musiciens de notre orchestre. Mais aussi plein
                            d'autres choses !</p>

                        {user && user.role.type === "comite" && (
                            <Link to={"/musicians"} className="btn btn-primary">Voir la liste des musiciens</Link>
                        )}

                        {!user && (
                            <div className="py-2 flex flex-col items-center gap-4">
                                <p className="opacity-30">Vous n'êtes pas encore connecté ?</p>
                                <Link to={"/login"} className="btn btn-primary">Connectez-vous</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {user && (
                <>
                    <Separator/>
                    <NextEventsList events={events}/>
                    <Separator/>
                    <BinderList currentPieces={currentPieces}/>
                </>
            )}
        </div>
    )
}