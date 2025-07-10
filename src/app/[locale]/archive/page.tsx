"use client";

import Collectives from "./collectives";
import Image from "next/image";
import Sponsors from "./sponsors";
import InstagramPosts from "./instagram-posts";
import { useState } from "react";
import LinkButton from "@/app/components/link-button";
import RenderMarkdown from "@/app/components/markdown";
import { CONTACT_EMAIL } from "@/app/lib/constants";

const imagesPath = "/archive/2024/photos";

const archiveText = `
Welcome to our Archive page! This is a whole new section of our website. In this section, we communicate and preserve our work in a self-determined manner. You can find images from the previous conference, last year's schedule, a list of our collaborators, and an overview of our funders. This archive is a selection we made. In case you have any questions or feedback about the archive, please *get in touch with us*. [Contact Us](mailto:${CONTACT_EMAIL})
`;

export default function ArchivePage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-start gap-4 bg-[url(/background_2.webp)] bg-fixed py-8 md:py-16 px-2 md:px-16 text-white">
			<div className="w-full max-w-7xl">
				
				<h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 md:mb-10 tracking-tight text-center drop-shadow-lg">
					Archive 2024
				</h1>
				<div className="flex-1 text-white whitespace-pre-line">
					<RenderMarkdown content={archiveText} />
				</div>

				<ImageSlideshow />

				<Collectives />


			</div>
			<Sponsors />

			<h2 className="text-2xl md:text-4xl font-bold text-center border-b-2 border-black mb-6 md:mb-8 mt-12 md:mt-16">Instagram Posts</h2>
			<InstagramPosts />

			<h2 className="text-2xl md:text-4xl font-bold text-center border-b-2 border-black mt-12 md:mt-16">Links</h2>
			<div className="flex flex-row items-center justify-center w-full max-w-6xl mt-6 md:mt-8">
				<LinkButton href="https://cryptpad.fr/pad/#/2/pad/edit/ToSKZSbnvFEpt+AfYvNt9bpP/">View 2024 Schedule</LinkButton>
			</div>
		</main>
	);
}

function ImageSlideshow() {
	const totalImages = 14;
	const [current, setCurrent] = useState(0);

	const goPrev = () => setCurrent((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
	const goNext = () => setCurrent((prev) => (prev === totalImages - 1 ? 0 : prev + 1));

	return (
		<div className="flex flex-col items-center w-full mt-8">
			<div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/9]">
				<Image
					priority
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 640px"
					src={`${imagesPath}/image_${current + 1}.webp`}
					alt={`Image ${current + 1}`}
					className="object-cover w-full h-full rounded-lg shadow-lg"
				/>
				<button
					onClick={goPrev}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
					aria-label="Previous image"
				>
					&#8592;
				</button>
				<button
					onClick={goNext}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
					aria-label="Next image"
				>
					&#8594;
				</button>
			</div>
		</div>
	);
}
