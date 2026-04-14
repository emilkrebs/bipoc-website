import Link from "next/link";
import { HTMLProps } from "react";

// LinkButton — the primary call-to-action button used across the site.
//
// To change the button colour: edit the Tailwind classes in baseClasses below.
// Current design: dark forest green gradient with warm cream text (WCAG AAA).

export default function LinkButton({
    href = "/",
    className = "",
    children,
    ...rest
}: HTMLProps<HTMLAnchorElement>) {
    const baseClasses =
        "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold " +
        "text-white bg-gradient-to-r from-rose-700 to-pink-500 shadow-lg " +
        "hover:-translate-y-1 hover:from-rose-600 hover:to-pink-400 hover:shadow-pink-900/40 " +
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 " +
        "transition-all duration-200";
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
