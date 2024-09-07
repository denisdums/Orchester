import {UserIcon} from "~/components/atoms/UserIcon";
import {useRef, useContext, useEffect, ChangeEventHandler, ChangeEvent} from "react";
import {UserContext} from "~/providers/User.provider";
import {Link, useLocation} from "@remix-run/react";
import LoginForm from "~/components/organisms/LoginForm";

export function UserStatus() {
    const connectedDropdown = useRef<HTMLDivElement>(null);
    const modal = useRef<HTMLDialogElement>(null);
    const {isLogged, user, themeSwitchChecked, setThemeSwitchChecked} = useContext(UserContext);
    const {pathname} = useLocation();

    useEffect(() => {
        connectedDropdown.current?.querySelectorAll("*").forEach((element) => {
            const elementWithFocus = element as HTMLElement;
            elementWithFocus.blur()
        })
    }, [pathname])

    function handleShowModal() {
        modal.current?.showModal();
    }

    function handleThemeChange(event: ChangeEvent<HTMLInputElement>) {
        const theme = event.currentTarget.checked ? "dark" : "light";
        localStorage.setItem("theme", theme);
        setThemeSwitchChecked(theme === "dark");
    }

    if (isLogged && user) {
        const {musician} = user;
        const {full_name} = musician;
        const letters = full_name.split(" ").map((name) => name[0]).join("");
        return (
            <div className="dropdown dropdown-end" ref={connectedDropdown}>
                <div tabIndex={0} role="button" className="avatar placeholder">
                    <div
                        className="bg-neutral hover:bg-neutral/80 text-neutral-content rounded-full w-12 transition-all">
                        <span className="text-xs">{letters}</span>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link to={"/account"}>Mon compte</Link>
                    </li>
                    {user.role.type === "comite" && (
                        <li>
                            <Link to={"/events"}>Evènements</Link>
                        </li>
                    )}
                    <li>
                        <Link to={"/logout"}>Se déconnecter</Link>
                    </li>
                    <li>
                        <label className="flex cursor-pointer gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"/>
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                            </svg>
                            <input type="checkbox" value="dark" className="toggle theme-controller"
                                   defaultChecked={themeSwitchChecked}
                                   onChange={(e) => handleThemeChange(e)}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <>
            <button className="btn btn-primary text-white" onClick={handleShowModal}>
                <UserIcon className={"w-4"}/>
            </button>
            <dialog ref={modal} className="modal">
                <div className="modal-box">
                    <LoginForm/>
                </div>
            </dialog>
        </>
    )
}