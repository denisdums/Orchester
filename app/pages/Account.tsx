import {IUser} from "~/interfaces/user.interface";
import AccountInformation from "~/components/molecules/AccountInformation";
import {H3, H4} from "~/components/ui/typography";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "~/components/ui/breadcrumb";
import {Slash} from "lucide-react";

export default function Account({user}: { user: IUser }) {
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
                    <BreadcrumbItem>
                        Mon compte
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col gap-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <AccountInformation name="email" label="Email" value={user.email}/>
                    <AccountInformation name="username" label="Nom d'utilisateur" value={user.username}/>
                    <AccountInformation name="birth_date" label="Date de naissance" value={user.musician.birth_date}/>
                    <AccountInformation name="pupitre" label="Pupitre" value={user.musician.pupitre.title}/>
                </div>
            </div>
        </>
    )
}