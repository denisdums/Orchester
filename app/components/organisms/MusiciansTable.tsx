import {IMusician} from "~/interfaces/musician.interface";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "~/components/ui/table";
import {Button} from "~/components/ui/button";
import {Link} from "@remix-run/react";
import {ArrowUpRightFromSquare} from "lucide-react";

export type MusiciansTableProps = {
    musicians: IMusician[]
}
export default function MusiciansTable(props: MusiciansTableProps) {
    return (

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nom et prénom</TableHead>
                    <TableHead>Pupitre</TableHead>
                    <TableHead>Présences</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.musicians.map((musician) => (
                    <TableRow key={musician.id} className="group relative">
                        <TableCell className="font-semibold">{musician.full_name}</TableCell>
                        <TableCell>{musician.pupitre.title}</TableCell>
                        <TableCell>{musician.presences?.length}</TableCell>
                        <TableCell>
                            <Button asChild={true} className="block w-max ml-auto">
                                <Link to={`/musicians/${musician.id}`} className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transition-duration-300
                    after:absolute after:top-0 after:left-0 after:w-full after:h-full">
                                    Voir le musicien <ArrowUpRightFromSquare/>
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}