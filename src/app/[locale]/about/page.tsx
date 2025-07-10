import RenderMarkdown from "@/app/components/markdown";
import { CONTACT_EMAIL } from "@/app/lib/constants";
import Image from "next/image";

const aboutText = `
We are a collective of BIPoC activists based in Germany, Britain, Spain, Colombia and the US working to connect BIPoC-led climate justice groups and movements across Europe and beyond. As of now, we organize this initiative voluntarily in our free time.
Our members are actively involved in varying self-organized spaces — from bigger climate justice movements to migrant led initiatives (and more!). We believe in building alliances and autonomous networks to strengthen agency within and across our communities. For us, climate justice is an overarching perspective which is deeply interconnected with a multitude of social justice struggles. Together, we envision a future rooted in collective liberation, care, and reciprocity.

The BIPoC Climate Justice Conference aims to create a safer space for BIPoC voices, experiences, and leadership in the climate justice movement and beyond.
The conference brings together Black, Indigenous and People of Color based in Europe to discuss, to exchange and learn from one another's lived experiences, to build power, and dream up just climate presents and futures which center our voices and our autonomy.

---

*Get in touch:*
If you are interested in learning more about us, want to collaborate, or have a request please write us an [e-mail](mailto:${CONTACT_EMAIL}).
`;

export default function AboutPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-start bg-[url(/background_2.webp)] bg-fixed py-16 px-4">
			<h1 className="text-5xl font-extrabold text-white mb-8 md:mb-10 tracking-tight text-center drop-shadow-lg">
				About Us
			</h1>
			<section className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10 bg-gradient-to-br from-white/80 via-neutral-100/80 to-neutral-200/70 rounded-3xl shadow-2xl p-10 backdrop-blur-md border border-neutral-100">
				<div className="flex-1 text-neutral-800 text-lg leading-relaxed">
					<RenderMarkdown content={aboutText} />
				</div>
			</section>
		</main>
	);
}
