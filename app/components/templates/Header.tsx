import {Link} from "@remix-run/react";
import SearchBar from "~/components/molecules/SearchBar";
import {UserStatus} from "~/components/organisms/UserStatus";
import {useContext} from "react";
import {UserContext} from "~/providers/User.provider";

export default function Header() {
  const {user} = useContext(UserContext);

  return (
    <header className="py-4">
      <div className="max-w-5xl px-4 lg:px-0 mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">Orchester.</Link>
        <SearchBar/>
        {/*{user && user.role.type === "comite" && <SearchBar/>}*/}
        <div>
          <UserStatus/>
        </div>
      </div>
    </header>
  )
}