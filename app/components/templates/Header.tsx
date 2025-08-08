import { Link } from "@remix-run/react";
import { UserStatus } from "~/components/organisms/UserStatus";
import SearchBar from "../molecules/SearchBar";

export default function Header() {
    return (
        <header className="py-4">
            <div className="max-w-5xl px-4 lg:px-0 mx-auto flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold">
                    Orchester.
                </Link>
                <SearchBar />
                <div>
                    <UserStatus />
                </div>
            </div>
        </header>
    );
}
