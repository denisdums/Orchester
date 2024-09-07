import {IMusician} from "~/interfaces/Musician.interface";
import {Link} from "@remix-run/react";
import SuitTable from "~/components/organisms/SuitTable";
import SuitStats from "~/components/organisms/SuitStats";
import OpenIcon from "~/components/atoms/OpenIcon";

export type MusicianProps = {
    musician: IMusician
}
export default function Musician(props: MusicianProps) {
    return (
        <div className="flex flex-col gap-10 pb-32">
            <div>
                <div className="flex justify-between items-baseline">
                    <h1>{props.musician.full_name}</h1>
                    <span className="text-sm">Date de naissance: {props.musician.birth_date}</span>
                </div>
                <h4>{props.musician.pupitre.title}</h4>
            </div>
            <div className="flex flex-col gap-8">
                <div className="divider"><h4 className="font-bold">Costume</h4></div>
                <SuitStats musician={props.musician}/>
                <SuitTable suit={props.musician.suit}/>
            </div>
            <div className="flex items-center justify-center gap-4">
                <Link to={props.musician.editLink} className="btn btn-primary" target="_blank">
                    Modifier les informations
                    <OpenIcon className="inline w-3"/>
                </Link>
                <Link to={"/musicians"} className="btn btn-secondary">Retour à la liste des musiciens</Link>
            </div>
        </div>
    )
}