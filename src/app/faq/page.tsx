import RenderMarkdown from "../components/markdown";
import { REGISTRATION_FORM_URL } from "../lib/constants";

export default function FaqPage() {
	const faqs = [
		{
			question: "Who can attend the summit?",
			answer: `The summit is open to comrades who identify as Black, Indigenous, and/or People of Color and who align with the political grounding shared above. We welcome all BIPoC who are passionate about social justice issues, all of which relate back to climate and environment.
Our conference is not open to white people.
`,
			open: true,
		},
		{
			question: "What about white-passing BIPoC?",
			answer: `First of all, white-passing BIPoC are still welcome. If you are white-passing, we ask you to take some time to reflect on your experience in the world - in terms of access, safety and passing due to racial ambiguity. What does this means for you and for others? We ask these questions not to deny people their experiences or heritage, but rather to create a safer space for our communities and those most marginalized within them. In order to do so, it is fundamental that we all understand how our positionalities and privileges relate to power dynamics shaped the complexities of racism, classism and gender-based violence. How do these privileges inform how you should - or should not - show up in a BIPoC space? Which roles or postions in terms of leadership or decision-making can you take up - or maybe better not?

If reading this activated you in any kind of way, we want to remind you to welcome these feelings or thoughts and not push them away. We don't ask anybody to defend themselves. This is an invitation to reflect and learn, so that we can welcome one another into the space with a full heart. 

An offering in this moment can be the following information source: https://www.queensjournal.ca/recognizing-being-white-passing-as-a-privilege/
`,
		},
		{
			question: "What are radical affinity spaces?",
			answer: `As acknowledged above, the term BIPoC does not represent the complexity and nuances as people who experience oppression for our bodies and cultures. In learning from last year, we want to schedule significant time during the first day, to hold affinity spaces for people who share specific experiences. This space is an offering for people to bond over their shared identities or positions in socitey,to ask questions and exchange, to grieve and heal, and to celebrate and just exist together. This could look like spaces for Black folx, latinamerican Indigenous folx, Trans Inter and Non-Binary folx, dis_abled (visible and invisible) folx - this list is just a suggestion and we know that these identities overlap for many of us. If you feel like things are missing, need to be merged, or more specified, we are open to your ideas and rely on your contributions. 

We encourage all affinity spaces to bring their reflections back to plenum as an opportunity to learn and grow as a collective.

If you already want to suggest an affinity space we welcome you to get in touch with us. 

For a deeper dive into affinity spaces: https://sisumagazine.com/blogs/issue-7-lawful-bodies/the-power-of-affinity-spaces
`,
		},
		{
			question: "What topics will be covered at the summit?",
			answer: `The summit will cover a range of topics including:
The conferene will have three full program days. These are themed as follows:  
1. Day: Understanding our network: Acknowldgeing our differences, Learning from one another
2. Day: Practicing New Worlds 
3. Day: Carrying the Work Forward: Fuck The Emipre 

In the website section Conference 2025 you can access our programm draft with more detailed information. We will post a detailed schedule once we have the sessions finalized.
`,
		},
		{
			question: "How can I register for the summit?",
			answer: `The registrations will open soon. Registrations are available following this link:
            ${REGISTRATION_FORM_URL}
`,
			open: true,
		},
		{
			question: "Is there a virtual attendance option?",
			answer: "Due to our capacities, we cannot offer an online format.",
		},
	];

	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-[url(/background_2.webp)] bg-fixed py-16 px-4">
			<section id="faq" className="flex flex-col items-center w-full">
				<div className="flex flex-col w-full max-w-2xl p-8 bg-white/90 rounded-2xl shadow-2xl border border-neutral-200">
					<h2 className="text-4xl font-extrabold text-neutral-900 mb-2 tracking-tight">FAQ</h2>
					<p className="text-neutral-500 mb-8">Frequently Asked Questions</p>
					<div className="flex flex-col w-full gap-4">
						{faqs.map((faq, index) => (
							<details
								className="group w-full rounded-lg border border-neutral-200 bg-neutral-50 transition-shadow shadow-sm open:shadow-md"
								key={index}
								open={faq.open}
							>
								<summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none text-lg font-semibold text-neutral-800 group-open:text-blue-700 transition-colors">
									<span>{faq.question}</span>
									<svg
										className="ml-2 h-5 w-5 text-neutral-400 group-open:rotate-180 transition-transform"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</summary>
								<div className="px-5 pb-4 pt-2 text-neutral-700 text-base leading-relaxed">
									<RenderMarkdown content={faq.answer} />
								</div>
							</details>
						))}
						<div className="mt-6 mb-2">
							<h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
								Accessibility: Space &amp; Transport
							</h3>
							<p className="text-neutral-700 mt-2 mb-4 bg-blue-50 rounded-lg p-4 border border-blue-100">
								We are currently finalizing venue details and will update this section with comprehensive accessibility information soon. A prayer room is planned.<br /><br />
								We aim to collaborate with disability justice groups to organize transportation and accommodations for inclusive participation. If you have accessibility needs, please email us—we want to support you.
							</p>
						</div>
						<div className="mb-2">
							<h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
								Accessibility: Languages
							</h3>
							<p className="text-neutral-700 mt-2 mb-4 bg-blue-50 rounded-lg p-4 border border-blue-100">
								Our organizing team primarily communicates in English, but German and Spanish speakers are present. Last year’s main conference languages were English and Spanish. All sessions offer simultaneous translation into German, Spanish, and English.<br /><br />
								If you prefer another language, please contact us early for translation support.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
