import Link from "next/link";
import Image from "next/image";
import LinkButton from "./components/link-button";
import InstagramPosts from "./components/instagram-posts";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between min-h-screen bg-[url(/static.jpg)] bg-cover bg-fixed">

			<LandingSection />

			<AboutSection />

			<MapsSection />

			<FaqSection />

			<Seperator />

			<InstagramPosts	/>

			<Seperator />
		</main>
	);
}

function LandingSection() {
	return (
		<section className="flex flex-col items-center justify-center bg-[url(/background.jpg)] min-h-screen size-full">

			<div className="flex flex-col items-center justify-center gap-4 mb-16 md:gap-8 w-fit">
				<div className="flex flex-col items-center justify-center gap-2 md:items-start md:gap-4">
					<h1 className="text-xl font-bold text-red-500 sm:text-2xl lg:text-4xl text-start">Next Conference will take place</h1>
					<span className="px-2 py-0 text-4xl font-bold text-center text-white shadow-lg sm:text-5xl md:text-7xl lg:text-8xl bg-shine">9.09 - 13.09.2024</span>
				</div>

				<div className="flex flex-col items-center justify-center w-full gap-2 p-4">
					<LinkButton href="">Register Now!</LinkButton>

					<div className="flex flex-row items-center justify-center gap-2 px-1 bg-black rounded-md bg-opacity-70">
						<Link href="" className="font-bold text-white hover:underline">View Schedule</Link>
					</div>
				</div>
			</div>

		</section>
	);
}

// TODO: Rewrite text
function AboutSection() {
	return (
		<section id="about" className="flex flex-col items-center justify-center w-full p-8 text-white shadow-lg rounded-b-xl lg:p-16 bg-gradient-to-br from-blue-500 to-sky-500">
			<div className="flex flex-col-reverse items-start justify-center w-full gap-16 mt-8 lg:flex-row">
				<Image className="rounded-lg shadow-lg w-max lg:size-96" src="/logo.jpg" alt="BIPoC Climate Justice Conference" width={100} height={100} />
				<div className="flex flex-col items-start justify-start">
					<h2 className="w-full text-4xl font-bold border-b-2">About</h2>
					<div className="text-wrap w-fit xl:w-[42em] mt-6">
						<strong>BIPoC Climate Justice Conference</strong> is a conference for Black, Indigenous, and People of Color (BIPoC) to discuss climate change and environmental justice. As BIPoC individuals navigating predominantly white European climate spaces, we aim to create a dedicated platform for our communities.
						<h3 className="mt-2 font-bold">Our Mission</h3>
						We seek to address the urgent need for decolonial and intersectional approaches to climate justice, often overlooked in mainstream discourse. Our conference will foster connection, skill-sharing, and networking among BIPoC climate activists, centering our experiences and agendas. We invite collaboration with the Global South to enrich our understanding and actions.
					</div>
				</div>
			</div>
		</section>
	);
}


function MapsSection() {
	return (
		<section id="location" className="flex flex-col items-center justify-center w-full px-16 text-white mt-28">
			<div className="w-full rounded-lg shadow-lg bg-neutral-800">
				<div className="flex flex-col items-baseline justify-center w-full gap-2 p-4 sm:flex-row">
					<h2 className="text-4xl font-bold">Location</h2>
					<p className="text-base">Wukania Projektehof, 16359 Biesenthal</p>
				</div>
				<iframe
					className="w-full h-[32em]"
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
			question: "What is the BIPoC Climate Justice Conference?",
			answer: "The BIPoC Climate Justice Conference is a conference for Black, Indigenous, and People of Color (BIPoC) to discuss climate change and environmental justice. As BIPoC individuals navigating predominantly white European climate spaces, we aim to create a dedicated platform for our communities.",
		},
		{
			question: "Who can attend the conference?",
			answer: "The conference is open to all Black, Indigenous, and People of Color (BIPoC) individuals. We welcome activists, scholars, artists, and community members who are interested in climate justice and environmental issues.",
		},
		{
			question: "How can I register for the conference?",
			answer: "You can register for the conference by filling out the registration form on our website. Registration is free and open to all BIPoC individuals.",
		},
		{
			question: "What topics will be covered at the conference?",
			answer: "The conference will cover a wide range of topics related to climate justice and environmental issues. Some of the key themes include decolonial approaches to climate justice, intersectionality, and the role of BIPoC communities in the fight against climate change.",
		},
		{
			question: "Will there be opportunities for networking and collaboration?",
			answer: "Yes, the conference will provide opportunities for networking, collaboration, and skill-sharing among BIPoC climate activists. We encourage participants to connect with one another and build relationships that can support their work in the future.",
		},
	];

	return (
		<section id="faq" className="flex flex-col items-center justify-center w-full p-16">
			<div className="flex flex-col items-start justify-start w-full p-16 bg-white rounded-lg shadow-lg text-neutral-800">
				<h2 className="text-4xl font-bold">FAQ</h2>
				<div className="flex flex-col items-start justify-start w-full gap-8 mt-8">
					{faqs.map((faq, index) => (
						<details className="w-full" key={index}>
							<summary className="text-lg font-bold cursor-pointer">{faq.question}</summary>
							<p className="mt-2">{faq.answer}</p>
						</details>
					))}
					{/* 
					<div className="flex flex-col items-baseline justify-start w-full gap-2 sm:flex-row">
						<h2 className="text-4xl font-bold">Location</h2>
						<p className="text-sm">Wukania Projektehof, 16359 Biesenthal</p>
					</div>
					<iframe
						className="w-full h-[32em]"
						loading="lazy"
						allowFullScreen
						referrerPolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.928581682675!2d13.613156234073877!3d52.77285225279253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a9b1de8298ed33%3A0xa84fe45f464a4778!2sWukania%20Projektehof!5e0!3m2!1sen!2sde!4v1721846394384!5m2!1sen!2sde"
					/> */}
				</div>
			</div>
		</section>
	);
}
 
function Seperator() {
	return (
		<div className="h-2 my-16 bg-white rounded-full shadow-2xl w-80" />
	);
}