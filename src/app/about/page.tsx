import Image from "next/image";
import RenderMarkdown from "../components/markdown";
import { CONTACT_EMAIL } from "../lib/constants";

const aboutText = `
We are a collective of BIPoC activists based in Germany, Britain, Spain, Colombia and the US working to connect BIPoC-led climate justice groups and movements across Europe and beyond. As of now, we organize this initiative voluntarily in our free time.
Our members are actively involved in varying self-organized spaces — from bigger climate justice movements to migrant led initiatives (and more!). We believe in building alliances and autonomous networks to strengthen agency within and across our communities. For us, climate justice is an overarching perspective which is deeply interconnected with a multitude of social justice struggles. Together, we envision a future rooted in collective liberation, care, and reciprocity.

The BIPoC Climate Justice Conference aims to create a safer space for BIPoC voices, experiences, and leadership in the climate justice movement and beyond.
The summit brings together Black, Indigenous and People of Color based in Europe to discuss, to exchange and learn from one another's lived experiences, to build power, and dream up just climate presents and futures which center our voices and our autonomy.

---

*Get in touch:*
If you are interested in learning more about us, want to collaborate, or have a request please write us an *email* [here](mailto:${CONTACT_EMAIL});
`;

export default function AboutPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-start bg-[url(/background_2.webp)] bg-fixed py-16 px-4">
			<h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
			<div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-4xl gap-8 bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
				<div className="flex-1 text-neutral-900 text-lg whitespace-pre-line">
					<RenderMarkdown content={aboutText} />
				</div>
				<div className="flex-1 flex items-center justify-center">
					<Image
						src="/poster.png"
						alt="BIPoC Climate Justice Summit Poster"
						width={350}
						height={350}
						className="rounded-lg shadow-md object-cover"
					/>
				</div>
			</div>
		</main>
	);
}
