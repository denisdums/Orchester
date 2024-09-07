import classNames from "classnames";
import {HTMLAttributes} from "react";

export default function Spinner(props: HTMLAttributes<HTMLSpanElement>) {
    const classes = classNames("loading loading-spinner", props.className);
    return <span className={classes} {...props}></span>
}