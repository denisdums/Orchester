import {IUser} from "~/interfaces/User.interface";
import SuitTable from "~/components/organisms/SuitTable";
import AccountInformation from "~/components/molecules/AccountInformation";

export default function Account({user}: { user: IUser }) {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <h1>Mon compte</h1>
                <p>Bonjour {user.musician.full_name} !</p>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Mon Costume" defaultChecked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <SuitTable suit={user.musician.suit}/>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Mes informations"/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="flex flex-col gap-4">
                        <AccountInformation name="email" label="Email" value={user.email}/>
                        <AccountInformation name="username" label="Nom d'utilisateur" value={user.username}/>
                        <AccountInformation name="birth_date" label="Date de naissance" value={user.musician.birth_date}/>
                        <AccountInformation name="pupitre" label="Pupitre" value={user.musician.pupitre.title}/>
                    </div>
                </div>
            </div>
        </div>
    )
}