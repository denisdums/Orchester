import {IMusician} from "~/interfaces/Musician.interface";
import MusiciansTable from "~/components/organisms/MusiciansTable";
import StrapiPagination from "~/components/molecules/StrapiPagination";
import StrapiListInfos from "~/components/molecules/StrapiListInfos";

export type MusiciansProps = {
    musicians: IMusician[]
    meta: Record<string, any>
}
export default function Musicians(props: MusiciansProps) {
    return (
        <div className="flex flex-col gap-10">
            <h2>Liste des musiciens</h2>
            <StrapiListInfos meta={props.meta}/>
            <MusiciansTable musicians={props.musicians}/>
            <StrapiPagination meta={props.meta}/>
        </div>
    )
}