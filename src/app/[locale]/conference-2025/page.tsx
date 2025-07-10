import LinkButton from "@/app/components/link-button";
import RenderMarkdown from "@/app/components/markdown";
import { CONTACT_EMAIL, REGISTRATION_FORM_URL, PROGRAM_URL, AWARENESS_CONCEPT_URL } from "@/app/lib/constants";
import Link from "next/link";
import Sponsors from "./sponsors";
import { LocaleProps } from "../layout";
import { getTextData } from "@/app/lib/texts";

const pagePath = "conference-2025";

export default async function InformationPage({ params }: LocaleProps) {
	const { locale } = await params;

	const registrationText = (await getTextData(`${pagePath}/registration`, locale)).content;
	const locationText = (await getTextData(`${pagePath}/location`, locale)).content;
	const programText = (await getTextData(`${pagePath}/program`, locale)).content;
	const awarenessConceptText = (await getTextData("awareness-concept", locale)).content;

	return (
		<main className="min-h-screen flex flex-col items-center justify-center w-full bg-[url(/background_2.webp)] bg-fixed py-12 px-2 md:px-16">
			<section className="flex flex-col items-center justify-center w-full">
				<div className="flex flex-col items-start justify-start w-full md:max-w-6xl bg-black/70 rounded-xl p-4 md:p-8 shadow-2xl">
					<h2 className="text-xl font-extrabold tracking-tight text-left text-pink-500 md:text-4xl">
						Conference 2025
					</h2>
					<p className="mb-6 text-base leading-relaxed text-left text-neutral-300 md:text-lg">
						Everything you need to know at a glance. If you have any questions, please check the <Link href="/faq#faq" className="text-pink-500 hover:underline">FAQ</Link> or write us an <Link href={`mailto:${CONTACT_EMAIL}`} className="text-pink-500 hover:underline">email</Link>.
					</p>

					<h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
						Registration
					</h3>
					<div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
						<RenderMarkdown content={registrationText} />
						<LinkButton
							href={REGISTRATION_FORM_URL}
							target="_blank"
						>
							Registration Form
						</LinkButton>
					</div>

					<h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
						Location
					</h3>
					<div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
						<RenderMarkdown content={locationText} />
					</div>

					<h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
						Programm/ Schedule
					</h3>
					<div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
						<RenderMarkdown content={programText} />
						<LinkButton
							href={PROGRAM_URL}
							target="_blank"
						>
							View Programm
						</LinkButton>
					</div>

					<h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
						Awareness Concept
					</h3>
					<div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
						<RenderMarkdown content={awarenessConceptText} />
						<LinkButton
							href={AWARENESS_CONCEPT_URL}
							target="_blank"
						>
							Awareness Concept PDF
						</LinkButton>
					</div>

				</div>
				<Sponsors />
			</section>
		</main>
	);
}
