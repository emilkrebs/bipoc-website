import Link from "next/link";
import Image from "next/image";
import { Collective } from "../lib/types";

// Collectives — displays a grid of partner collective logos.
//
// To add or remove collectives:
//   → Edit src/data/collectives.json  (2025 conference)
//   → Edit src/data/archive-collectives.json  (2024 archive)
//
// Collectives with no "href" are shown as non-interactive items (no link).

export default function Collectives(
    { title, collectives }: {
        title?: string;
        collectives: Collective[];
    },
) {
    return (
        <section
            id="collectives"
            aria-labelledby="collectives-heading"
            className="flex flex-col items-center sm:items-start justify-center w-full gap-8 py-8 text-white"
        >
            <h2
                id="collectives-heading"
                className="text-3xl font-bold border-b-2 border-pink-900/60 pb-2 text-balance"
            >
                {title || "Collectives"}
            </h2>

            <ul
                role="list"
                className="flex flex-wrap items-baseline justify-center sm:justify-between w-full gap-8 mt-4 sm:gap-16 h-fit lg:gap-28"
            >
                {collectives.map((collective, index) => (
                    <li key={index} className="flex flex-col items-center w-36">
                        <CollectiveItem collective={collective} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

// Renders a link if the collective has a URL, otherwise a plain container.
// This prevents empty href="" links that would confuse keyboard users and
// screen readers.
function CollectiveItem({ collective }: { collective: Collective }) {
    const imageEl = (
        <>
            <Image
                className={`object-cover size-max ${collective.rounded ? "rounded-full" : ""}`}
                src={collective.src}
                loading="lazy"
                alt={collective.title}
                width={100}
                height={100}
            />
            <span className="invisible block py-2 text-xs font-semibold text-center group-hover:visible">
                {collective.title}
            </span>
        </>
    );

    if (collective.href) {
        return (
            <Link
                className="transition-transform h-max group w-36 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
                href={collective.href}
                title={collective.title}
                target="_blank"
                rel="noopener noreferrer"
            >
                {imageEl}
            </Link>
        );
    }

    // No website — render as a static item with an accessible label
    return (
        <span
            className="h-max group w-36"
            title={collective.title}
            aria-label={collective.title}
        >
            {imageEl}
        </span>
    );
}
