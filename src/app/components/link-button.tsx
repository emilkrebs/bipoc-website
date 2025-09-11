import Link from "next/link";
import { HTMLProps } from "react";

export default function LinkButton({
    href = "/",
    className = "",
    children,
    ...rest
}: HTMLProps<HTMLAnchorElement>) {
    const baseClasses =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500";
    return (
        <Link
            href={href}
            className={`${baseClasses} ${className}`}
            {...rest}
        >
            {children}
        </Link>
    );
}
