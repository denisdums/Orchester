import {IMusician} from "~/interfaces/Musician.interface";
import {Link} from "@remix-run/react";

export type MusicianRowProps = {
    musician: IMusician,
}

export default function MusicianRow(props: MusicianRowProps) {
    return (
        <tr className="relative hover:bg-secondary hover:text-white even:bg-black/5">
            <th>
                <Link to={`/musicians/${props.musician.id}`}
                      className="after:block after:w-full after:h-full after:absolute after:top-0 after:left-0">
                    {props.musician.id}
                </Link>
            </th>
            <td>{props.musician.full_name}</td>
            <td>{props.musician.pupitre.title}</td>
        </tr>
    )
}