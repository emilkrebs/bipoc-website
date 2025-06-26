import Image from "next/image";
import Collectives from "./collectives";
import Sponsors from "./sponsors";
import LinkButton from "../components/link-button";
import InstagramPosts from "./instagram-posts";
import RenderMarkdown from "../components/markdown";
import { CONTACT_EMAIL } from "../lib/constants";

const imagesPath = "/archive/2024/images";
const images = [
	`${imagesPath}/archive1.webp`,
	`${imagesPath}/archive2.webp`,
	`${imagesPath}/archive3.webp`,
	`${imagesPath}/archive4.webp`,
	// Add more image filenames as needed
];

const archiveText = `
Welcome to our Archive page! This is a whole new section of our website. In this section, we communicate and preserve our work in a self-determined manner. You can find images from the previous conference, last year's schedule, a list of our collaborators, and an overview of our funders. This archive is a selection we made. In case you have any questions or feedback about the archive, please *get in touch with us*. [Contact Us](mailto:${CONTACT_EMAIL})
`;

export default function ArchivePage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-start gap-4 bg-[url(/background.webp)] bg-fixed py-16 px-4 md:px-16  text-white ">

			<h1 className="text-4xl font-bold mb-8">Archive 2024</h1>


			<div className="flex-1 text-white scale-110 whitespace-pre-line w-4xl">
				<RenderMarkdown content={archiveText} />
			</div>

			<div className="flex flex-wrap items-baseline justify-center w-full gap-4 mt-8 sm:justify-evenly h-fit">
				{images.map((img, idx) => (
					<div key={idx} className="bg-white shadow-lg overflow-hidden flex flex-col items-center">
						<Image
							src={`/${img}`}
							alt={`Archive image ${idx + 1}`}
							width={600}
							height={400}
							className="object-cover w-full h-64"
						/>
					</div>
				))}
			</div>

			<Collectives />

			<Sponsors />

			<h2 className="text-4xl font-bold text-center border-b-2 border-black mb-8 mt-16">Instagram Posts</h2>

			<InstagramPosts />

			<h2 className="text-4xl font-bold text-center border-b-2 border-black mt-16">Links</h2>

			<div className="flex flex-row items-center justify-center w-full max-w-6xl mt-8">
				<LinkButton href="https://cryptpad.fr/pad/#/2/pad/edit/ToSKZSbnvFEpt+AfYvNt9bpP/">View 2024 Schedule</LinkButton>
			</div>
		</main>
	);
}
