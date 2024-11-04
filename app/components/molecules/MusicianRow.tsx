import {IMusician} from "~/interfaces/musician.interface";
import {Link} from "@remix-run/react";
import {TableCell, TableRow} from "~/components/ui/table";
import {Button} from "~/components/ui/button";
import {ArrowUpRightFromSquare} from "lucide-react";

export type MusicianRowProps = {
    musician: IMusician,
}

export default function MusicianRow(props: MusicianRowProps) {
    return (
        <TableRow key={props.musician.id}>
            <TableCell className="font-medium">{props.musician.id}</TableCell>
            <TableCell>{props.musician.full_name}</TableCell>
            <TableCell>{props.musician.pupitre.title}</TableCell>
            <TableCell>{props.musician.presences?.length}</TableCell>
            <TableCell>
                <Button asChild={true} className="block w-max ml-auto">
                    <Link to={`/musicians/${props.musician.id}`}>
                        <ArrowUpRightFromSquare/>
                    </Link>
                </Button>
            </TableCell>
        </TableRow>
    )
}