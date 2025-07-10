import LinkButton from "@/app/components/link-button";
import RenderMarkdown from "@/app/components/markdown";
import { CONTACT_EMAIL, REGISTRATION_FORM_URL, PROGRAM_URL, AWARENESS_CONCEPT_URL } from "@/app/lib/constants";
import Link from "next/link";
import Sponsors from "./sponsors";


export default function InformationPage() {
	const registrationText = `The registrations are open! If you would like to join us as a participant or contribute to this years program, please click the link below. Please do not book your travels before we have confirmed you as a contributor or participant.
`;

	const locationText = `This year we will be located in Basque Country in **Northern Spain** about an hour away from Bilbao. We are teaming up with a beautiful venue in a rural area. Due to security precautions, we will not share the explicit location of the venue on the website.  

Once the registrations are approved, we will share all relevant details with attendees and contributors.

This decision is informed mostly by wanting to be extra careful in an area that most of the core organizing team is not very familiar with.  
We do not expect any kind of incident to occur! Besides that, we are planning a safety strategy for transport to and from the venue.
`;

	const programText = `Also this year we curated a wonderful programm, which is still waiting on your contribution. Get creative and submit whatever you like. We came up with a rough drafted of how we envision the sessions and timing. This is not a limitation but an inspiration! Any suggestion is welcome. We will do our best to fit it into this years curation. 

To check out the draft please click the link below.`;

	const awarenessConceptText = "Awareness is a collective effort for all our wellbeing. Click on the link below to access our awareness concept and code of conduct for our shared time. ";
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
