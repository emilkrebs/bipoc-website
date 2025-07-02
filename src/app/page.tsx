import Link from "next/link";
import Image from "next/image";
import LinkButton from "./components/link-button";
import RenderMarkdown from "./components/markdown";
import Sponsors from "./components/sponsors";
import { AWARENESS_CONCEPT_URL, INSTAGRAM_URL, REGISTRATION_FORM_URL, X_URL } from "./lib/constants";

const bipocStatement = `
While BIPoC (Black, Indigenous and People of Color) signals a shared experience, and thus identity, it fails to highlight the complexity of experiences, perspectives, identities, histories, dreams, visions and magic each of us hold within us; despite this, we have made the decision to continue using it in this year's call to gather. 
This call is an invitation to all who hold a shared experience of being oppressed, marginalized and/or limited by systems of racism, and with that, capitalism and colonialism. It is a call to dream into new systems that nourish and care for collective well-being, and visualize our paths toward making our visions a reality. 

It is our wish to organize a conference that is rooted, at its core, in a shared political grounding that is anti-colonial, anti-racist, anti-imperialist and anti-capitalist. We want to centre the visions of those most affected by multiple forms of oppression simulatenously: trans-hostility, -phobia and other LGBTQIA+-phobias, ableism, colorism, racial capitalism, white supremacy, cis-hetero-patriarchy. During our conference, we will prioritise these siblings in our decisions for workshop facilitators and session hosts. We also actively encourage the hosting of radical affinity spaces as additions to the conference program. 

Liberatory work needs all of us acting with collecive care and reciprocity.

Please make sure to read the FAQ before attending.
We are so excited to hold this space with you! <3 
`;

export default function Home() {
	return (
		<main className="min-h-screen">

			<LandingSection />

			<Statement />


			<div className="flex flex-col mb-16 items-center justify-between w-full px-8 pb-16 bg-fixed bg-top bg-cover md:px-32 gap-y-32 bg-[url(/background_2.webp)]">

				<MapsSection />

				<FaqSection />

				<Seperator />

				<Sponsors />

			</div>

		</main>
	);
}

