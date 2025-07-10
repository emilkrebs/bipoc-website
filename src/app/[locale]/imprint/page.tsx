import RenderMarkdown from "@/app/components/markdown";
import { Metadata } from "next";
import { LocaleProps } from "../layout";
import { getTextData } from "@/app/lib/texts";
import { locales } from "@/app/lib/localisation";

// Generate static params for all locales
export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
	title: "BIPoC Climate Justice Conferece 2024 | Imprint",
};

export default async function Imprint({ params }: LocaleProps) {
	const { locale } = await params;
	const imprintText = await getTextData("imprint", locale);

	
	return (
		<main className="min-h-screen bg-neutral-900 text-white">
			<section className="flex flex-col justify-start items-start gap-2 gap-x-4 w-full h-full p-4">
				<RenderMarkdown content={imprintText.content} />
			</section>
		</main>
	);
}
