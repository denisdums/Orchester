import {Link} from "@remix-run/react";
import {UserStatus} from "~/components/organisms/UserStatus";
import SearchBar from "../molecules/SearchBar";
import {useContext} from "react";
import {UserContext} from "~/providers/User.provider";

export default function Header() {

    const {user} = useContext(UserContext);
    return (
        <header className="py-4">
            <div className="max-w-5xl px-4 lg:px-0 mx-auto flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold">
                        Orchester.
                    </Link>
                    <UserStatus/>
                </div>
                {user && user.role.type === "comite" && (
                    <div className='w-full flex items-center justify-center bg-primary/5 p-4 rounded'>
                        <SearchBar/>
                    </div>
                )}
            </div>
        </header>
    );
}