function LandingSection() {
	return (
		<>
			<link rel="preload" href="/background.webp" as="image" type="image/webp" fetchPriority="high" />

			<section className="flex flex-col items-center justify-center bg-[url(/background.webp)] bg-fixed min-h-screen size-full">
				<div className="flex flex-col items-center justify-center h-screen gap-4 mb-16 md:gap-8 w-fit">
					<div className="flex flex-col items-center justify-center gap-2 md:items-start md:gap-4">
						<div className="flex flex-col items-baseline justify-between w-full text-red-500 md:flex-row text-start">
							<h1 className="text-xl md:font-bold sm:text-2xl lg:text-4xl">BIPoC Climate Justice Conference</h1>
						</div>
						<span className="w-full px-2 py-0 text-4xl font-bold text-center text-white shadow-lg sm:text-5xl md:text-7xl lg:text-8xl bg-shine">11.09 - 15.09.2025</span>
					</div>
					<div className="flex flex-row items-center justify-center gap-4">
						<Link
							href="#statement"
							className="px-5 py-2 rounded-full mt-6 bg-pink-500 text-white font-semibold shadow-md hover:-translate-y-0.5 transition"
						>
							Read Statement
						</Link>
						<Link
							href={AWARENESS_CONCEPT_URL}
							target="_blank"
							className="px-5 py-2 rounded-full mt-6 bg-pink-500 text-white font-semibold shadow-md hover:-translate-y-0.5 transition"
						>
							Awareness Concept
						</Link>
					</div>
					<div className="flex flex-row items-center justify-center gap-4">
						<Link
							href={INSTAGRAM_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white transition shadow-md"
						>
							<svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
								<rect width="18" height="18" x="3" y="3" rx="5" stroke="#000" strokeWidth="2" />
								<circle cx="12" cy="12" r="4" stroke="#000" strokeWidth="2" />
								<circle cx="17" cy="7" r="1.2" fill="#000" />
							</svg>
						</Link>
						<Link
							href={X_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="X (Twitter)"
							className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white transition shadow-md"
						>
							<svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M4 4h4.5l5.5 7.5L19.5 4H22l-7.5 10L22 20h-4.5l-5.5-7.5L4.5 20H2l7.5-10L2 4h2z" fill="#000" />
							</svg>
						</Link>
					</div>
				</div>
			</section >
		</>
	);
}

function Statement() {
	return (
		<section
			id="statement"
			className="flex flex-col items-center justify-center w-full px-4 py-12 text-white bg-gradient-to-b from-black/80 via-black/60 to-black/80 shadow-2xl md:px-16"
		>
			<div className="flex flex-col items-center justify-between w-full max-w-6xl gap-12 md:flex-row-reverse md:items-start">
				<div className="flex-shrink-0 w-full max-w-xs overflow-hidden rounded-xl shadow-xl md:max-w-sm">
					<Image
						className="object-cover w-full h-full"
						src="/poster.png"
						alt="BIPoC Climate Justice Conference Poster"
						width={400}
						height={500}
						priority
					/>
				</div>
				<div className="flex flex-col items-start justify-start w-full max-w-2xl">
					<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-left text-pink-500 md:text-4xl">
						The BiPoC-Statement
					</h2>
					<div className="mb-6 text-base leading-relaxed text-left text-white/90 md:text-lg">
						<RenderMarkdown content={bipocStatement} />
					</div>
					<div className="flex flex-row gap-4">
						<LinkButton
							href={REGISTRATION_FORM_URL}
						>
							Register Now!
						</LinkButton>
					</div>
				</div>
			</div>
		</section>
	);
}


function MapsSection() {
	const embedLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40776.05832649755!2d13.606351548780625!3d52.76431636004535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a9b1de8298ed33%3A0xa84fe45f464a4778!2sWukania%20Projektehof!5e0!3m2!1sen!2sde!4v1722519400038!5m2!1sen!2sd";
	return (
		<section id="location" className="flex flex-col items-center justify-center w-full mt-32 text-neutral-800">
			<div className="w-full bg-white rounded-lg shadow-lg">
				<div className="flex flex-col items-baseline justify-center w-full gap-2 p-4 sm:flex-row">
					<h2 className="text-4xl font-bold">Location</h2>
					<p className="text-base">Wukania Projektehof, 16359 Biesenthal</p>
				</div>
				<iframe
					title="Location GoogleMap"
					className="w-full h-[26em] lg:h-[42em] rounded-b-lg"
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					src={embedLink}
				/>
			</div>
		</section>
	);
}


function FaqSection() {
	const faqs = [
		{
			question: "What is the BIPOC Climate Justice Conferece?",
			answer: "The BIPOC Only Climate Justice Conferece 2024 is a dedicated event that brings together Black, Indigenous, and People of Color to discuss and address the unique impacts of climate change on BIPOC communities. The summit aims to create a safer space for BIPOC voices, experiences, and leadership in the climate justice movement.",
			open: true,
		},
		{
			question: "Who can attend the summit?",
			answer: "The summit is open to all Black, Indigenous, and People of Color (BIPoC) individuals. We welcome activists, scholars, artists, and community members who are interested in climate justice and environmental issues.",
		},
		{
			question: "Why is the summit BIPOC only?",
			answer: "The summit is BIPOC only to center and prioritize the voices and experiences of communities most affected by climate change and often marginalized in mainstream environmental movements. This exclusive space allows for more open and honest discussions, fostering solidarity and collaborative action among BIPOC individuals.",
		},
		{
			question: "What topics will be covered at the summit?",
			answer: `The summit will cover a range of topics including:
- The disproportionate impact of climate change on BIPOC communities.
- Environmental racism and its effects.
- Indigenous knowledge and practices in climate resilience.
- Strategies for community organizing and advocacy.
- Policy discussions and climate justice initiatives.
- Intersectionality and the climate movement.
- Abolitionist perspectives and applications
- Different forms of activism (art, dance, music, writing)
- Queering ecologies
- Practical skill sharing (plant knowledge, media skills, etc.) 
`,
		},
		{
			question: "How can I register for the summit?",
			answer: "Registrations are closed, we've reached our capacity. We received great workshop proposals and people who want to be there! We'll close the registration for now. Thank you so much for registering and supporting us! We'll get back to everyone who registered so far with an infomail in the next couple of days, so stay tuned",
			open: true,
		},
		{
			question: "Is there a virtual attendance option?",
			answer: "No, we are sorry, we do not have the capacity to offer this.",
		},
	];

	return (
		<section id="faq" className="flex flex-col items-center justify-center w-full">
			<div className="flex flex-col items-start justify-start w-full p-8 bg-white bg-bottom rounded-lg shadow-lg text-neutral-800">
				<h2 className="text-4xl font-bold border-b-2 border-black">FAQ</h2>
				<div className="flex flex-col items-start justify-start w-full gap-4 mt-8">
					{faqs.map((faq, index) => (
						<details className="w-full" key={index} open={faq.open}>
							<summary className="text-lg font-bold cursor-pointer">{faq.question}</summary>
							<RenderMarkdown content={faq.answer} />
						</details>
					))}
				</div>
			</div>
		</section>
	);
}

function Seperator() {
	return (
		<div className="w-full h-2 my-16 bg-white rounded-full shadow-2xl max-w-80" />
	);
}