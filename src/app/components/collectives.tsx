import Link from "next/link";
import Image from "next/image";

export default function Collectives({ title, collectives }: { title?: string, collectives: { href: string, src: string, title: string, rounded?: boolean }[] }) {
	return (
		<section id="collectives" className="flex flex-col items-center sm:items-start justify-center w-full gap-8 py-8 text-white">
			<h2 className="text-4xl font-bold border-b-2 border-black">{title || "Collectives"}</h2>

			<div className="flex flex-wrap items-baseline justify-center sm:justify-between w-full gap-8 mt-8 sm:gap-16 h-fit lg:gap-28">
				{collectives.map((collective, index) => (
					<Link key={index} className="transition-transform h-max group w-36 hover:-translate-y-1" href={collective.href} title={collective.title}>
						<Image
							className={`object-cover size-max ${collective.rounded ? "rounded-full" : ""}`}
							src={collective.src}
							loading='lazy'
							alt={collective.title}
							width={100}
							height={100}
						/>
						<span className="invisible block py-2 text-xs font-semibold text-center group-hover:visible">{collective.title}</span>
					</Link>
				))}
			</div>
		</section>
	);
}