import Link from "next/link";
import Image from "next/image";

interface SponsorsProps {
  title?: string;
  sponsors?: { href: string; src: string; title: string; rounded?: boolean }[];
}

export default function Sponsors({ title, sponsors = [] }: SponsorsProps) {
    return (
        <section
            id="sponsors"
            className="flex flex-col items-center justify-center w-full gap-8 p-8 text-white"
        >
            <h2 className="text-4xl font-bold text-center border-b-2 border-black">
                {title}
            </h2>

            <div className="flex flex-wrap items-baseline justify-center w-full gap-8 mt-8 sm:justify-evenly sm:gap-16 h-fit lg:gap-28">
                {sponsors.map((collective, index) => (
                    <Link
                        key={index}
                        className="w-64 transition-transform h-fit group"
                        href={collective.href}
                        title={collective.title}
                    >
                        <Image
                            className={`object-cover size-max ${
                                collective.rounded ? "rounded-full" : ""
                            }`}
                            src={collective.src}
                            loading="lazy"
                            alt={collective.title}
                            width={100}
                            height={100}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
