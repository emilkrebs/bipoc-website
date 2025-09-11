"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getLocale } from "../lib/localisation";

export default function Navbar(
    { links }: { links: { href: string; label: string }[] },
) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const locale = getLocale(pathname);

    return (
        <nav className="flex flex-row items-center justify-between w-full gap-2 p-4 text-base text-white bg-neutral-800 relative">
            <Link href={`/${locale}`} className="font-bold text-pink-500">
        BIPoC Climate Justice Conference
            </Link>
            <div className="flex items-center gap-4">
                {/* Burger menu button */}
                <button
                    className="flex flex-col justify-center items-center w-8 h-8 md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Open menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
                            open ? "rotate-45 translate-y-1.5" : ""
                        }`}
                    >
                    </span>
                    <span
                        className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
                            open ? "opacity-0" : ""
                        }`}
                    >
                    </span>
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all ${
                            open ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                    >
                    </span>
                </button>
            </div>
            {/* Dropdown menu */}
            {open && (
                <div className="absolute top-full right-4 mt-2 bg-neutral-900 rounded shadow-lg flex flex-col min-w-[180px] z-50 md:hidden">
                    <Link
                        href={`/${locale}`}
                        className="px-4 py-2 hover:bg-neutral-700"
                        onClick={() => setOpen(false)}
                    >
            Home
                    </Link>
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={`/${locale}${href}`}
                            className="px-4 py-2 hover:bg-neutral-700"
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
            {/* Desktop links */}
            <div className="hidden md:flex gap-4 items-center">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={`/${locale}${href}`}
                        className="hover:underline"
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
