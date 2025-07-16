import Collectives from "./collectives";
import InstagramPosts from "./instagram-posts";
import LinkButton from "@/app/components/link-button";
import RenderMarkdown from "@/app/components/markdown";
import { getTextData } from "@/app/lib/texts";
import { LocaleProps } from "../layout";
import ImageSlideshow from "./slideshow";
import { locales } from "@/app/lib/localisation";
import Sponsors from "@/app/components/sponsors";

// Generate static params for all locales
export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

const sponsorPath = "/archive/2024/sponsor";

const sponsors: { href: string, src: string, title: string, rounded?: boolean }[] = [
	{
		href: "https://www.bewegungsstiftung.de/",
		src: `${sponsorPath}/bewegungs_stiftung.svg`,
		title: "Bewegungs Stiftung"
	},
	{
		href: "https://guerrillafoundation.org/",
		src: `${sponsorPath}/guerrilla.svg`,
		title: "Guerrilla Foundation"
	},
	{
		href: "https://www.heidehof-stiftung.de/",
		src: `${sponsorPath}/heidenhof_stiftung.png`,
		title: "Heidenhof Stiftung"
	},
];

export default async function ArchivePage({ params }: LocaleProps) {
	const { locale } = await params;
	const archiveData = (await getTextData("archive", locale));
	const data = (await getTextData("data", locale));
	return (
		<main className="min-h-screen flex flex-col items-center justify-start gap-4 bg-[url(/background_2.webp)] bg-fixed py-8 md:py-16 px-2 md:px-16 text-white">
			<div className="w-full max-w-7xl">
				
				<h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 md:mb-10 tracking-tight text-center drop-shadow-lg">
					{archiveData.title || "Archive 2024"}
				</h1>
				<div className="flex-1 text-white whitespace-pre-line">
					<RenderMarkdown content={archiveData.content} />
				</div>

				<ImageSlideshow />

				<Collectives title={archiveData.collectives} />

			</div>
			<Sponsors title={data.sponsorsTitle} sponsors={sponsors} />

			<h2 className="text-2xl md:text-4xl font-bold text-center border-b-2 border-black mb-6 md:mb-8 mt-12 md:mt-16">{data.instagramPosts || "Instagram Posts"}</h2>

			<InstagramPosts />

			<h2 className="text-2xl md:text-4xl font-bold text-center border-b-2 border-black mt-12 md:mt-16">{data.links || "Links"}</h2>
			<div className="flex flex-row items-center justify-center w-full max-w-6xl mt-6 md:mt-8">
				<LinkButton href="https://cryptpad.fr/pad/#/2/pad/edit/ToSKZSbnvFEpt+AfYvNt9bpP/">{data.viewSchedule || "View 2024 Schedule"}</LinkButton>
			</div>
		</main>
	);
}
