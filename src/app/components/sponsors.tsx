import Link from "next/link";
import Image from "next/image";

const sponsors = "/sponsor";

const collectives: { href: string, src: string, title: string, rounded?: boolean }[] = [
	{
		href: "https://www.bewegungsstiftung.de/",
		src: `${sponsors}/bewegungs_stiftung.svg`,
		title: "Bewegungs Stiftung"
	},
	{
		href: "https://guerrillafoundation.org/",
		src: `${sponsors}/guerrilla.svg`,
		title: "Guerrilla Foundation"
	},
	{
		href: "https://www.heidehof-stiftung.de/",
		src: `${sponsors}/heidenhof_stiftung.png`,
		title: "Heidenhof Stiftung"
	},
];

export default function Sponsors() {
	return (
		<section id="collectives" className="flex flex-col items-center justify-center w-full gap-8 p-8 text-white">
			<h2 className="text-4xl font-bold text-center border-b-2 border-black">Sponsored by</h2>

			<div className="flex flex-wrap items-baseline justify-center w-full gap-8 mt-8 sm:justify-evenly sm:gap-16 h-fit lg:gap-28">
				{collectives.map((collective, index) => (
					<Link key={index} className="w-64 transition-transform h-fit group" href={collective.href} title={collective.title}>
						<Image
							className={`object-cover size-max ${collective.rounded ? "rounded-full" : ""}`}
							src={collective.src}
							loading='lazy'
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