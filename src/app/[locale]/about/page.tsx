import RenderMarkdown from "@/app/components/markdown";
import { LocaleProps } from "../layout";
import { getTextData } from "@/app/lib/texts";
import { locales } from "@/app/lib/localisation";

// Generate static params for all locales
export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: LocaleProps) {
	const { locale } = await params;
	const aboutData = (await getTextData("about", locale));

	return (
		<main className="min-h-screen flex flex-col items-center justify-start bg-[url(/background_2.webp)] bg-fixed py-16 px-4">
			<h1 className="text-5xl font-extrabold text-white mb-8 md:mb-10 tracking-tight text-center drop-shadow-lg">
				{aboutData.title || "About the BIPoC Climate Justice Conference 2025"}
			</h1>
			<section className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10 bg-gradient-to-br from-white/80 via-neutral-100/80 to-neutral-200/70 rounded-3xl shadow-2xl p-10 backdrop-blur-md border border-neutral-100">
				<div className="flex-1 text-neutral-800 text-lg leading-relaxed">
					<RenderMarkdown content={aboutData.content} />
				</div>
			</section>
		</main>
	);
}
