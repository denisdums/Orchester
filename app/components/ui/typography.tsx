import {HTMLAttributes} from "react";
import classNames from "classnames";

export function H1(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1 {...props}
            className={classNames("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", props.className)}>
            {props.children}
        </h1>
    )
}

export function H2(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2 {...props}
            className={classNames("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", props.className)}>
            {props.children}
        </h2>
    )
}

export function H3(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 {...props} className={classNames("scroll-m-20 text-2xl font-semibold tracking-tight", props.className)}>
            {props.children}
        </h3>
    )
}

export function H4(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4 {...props} className={classNames("scroll-m-20 text-xl font-semibold tracking-tight", props.className)}>
            {props.children}
        </h4>
    )
}

export function P(props: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p {...props} className={classNames("leading-7 [&:not(:first-child)]:mt-6", props.className)}>
            {props.children}
        </p>
    )
}