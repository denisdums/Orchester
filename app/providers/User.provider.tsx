import {createContext, useContext, useEffect, useState} from "react";
import {IUser} from "~/interfaces/User.interface";

export type UserContextType = {
    isLogged: boolean | false;
    setIsLogged: (isLogged: boolean) => void;
    user: IUser | undefined;
    setUser: (user: IUser) => void;
    themeSwitchChecked: boolean;
    setThemeSwitchChecked: (themeSwitchChecked: boolean) => void;
}

export const UserContext = createContext<UserContextType>({
    isLogged: false,
    user: undefined,
} as UserContextType);

export default function UserProvider(props: { children: any, isLogged: boolean, user: IUser | undefined; }) {
    const [isLogged, setIsLogged] = useState<boolean>(props.isLogged);
    const [user, setUser] = useState<IUser | undefined>(props.user);
    const [themeSwitchChecked, setThemeSwitchChecked] = useState<boolean>(false);

    useEffect(() => {
        setIsLogged(props.isLogged);
        setUser(props.user);

        const theme = localStorage.getItem("theme") ?? "light";
        setThemeSwitchChecked(theme === "dark");
    }, [props.isLogged, props.user]);

    return (
        <UserContext.Provider value={{isLogged, setIsLogged, user, setUser, themeSwitchChecked, setThemeSwitchChecked}}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const {isLogged, setIsLogged, user, setUser, themeSwitchChecked, setThemeSwitchChecked} = useContext(UserContext);
    return {isLogged, setIsLogged, user, setUser, themeSwitchChecked, setThemeSwitchChecked};
}