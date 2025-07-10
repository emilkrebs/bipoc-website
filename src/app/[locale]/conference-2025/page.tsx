import LinkButton from "@/app/components/link-button";
import RenderMarkdown from "@/app/components/markdown";
import { REGISTRATION_FORM_URL, PROGRAM_URL, AWARENESS_CONCEPT_URL } from "@/app/lib/constants";
import Sponsors from "./sponsors";
import { LocaleProps } from "../layout";
import { getTextData } from "@/app/lib/texts";
import { locales } from "@/app/lib/localisation";

// Generate static params for all locales
export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

const pagePath = "conference-2025";

export default async function InformationPage({ params }: LocaleProps) {
	const { locale } = await params;

	const data = await getTextData(`${pagePath}/data`, locale);
	const registrationText = (await getTextData(`${pagePath}/registration`, locale)).content;
	const locationText = (await getTextData(`${pagePath}/location`, locale)).content;
	const programText = (await getTextData(`${pagePath}/program`, locale)).content;
	const awarenessConceptText = (await getTextData("awareness-concept", locale)).content;

	return (
		<main className="min-h-screen flex flex-col items-center justify-center w-full bg-[url(/background_2.webp)] bg-fixed py-12 px-2 md:px-16">
			<section className="flex flex-col items-center justify-center w-full">
				<div className="flex flex-col items-start justify-start w-full md:max-w-6xl bg-black/70 rounded-xl p-4 md:p-8 shadow-2xl">
					<h2 className="text-xl font-extrabold tracking-tight text-left text-pink-500 md:text-4xl">
						{data.title || "Conference 2025 Information"}
					</h2>
					<div className="mb-6 text-base leading-relaxed text-left text-neutral-300 md:text-lg">
						<RenderMarkdown content={data.content} />
					</div>

					<h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
						{data.registration || "Registration"}
					</h3>
					<div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
						<RenderMarkdown content={registrationText} />
						<LinkButton
							href={REGISTRATION_FORM_URL}
							target="_blank"
						>
							{data.registrationForm || "Registration Form"}
						</LinkButton>
					</div>

					<h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
						{data.location || "Location"}
					</h3>
					<div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
						<RenderMarkdown content={locationText} />
					</div>

					<h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
						{data.schedule || "Program/ Schedule"}
					</h3>
					<div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
						<RenderMarkdown content={programText} />
						<LinkButton
							href={PROGRAM_URL}
							target="_blank"
						>
							{data.viewProgram || "View Program"}
						</LinkButton>
					</div>

					<h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
						{data.awarenessConcept || "Awareness Concept"}
					</h3>
					<div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
						<RenderMarkdown content={awarenessConceptText} />
						<LinkButton
							href={AWARENESS_CONCEPT_URL}
							target="_blank"
						>
							{data.awarenessConcept + " PDF" || "Awareness Concept PDF"}
						</LinkButton>
					</div>

				</div>
				<Sponsors />
			</section>
		</main>
	);
}
