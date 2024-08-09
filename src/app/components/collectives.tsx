import Link from "next/link";
import Image from "next/image";

const imageRoot = "/collectives";

const collectives: { href: string, src: string, title: string }[] = [
	{
		href: "https://linktr.ee/back2soilbasics",
		src: `${imageRoot}/back2soilbasics.webp`,
		title: "@back2soilbasics"
	},
	{
		href: "https://stichtingaralez.com/",
		src: `${imageRoot}/aralez.webp`,
		title: "Aralez"
	},
	{
		href: "https://herewedrawtheline.org/",
		src: `${imageRoot}/herewedrawtheline.svg`,
		title: "Here we draw the line"
	},
	{
		href: "https://mamakiya.org/",
		src: `${imageRoot}/mamakiya.webp`,
		title: "Mamakiya"
	},
	{
		href: "https://afrofeminas.com/",
		src: `${imageRoot}/afrofeminas.webp`,
		title: "Afrofeminas"
	},
	{
		href: "https://bewegungsschule.org/",
		src: `${imageRoot}/bewegungsschule.webp`,
		title: "Bewegungsschule"
	},
	{
		href: "https://www.ataec.com/user/274",
		src: `${imageRoot}/colectivx.webp`,
		title: "Colectivx Raíces Negras"
	},
	{
		href: "https://www.instagram.com/colectivo.amra/",
		src: `${imageRoot}/amra.webp`,
		title: "AMRA COLLECTIVE"
	},
	{
		href: "https://www.instagram.com/afrofem.marseille",
		src: `${imageRoot}/afroqueerfem.webp`,
		title: "AfroQueerFem"
	},
	{
		href: "https://www.instagram.com/collettivo.menen/",
		src: `${imageRoot}/menen_abegascn.webp`,
		title: "Collettivo Menen Abegasc"
	},
	{
		href: "https://iwspace.de/",
		src: `${imageRoot}/iwspace.webp`,
		title: "International Women* Space"
	},
];

export default function Collectives() {
	return (
		<section id="collectives" className="flex flex-col items-start justify-center w-full gap-8 py-8 text-white">
			<h2 className="text-4xl font-bold border-b-2 border-black">Collectives</h2>

			<div className="flex flex-wrap items-baseline justify-between w-full gap-8 mt-8 sm:gap-16 h-fit lg:gap-28">
				{collectives.map((collective, index) => (
					<Link key={index} className="transition-transform h-max group w-36 hover:-translate-y-1" href={collective.href} title={collective.title}>
						<Image
							className="object-cover size-max"
							src={collective.src}
							alt={collective.title}
							width={100}
							height={100}
						/>
						<span className="invisible block mt-2 text-xs font-light text-center group-hover:visible">{collective.title}</span>
					</Link>
				))}
			</div>
		</section>
	);
}