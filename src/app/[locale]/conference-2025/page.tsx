import LinkButton from "@/app/components/link-button";
import RenderMarkdown from "@/app/components/markdown";
import {
    AWARENESS_CONCEPT_URL,
    REGISTRATION_FORM_URL,
} from "@/app/lib/constants";
import Sponsors from "../../components/sponsors";
import { LocaleProps } from "../layout";
import { getTextData } from "@/app/lib/texts";
import { locales } from "@/app/lib/localisation";
import Collectives from "@/app/components/collectives";

// ─── Data imports ──────────────────────────────────────────────────────────────
// To add or remove collectives: edit  src/data/collectives.json
// To add or remove sponsors:    edit  src/data/sponsors.json
import collectivesData from "@/data/collectives.json";
import sponsorsData from "@/data/sponsors.json";

// Generate static params for all locales
export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const pagePath = "conference-2025";

export default async function InformationPage({ params }: LocaleProps) {
    const { locale } = await params;

    const data = await getTextData(`${pagePath}/data`, locale);
    const globalData = await getTextData("data", locale);
    const locationText = (await getTextData(`${pagePath}/location`, locale)).content;
    const programText = (await getTextData(`${pagePath}/program`, locale)).content;
    const awarenessConcept = await getTextData("awareness-concept", locale);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center w-full bg-[url(/background_2.webp)] bg-fixed py-12 px-2 md:px-16">
            <section
                className="flex flex-col items-center justify-center w-full gap-8"
                aria-labelledby="conference-heading"
            >
                <div className="flex flex-col items-start justify-start w-full md:max-w-6xl bg-black/80 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
                    <h1
                        id="conference-heading"
                        className="text-xl font-extrabold tracking-tight text-left text-pink-400 md:text-4xl mb-4 text-balance"
                    >
                        {data.title || "Conference 2025 Information"}
                    </h1>
                    <div className="mb-6 text-base leading-relaxed text-left text-neutral-100 md:text-lg">
                        <RenderMarkdown content={data.content} />
                    </div>

                    {/* Location */}
                    <h2 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl text-balance">
                        {data.location || "Location"}
                    </h2>
                    <div className="mb-6 text-base leading-relaxed text-left text-neutral-200 md:text-lg">
                        <RenderMarkdown content={locationText} />
                    </div>

                    {/* Program / Schedule */}
                    <h2 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl text-balance">
                        {data.schedule || "Program / Schedule"}
                    </h2>
                    <div className="mb-6 text-base leading-relaxed text-left text-neutral-200 md:text-lg">
                        <RenderMarkdown content={programText} />
                        <div className="flex flex-wrap gap-3 mt-4">
                            {data.programURL && (
                                <LinkButton href={data.programURL} target="_blank" rel="noopener noreferrer">
                                    {data.viewProgram || "View Program"}
                                </LinkButton>
                            )}
                            {data.programDescriptionURL && (
                                <LinkButton href={data.programDescriptionURL} target="_blank" rel="noopener noreferrer">
                                    {data.viewProgramDescription || "View Program Description"}
                                </LinkButton>
                            )}
                        </div>
                    </div>

                    {/* Awareness Concept */}
                    <h2 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl text-balance">
                        {awarenessConcept.title || "Awareness Concept"}
                    </h2>
                    <div className="mb-6 text-base leading-relaxed text-left text-neutral-200 md:text-lg">
                        <RenderMarkdown content={awarenessConcept.content} />
                        <LinkButton href={AWARENESS_CONCEPT_URL} target="_blank" rel="noopener noreferrer" className="mt-4">
                            {(awarenessConcept.title || "Awareness Concept") + " PDF"}
                        </LinkButton>
                    </div>
                </div>

                {/* Collective partners — loaded from src/data/collectives.json */}
                <Collectives title={data.collectives} collectives={collectivesData} />

                {/* Sponsors — loaded from src/data/sponsors.json */}
                <Sponsors title={globalData.sponsorsTitle} sponsors={sponsorsData} />
            </section>
        </main>
    );
}