import SuitRow from "~/components/molecules/SuitRow";
import {IMusicianSuitItem} from "~/interfaces/Musician.interface";

export type SuitTableProps = {
    suit: IMusicianSuitItem[]
}
export default function SuitTable(props: SuitTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                <tr>
                    <th>Element</th>
                    <th>Quantité</th>
                    <th>Taille</th>
                </tr>
                </thead>
                <tbody>
                {props.suit.map((item, index) => {
                    return <SuitRow key={index} name={item.name} item={item}/>
                })}
                </tbody>
            </table>
        </div>
    )
}