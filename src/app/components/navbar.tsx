"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getLocale } from "../lib/localisation";

// Navbar — the main navigation bar shown at the top of every page.
//
// Links are loaded from texts/{locale}/data.md (the "about", "archive", etc. fields).
// The homeLabel comes from the "home" field in data.md.
// Brand name "BIPoC Climate Justice Conference" is intentionally not translated.

export default function Navbar(
    { links, homeLabel = "Home" }: {
        links: { href: string; label: string }[];
        homeLabel?: string;
    },
) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const locale = getLocale(pathname);

    // Close mobile menu when Escape is pressed (WCAG 2.1 SC 1.4.13, 2.1.1)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) {
                setOpen(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open]);

    const isActive = (href: string) =>
        pathname === `/${locale}${href}` || pathname === `/${locale}${href}/`;
    const isHome =
        pathname === `/${locale}` || pathname === `/${locale}/`;

    return (
        <nav
            aria-label="Main navigation"
            className="flex flex-row items-center justify-between w-full gap-2 p-4 text-base text-white bg-neutral-950 border-b border-pink-950 relative z-40"
        >
            {/* Brand / home link */}
            <Link
                href={`/${locale}`}
                className="font-bold text-pink-400 hover:text-pink-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded px-1"
                aria-current={isHome ? "page" : undefined}
            >
                BIPoC Climate Justice Conference
            </Link>

            <div className="flex items-center gap-4">
                {/* Hamburger button — visible only on mobile */}
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 md:hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-200 ${
                            open ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-200 ${
                            open ? "opacity-0 scale-x-0" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                            open ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {open && (
                <div
                    id="mobile-menu"
                    role="menu"
                    aria-label="Navigation menu"
                    className="absolute top-full right-0 left-0 mt-0 bg-neutral-950 border-t border-neutral-800 shadow-2xl flex flex-col z-50 md:hidden"
                >
                    <Link
                        href={`/${locale}`}
                        role="menuitem"
                            className={`px-6 py-4 border-b border-neutral-800 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:bg-neutral-900 ${
                            isHome
                                ? "text-pink-400 font-semibold"
                                : "text-white"
                        }`}
                        onClick={() => setOpen(false)}
                        aria-current={isHome ? "page" : undefined}
                    >
                        {homeLabel}
                    </Link>
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={`/${locale}${href}`}
                            role="menuitem"
                            className={`px-6 py-4 border-b border-neutral-800 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:bg-neutral-900 ${
                                isActive(href)
                                    ? "text-pink-400 font-semibold"
                                    : "text-white"
                            }`}
                            onClick={() => setOpen(false)}
                            aria-current={isActive(href) ? "page" : undefined}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}

            {/* Desktop links — hidden on mobile */}
            <ul className="hidden md:flex gap-1 items-center list-none" role="list">
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={`/${locale}${href}`}
                            className={`px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
                                isActive(href)
                                    ? "text-pink-400 font-semibold underline underline-offset-2"
                                    : "text-white hover:text-pink-300"
                            }`}
                            aria-current={isActive(href) ? "page" : undefined}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
