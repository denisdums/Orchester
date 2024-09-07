import {IMusician} from "~/interfaces/Musician.interface";
import MusicianRow from "~/components/molecules/MusicianRow";

export type MusiciansTableProps = {
    musicians: IMusician[]
}
export default function MusiciansTable(props: MusiciansTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Pupitre</th>
                </tr>
                </thead>
                <tbody>
                {props.musicians.map((musician, index) => (
                    <MusicianRow musician={musician} key={index}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}