import Link from "next/link";
import Image from "next/image";
import LinkButton from "./components/link-button";
import InstagramPosts from "./components/instagram-posts";
import RenderMarkdown from "./components/markdown";

const aboutMarkdown = `
We are a collective of BIPoC individuals based in Europe,
deeply concerned about the urgent need for a more inclusive climate justice movement. Navigating predominantly white spaces, we’ve experienced firsthand the pervasive racism, eurocentrism, and ongoing colonial legacies that shape the climate crisis.
Traditional climate justice discourse often overlooks the specific challenges faced by racialized, gendered, and classed bodies. This invisibility has led to a movement that frequently fails to address the root causes of climate inequality. We believe that centering the voices and experiences of BIPoC communities is essential to creating a truly just and equitable future.

## Our Mission
Our summit aims to provide a safe and empowering space for BIPoC activists and organizers across Europe to connect, share knowledge, and develop strategies for collective action. By prioritizing skill-sharing, diversifying action methods, and addressing overlooked social justice issues, we seek to build a strong and resilient BIPoC-led climate justice movement.

Join us as we work towards a world where climate justice is synonymous with racial, social, and economic justice.
`;

const registerLink = "https://form.jotform.com/241974035690057";

export default function Home() {
	return (
		<main className="min-h-screen">

			<LandingSection />

			<AboutSection />


			<div className="flex flex-col items-center justify-between w-full px-8 pb-16 bg-fixed bg-cover md:px-32 gap-y-32 bg-[url(/background_2.jpg)]">

				<MapsSection />

				<FaqSection />

				<Seperator />

				<InstagramPosts />

				<Seperator />

			</div>

		</main>
	);
}

function LandingSection() {
	return (
		<section className="flex flex-col items-center justify-center bg-[url(/background.jpg)] bg-fixed min-h-screen size-full">

			<div className="flex flex-col items-center justify-center h-screen gap-4 mb-16 md:gap-8 w-fit">
				<div className="flex flex-col items-center justify-center gap-2 md:items-start md:gap-4">
					<div className="flex flex-row items-baseline justify-between w-full text-red-500 text-start">
						<h1 className="text-xl font-bold leading-8 sm:text-2xl lg:text-9xl">BIPoC</h1>
						<h2 className="px-1 py-0 mb-1 text-xl font-bold lg:text-4xl">Climate Justice Summit</h2>
					</div>
					<span className="w-full px-2 py-0 text-4xl font-bold text-center text-white shadow-lg sm:text-5xl md:text-7xl lg:text-8xl bg-shine">09.09 - 13.09.2024</span>
				</div>

				<div className="flex flex-col items-center justify-center w-full gap-4 p-4">
					<LinkButton href={registerLink}>Register Now!</LinkButton>

					<div className="flex flex-row items-center justify-center gap-2 px-1 mt-2 bg-black bg-opacity-75 rounded-md">
						<Link href="https://docs.google.com/spreadsheets/d/13K626izh8SPU73pMHAUd_dilP_uUZVPrTHFdv_sxCBA/edit?gid=521134214#gid=521134214" className="font-bold text-white hover:underline">View Schedule</Link>
					</div>
				</div>
			</div>

			{/* Collectives

			<div className="flex flex-col items-center justify-center w-full gap-8 p-8 text-white bg-blue-500 bg-opacity-65">
				<h2 className="text-4xl font-bold">Collectives</h2>

				<div className="flex flex-wrap items-center justify-center w-full gap-8 p-8">
					
					<Link className="w-64" href="https://herewedrawtheline.org/">
						<Image className="object-cover size-fit" src="collectives/herewedrawtheline.svg" alt="Collectives" width={100} height={100} />
					</Link>
				
				</div>
			</div> */}

		</section>
	);
}

// TODO: Rewrite text
function AboutSection() {
	return (
		<section id="about" className="flex flex-col items-center justify-center w-full p-8 text-white shadow-lg md:px-32">
			<div className="flex flex-col-reverse items-start justify-between w-full gap-16 py-8 xl:flex-row">
				<Image className="rounded-lg shadow-lg w-max xl:size-96" src="/logo.jpg" alt="BIPoC Climate Justice Summit" width={100} height={100} />
				<div className="flex flex-col items-start justify-start">
					<h2 className="w-full text-4xl font-bold border-b-2">About</h2>
					<div className="mt-6 text-wrap w-fit">
						<RenderMarkdown content={aboutMarkdown} />
					</div>
				</div>
			</div>
		</section>
	);
}


function MapsSection() {
	return (
		<section id="location" className="flex flex-col items-center justify-center w-full mt-32 text-neutral-800">
			<div className="w-full bg-white rounded-lg shadow-lg">
				<div className="flex flex-col items-baseline justify-center w-full gap-2 p-4 sm:flex-row">
					<h2 className="text-4xl font-bold">Location</h2>
					<p className="text-base">Wukania Projektehof, 16359 Biesenthal</p>
				</div>
				<iframe
					className="w-full h-[38em] rounded-b-lg"
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.928581682675!2d13.613156234073877!3d52.77285225279253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a9b1de8298ed33%3A0xa84fe45f464a4778!2sWukania%20Projektehof!5e0!3m2!1sen!2sde!4v1721846394384!5m2!1sen!2sde"
				/>
			</div>
		</section>
	);
}


function FaqSection() {
	const faqs = [
		{
			question: "What is the BIPOC Climate Justice Summit?",
			answer: "The BIPOC Only Climate Justice Summit 2024 is a dedicated event that brings together Black, Indigenous, and People of Color to discuss and address the unique impacts of climate change on BIPOC communities. The summit aims to create a safer space for BIPOC voices, experiences, and leadership in the climate justice movement.",
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
			answer: `Please fill out this form: [Click Here](${registerLink}). Early registration is encouraged as spaces are limited. ALL participants can apply for reimbursement of transportation fees, please buy the cheapest ticket and we will reimburse you at the summit with the receipt. Food will be provided free of cost at the venue. `,
			open: true,
		},
		{
			question: "Is there a virtual attendance option?",
			answer: "No, we are sorry, we do not have the capacity to offer this.",
		},
	];

	return (
		<section id="faq" className="flex flex-col items-center justify-center w-full">
			<div className="flex flex-col items-start justify-start w-full p-8 bg-white bg-bottom rounded-lg shadow-lg md:p-16 text-neutral-800">
				<h2 className="text-4xl font-bold">FAQ</h2>
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