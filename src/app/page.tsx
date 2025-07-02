import Link from "next/link";
import Image from "next/image";
import LinkButton from "./components/link-button";
import RenderMarkdown from "./components/markdown";
import Sponsors from "./components/sponsors";
import { AWARENESS_CONCEPT_URL, INSTAGRAM_URL, PROGRAM_URL, REGISTRATION_FORM_URL, X_URL } from "./lib/constants";

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


			<div className="flex flex-col mb-16 items-center justify-between w-full px-2 pb-16 bg-fixed bg-top bg-cover md:px-32 gap-y-32 bg-[url(/background_2.webp)]">
				
				<InformationSection />
				
				<Sponsors />

			</div>

		</main>
	);
}

function LandingSection() {
	return (
		<>
			<link rel="preload" href="/background.webp" as="image" type="image/webp" fetchPriority="high" />

			<section className="flex flex-col items-center justify-center bg-[url(/background.webp)] bg-fixed bg-cover min-h-screen size-full">
				<div className="flex flex-col items-center justify-center h-screen gap-4 mb-16 md:gap-8 w-fit">
					<div className="flex flex-col items-center justify-center gap-2 md:items-start md:gap-4">
						<div className="flex flex-col items-baseline justify-between w-full text-red-500 md:flex-row text-start">
							<h1 className="text-xl md:font-bold sm:text-2xl lg:text-4xl">BIPoC Climate Justice Conference</h1>
						</div>
						<span className="w-full px-2 py-0 text-4xl font-bold text-center text-white shadow-lg sm:text-5xl md:text-7xl lg:text-8xl bg-shine">11.09 - 15.09.2025</span>
					</div>
					<div className="flex flex-row items-center justify-center gap-4">
						<Link
							href={PROGRAM_URL}
							target="_blank"
							className="px-5 py-2 rounded-full mt-6 bg-pink-500 text-white font-semibold shadow-md hover:-translate-y-0.5 transition"
						>
							View Programm
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
							<Image src="icons/instagram.svg" alt="Instagram" width={24} height={24} />
						</Link>
						<Link
							href={X_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="X (Twitter)"
							className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white transition shadow-md"
						>
							<Image src="icons/x.svg" alt="X (Twitter)" width={24} height={24} />
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


function InformationSection() {
	const locationText = `This year we will be located in Basque Country in **Northern Spain** about an hour away from Bilbao. We are teaming up with a beautiful venue in a rural area. Due to security precautions, we will not share the explicit location of the venue on the website.  

Once the registrations are approved, we will share all relevant details with attendees and contributors.

This decision is informed mostly by wanting to be extra careful in an area that most of the core organizing team is not very familiar with.  
We do not expect any kind of incident to occur! Besides that, we are planning a safety strategy for transport to and from the venue.
	`;

	const programText = `Also this year we curated a wonderful programm, which is still waiting on your contribution. Get creative and submit whatever you like. We came up with a rough drafted of how we envision the sessions and timing. This is not a limitation but an inspiration! Any suggestion is welcome. We will do our best to fit it into this years curation. 

To check out the draft please click the link below.`;	

	return (
		<section className="flex flex-col items-center justify-center w-full py-12 md:mt-16">
			<div className="flex flex-col items-start justify-start w-full md:max-w-6xl bg-black/70 rounded-xl p-4 md:p-8 shadow-2xl">
				<h2 className="text-xl font-extrabold tracking-tight text-left text-pink-500 md:text-4xl">
					Important Information!
				</h2>
				<p className="mb-6 text-base leading-relaxed text-left text-neutral-300 md:text-lg">
					Everything you need to know at a glance. If you have any questions, please check the <Link href="/faq" className="text-pink-500 hover:underline">FAQ</Link>.
				</p>
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
				</div>
				<div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
					<LinkButton
						href={PROGRAM_URL}
						target="_blank"
					>
						View Programm
					</LinkButton>
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