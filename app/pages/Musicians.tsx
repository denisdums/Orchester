import {IMusician} from "~/interfaces/musician.interface";
import MusiciansTable from "~/components/organisms/MusiciansTable";
import StrapiPagination from "~/components/molecules/StrapiPagination";
import StrapiListInfos from "~/components/molecules/StrapiListInfos";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "~/components/ui/breadcrumb";
import {Slash} from "lucide-react";

export type MusiciansProps = {
    musicians: IMusician[]
    meta: Record<string, any>
}
export default function Musicians(props: MusiciansProps) {
    return (
        <>
            <Breadcrumb className="pb-12">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink to="/">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash/>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        Liste des musiciens
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col gap-10">
                <StrapiListInfos meta={props.meta}/>
                <MusiciansTable musicians={props.musicians}/>
                <StrapiPagination meta={props.meta}/>
            </div>
        </>
    )
}