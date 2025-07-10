import LinkButton from "@/app/components/link-button";
import RenderMarkdown from "@/app/components/markdown";
import { REGISTRATION_FORM_URL, BIPOC_STATEMENT_TEXT } from "@/app/lib/constants";
import Image from "next/image";
import { LocaleProps } from "../layout";
import { getTextData } from "@/app/lib/texts";

export default async function FaqPage({ params }: LocaleProps) {
	const { locale } = await params;

	const faqs = [
		{
			question: (await getTextData("faq/attend", locale)).title,
			answer: (await getTextData("faq/attend", locale)).content,
			open: true,
		},
		{
			question: (await getTextData("faq/white-passing", locale)).title,
			answer: (await getTextData("faq/white-passing", locale)).content,
		},
		{
			question: (await getTextData("faq/radical-affinity", locale)).title,
			answer: (await getTextData("faq/radical-affinity", locale)).content,
		},
		{
			question: (await getTextData("faq/affinity-spaces", locale)).title,
			answer: (await getTextData("faq/affinity-spaces", locale)).content,
		},
		{
			question: (await getTextData("faq/topics", locale)).title,
			answer: (await getTextData("faq/topics", locale)).content,
		},
		{
			question: (await getTextData("faq/registration", locale)).title,
			answer: (await getTextData("faq/registration", locale)).content,
			open: true,
		},
		{
			question: (await getTextData("faq/virtual-attendance", locale)).title,
			answer: (await getTextData("faq/virtual-attendance", locale)).content,
		},
		{
			question: (await getTextData("faq/session-proposal", locale)).title,
			answer: (await getTextData("faq/session-proposal", locale)).content,
		}
	];

	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-[url(/background_2.webp)] bg-fixed">			
			<Statement />
			
			<section id="faq" className="flex flex-col items-center w-full  py-16 px-4">
				<div className="flex flex-col w-full max-w-4xl p-8 bg-white/90 rounded-2xl shadow-2xl border border-neutral-200">
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

function Statement() {
	return (
		<section
			id="statement"
			className="flex flex-col items-center justify-center w-full px-4 py-12 text-white bg-gradient-to-b from-black/80 via-black/60 to-black/80 shadow-2xl md:px-16"
		>
			<div className="flex flex-col items-center justify-between w-full max-w-6xl gap-12 md:flex-row-reverse md:items-start">

				<div className="flex flex-col items-start justify-start w-full max-w-2xl">
					<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-left text-pink-500 md:text-4xl">
						The BI_POC-Statement
					</h2>
					<div className="mb-6 text-base leading-relaxed text-left text-white/90 md:text-lg">
						<RenderMarkdown content={BIPOC_STATEMENT_TEXT} />
					</div>
					<div className="flex flex-row gap-4">
						<LinkButton
							href={REGISTRATION_FORM_URL}
						>
							Register Now!
						</LinkButton>
					</div>
				</div>
				<div className="flex-shrink-0 w-full overflow-hidden rounded-xl shadow-xl md:max-w-sm">
					<Image
						className="object-cover w-full h-full"
						src="/poster.png"
						alt="BIPoC Climate Justice Conference Poster"
						width={400}
						height={500}
						priority
					/>
				</div>
			</div>
		</section>
	);
}
