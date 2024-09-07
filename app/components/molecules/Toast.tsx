export type EventPresencesToastsProps = {
    toast: ToastProps,
}

export type ToastProps = {
    status: "success" | "error";
    content: string;
}
export default function Toast({toast}: EventPresencesToastsProps) {
    return (
        <>
            {toast.status === "success" &&
                <div className="toast toast-top toast-end">
                    <div className="alert alert-success text-white">
                        <span>{toast.content}</span>
                    </div>
                </div>
            }
            {toast.status === "error" &&
                <div className="toast toast-top toast-end">
                    <div className="alert alert-error text-white">
                        <span>{toast.content}</span>
                    </div>
                </div>
            }
        </>
    )
}