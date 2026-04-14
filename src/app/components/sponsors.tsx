import Link from "next/link";
import Image from "next/image";
import { Sponsor } from "../lib/types";

// Sponsors — displays a grid of sponsor logos with links.
//
// To add or remove sponsors:
//   → Edit src/data/sponsors.json  (2025 conference)
//   → Edit src/data/archive-sponsors.json  (2024 archive)
//
// Each sponsor needs: href (website URL), src (logo path in /public/), title (name).

interface SponsorsProps {
    title?: string;
    sponsors?: Sponsor[];
}

export default function Sponsors({ title, sponsors = [] }: SponsorsProps) {
    return (
        <section
            id="sponsors"
            aria-labelledby="sponsors-heading"
            className="flex flex-col items-center justify-center w-full gap-8 p-8 text-white"
        >
            <h2
                id="sponsors-heading"
                className="text-3xl font-bold text-center border-b-2 border-pink-900/60 pb-2 text-balance"
            >
                {title}
            </h2>

            <ul
                role="list"
                className="flex flex-wrap items-baseline justify-center w-full gap-8 mt-4 sm:justify-evenly sm:gap-16 h-fit lg:gap-28"
            >
                {sponsors.map((sponsor, index) => (
                    <li key={index} className="w-64 h-fit">
                        <Link
                            className="block transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
                            href={sponsor.href}
                            title={sponsor.title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className={`object-cover size-max ${sponsor.rounded ? "rounded-full" : ""}`}
                                src={sponsor.src}
                                loading="lazy"
                                alt={sponsor.title}
                                width={100}
                                height={100}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
