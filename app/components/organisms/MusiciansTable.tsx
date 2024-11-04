import {IMusician} from "~/interfaces/musician.interface";
import MusicianRow from "~/components/molecules/MusicianRow";
import {Table, TableBody, TableCaption, TableFooter, TableHead, TableHeader, TableRow} from "~/components/ui/table";

export type MusiciansTableProps = {
    musicians: IMusician[]
}
export default function MusiciansTable(props: MusiciansTableProps) {
    return (

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Nom et prénom</TableHead>
                    <TableHead>Pupitre</TableHead>
                    <TableHead>Présences</TableHead>
                    <TableHead className="text-right">Fiche musicien</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.musicians.map((musician, index) => (
                    <MusicianRow musician={musician} key={index}/>
                ))}
            </TableBody>
        </Table>
    )
}