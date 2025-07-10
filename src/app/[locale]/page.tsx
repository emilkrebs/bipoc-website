import Image from "next/image";
import { AWARENESS_CONCEPT_URL, INSTAGRAM_URL, } from "../lib/constants";
import Link from "next/link";
import { getTextData } from "../lib/texts";
import RenderMarkdown from "../components/markdown";
import { LocaleProps } from "./layout";
import { locales } from "../lib/localisation";

// Generate static params for all locales
export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

interface LandingSectionProps {
	welcomeText: string;
	bipocStatementData: { title?: string; content: string };
	awarenessConceptData: { title?: string; content: string };
}

export default async function Home({ params }: LocaleProps) {
	const { locale } = await params;
	const welcomeText = await getTextData("welcome", locale);
	const bipocStatementData = await getTextData("bipoc-statement", locale);
	const awarenessConceptData = await getTextData("awareness-concept", locale);

	return (
		<main className="min-h-screen">

			<LandingSection welcomeText={welcomeText.content} bipocStatementData={bipocStatementData} awarenessConceptData={awarenessConceptData} />

		</main>
	);
}

function LandingSection({ welcomeText, bipocStatementData, awarenessConceptData }: LandingSectionProps) {
	return (
		<>
			<link rel="preload" href="/background.webp" as="image" type="image/webp" fetchPriority="high" />
			<section className="flex flex-col items-center justify-center bg-[url(/background.webp)] min-h-screen bg-fixed bg-cover px-2 md:px-16 xl:px-24 2xl:px-48">
				<div className="flex flex-col xl:flex-row gap-4 md:gap-8 w-full my-8 items-stretch">

					{/* Poster Image */}
					<div className="rounded-xl bg-transparent bg-[url(/poster.png)] bg-contain bg-center bg-no-repeat w-fit min-w-[32rem] relative overflow-hidden">
						{/* <Image
							src="/poster.png"
							alt="BIPoC Climate Justice Conference Poster"
							fill
							className="rounded-xl object-contain"
						/> */}
					</div>

					{/* Content Container */}
					<div className="flex flex-col gap-4 items-start justify-stretch flex-1">

						<h1 className="text-red-500 text-xl font-bold sm:text-2xl lg:text-4xl">BIPoC Climate Justice Conference</h1>
						<span className="w-full px-2 py-0 text-2xl font-bold text-center text-white shadow-lg sm:text-4xl md:text-6xl bg-shine">11.09 - 15.09.2025</span>

						<div className="bg-neutral-900/90 flex flex-col items-start justify-start rounded-lg shadow-lg w-full h-full flex-1 p-4 self-stretch">
							<h2 className="text-2xl font-bold text-pink-500 mb-2">Welcome to our website!</h2>
							<div className="text-base text-start text-white md:text-lg">
								<RenderMarkdown content={welcomeText} />
							</div>

							<div className="flex flex-col md:flex-row items-start justify-start gap-4 my-8">
								<Link
									href="/faq"
									target="_blank"
									className="px-5 py-2 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:-translate-y-0.5 transition"
								>
									{bipocStatementData.title || "The BI_POC-Statement"}
								</Link>

								<Link
									href={AWARENESS_CONCEPT_URL}
									target="_blank"
									className="px-5 py-2 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:-translate-y-0.5 transition"
								>
									{awarenessConceptData.title || "Awareness Concept"}
								</Link>

								<Link
									href={INSTAGRAM_URL}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
									className="flex items-center justify-center size-10 rounded-full bg-white/80 hover:bg-white transition shadow-md"
								>
									<Image src="icons/instagram.svg" alt="Instagram" width={24} height={24} />
								</Link>
							</div>
						</div>
					</div>
				</div>

			</section >
		</>
	);
}