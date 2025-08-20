import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import MeilisearchMusicianListing from "../components/organisms/MeilisearchMusicianListing";

export default function Musicians() {
    return (
        <>
            <Breadcrumb className="pb-12">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink to="/">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>Liste des musiciens</BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <MeilisearchMusicianListing />
        </>
    );
}
