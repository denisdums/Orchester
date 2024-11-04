import classNames from "classnames";
import {HTMLAttributes} from "react";
import {Loader2} from "lucide-react";

export default function Spinner(props: HTMLAttributes<HTMLSpanElement>) {
    const classes = classNames("mr-2 h-4 w-4 animate-spin", props.className);
    return <Loader2 className={classes} />
}