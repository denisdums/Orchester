import {IMusicianSuitItem} from "~/interfaces/Musician.interface";

export type SuitRowProps = {
    name: string,
    item: IMusicianSuitItem,
}

export default function SuitRow(props: SuitRowProps) {
    return (
        <tr>
            <th>{props.name}</th>
            <td>{props.item.quantity}</td>
            <td>{props.item.size}</td>
        </tr>
    )
}