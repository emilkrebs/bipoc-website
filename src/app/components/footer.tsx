"use client";

import Link from "next/link";
import Image from "next/image";
import { INSTAGRAM_URL } from "../lib/constants";
import { usePathname } from "next/navigation";
import { getLocale } from "../lib/localisation";

// Footer — appears at the bottom of every page.
//
// Social media links: edit src/app/lib/constants.ts  (INSTAGRAM_URL)
//                     edit the profiles array below  (YouTube, Facebook)
// Legal links (Imprint, Privacy): the label text comes from texts/{locale}/data.md
// Contact email: edit src/app/lib/constants.ts  (CONTACT_EMAIL)

export default function Footer(
    { imprint, privacy, contact }: {
        imprint?: string;
        privacy?: string;
        contact?: string;
    },
) {
    const pathname = usePathname();
    const locale = getLocale(pathname);

    return (
        <footer className="flex flex-col items-center justify-between w-full gap-6 px-4 py-8 shadow-xl rounded-t-2xl bg-neutral-950 border-t border-pink-950 text-white">
            {/* Social media icons */}
            <SocialMediaLinks />

            {/* Legal links */}
            <nav aria-label="Legal and contact links">
                <ul
                    role="list"
                    className="flex flex-col items-center justify-between gap-4 sm:gap-10 sm:flex-row"
                >
                    <li>
                        <Link
                            href={`/${locale}/imprint`}
                            className="hover:text-pink-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded px-1 transition-colors"
                        >
                            {imprint}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`/${locale}/privacy`}
                            className="hover:text-pink-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded px-1 transition-colors"
                        >
                            {privacy}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="mailto:bipoconference2020@riseup.net"
                            className="hover:text-pink-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded px-1 transition-colors"
                        >
                            {contact}
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Developer credit */}
            <p className="text-sm text-neutral-400">
                Developed with ❤️ by{" "}
                <Link
                    href="https://emilkrebs.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded transition-colors"
                >
                    Emil Krebs
                </Link>
            </p>
        </footer>
    );
}

function SocialMediaLinks() {
    // To add or remove social media accounts, edit this array.
    // Each entry needs: name (shown to screen readers), url, icon (path in /public/icons/).
    const profiles = [
        { name: "Instagram", url: INSTAGRAM_URL, icon: "/icons/instagram.svg" },
        {
            name: "YouTube",
            url: "https://www.youtube.com/channel/UCAU55PiRTlEZwLsSV_zoLsw",
            icon: "/icons/youtube.svg",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/BIPoCN",
            icon: "/icons/facebook.svg",
        },
    ];

    return (
        <nav aria-label="Social media links">
            <ul
                role="list"
                className="flex flex-row items-center justify-center gap-8 my-2"
            >
                {profiles.map((profile) => (
                    <li key={profile.name}>
                        <Link
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={profile.name}
                            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded p-1 block"
                        >
                            <Image
                                className="filter-white transition-transform hover:-translate-y-0.5"
                                src={profile.icon}
                                alt=""
                                aria-hidden="true"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
