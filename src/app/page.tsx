import Image from "next/image";
import { INSTAGRAM_URL, } from "./lib/constants";
import Link from "next/link";


export default function Home() {
	return (
		<main className="min-h-screen">

			<LandingSection />

		</main>
	);
}

function LandingSection() {
	return (
		<>
			<link rel="preload" href="/background.webp" as="image" type="image/webp" fetchPriority="high" />
			<section className="flex flex-col items-center justify-center bg-[url(/background.webp)] min-h-screen bg-fixed bg-cover px-2 md:px-24 xl:px-56">
				<div className="grid auto-cols-fr xl:grid-cols-2 gap-4 md:gap-8 w-full my-8 items-start">
					<div className="rounded-xl shadow-xl w-full h-full bg-[url(/poster.png)] bg-cover bg-end" />
					
					<div className="flex flex-col gap-4 items-start justify-stretch h-min w-full grow">
						<h1 className="text-red-500 text-xl font-bold sm:text-2xl lg:text-4xl">BIPoC Climate Justice Conference</h1>
						<span className="w-full px-2 py-0 text-2xl font-bold text-center text-white shadow-lg sm:text-4xl md:text-6xl bg-shine">11.09 - 15.09.2025</span>

						<div className="bg-neutral-900/90 flex flex-col items-start justify-start rounded-lg shadow-lg w-full h-full flex-1 p-4 self-stretch">
							<h2 className="text-2xl font-bold text-pink-500 mb-2">Welcome to our website!</h2>
							<p className="text-base text-start text-white md:text-lg">
								This page is our main tool for information access around the conference, a way to get in touch with the orga team, and an archive of our work.
								We warmly invite you to join us at the BIPoC Climate Justice Conference 2025 from September 11th to 15th. We started with an online conference in 2020. In 2024, we organized our first in-person summit in the Berlin area. This year, we’re moving to greater heights and will leave Germany. This year’s edition will be held in the north of Spain.
								The program will again be filled with workshops, panels, art, and collective ecological practice. It will be a space curated for us and by us: BIPoC activists, organizers, knowledge-holders, artists, and community members. We are excited for your participation and contributions. If you’re part of a collective, an activist/organizer, or looking to get involved, we’d love for you to join us!
								Check out our program and let us know if you’d like to participate.

								<br />
								Feel free to explore the entire page, and make sure to have a look at the <Link href="/faq" className="underline text-blue-300 hover:text-blue-400">FAQ</Link>.
							</p>

							<div className="flex flex-col md:flex-row items-start justify-start gap-4 my-8">
								<Link
									href="/faq"
									target="_blank"
									className="px-5 py-2 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:-translate-y-0.5 transition"
								>
									FAQ & Statement
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