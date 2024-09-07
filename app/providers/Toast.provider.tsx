import {createContext, useContext, useEffect, useState} from "react";
import Toast, {ToastProps} from "~/components/molecules/Toast";

export type UserContextType = {
    toast: ToastProps | undefined;
    setToast: (toast: any) => void;
}

export const ToastContext = createContext<UserContextType>({
    toast: undefined,
} as UserContextType);

export default function ToastProvider(props: { children: any }) {
    const [toast, setToast] = useState<any>(undefined);
    const [toastActive, setToastActive] = useState<boolean>(false);

    useEffect(() => {
        if (toast === undefined) return
        setToastActive(true)
        setTimeout(() => setToastActive(false), 3000)
    }, [toast])

    useEffect(() => {
        if (toastActive) return
        setToast(undefined)
    }, [toastActive]);

    return (
        <ToastContext.Provider value={{toast, setToast}}>
            {props.children}
            {toastActive && toast !== "undefined" && <Toast toast={toast}/>}
        </ToastContext.Provider>
    );
}

export const useToast = () => {
    const {toast, setToast} = useContext(ToastContext);
    return {toast, setToast};
}