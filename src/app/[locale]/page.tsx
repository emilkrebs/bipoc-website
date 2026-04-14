import Image from "next/image";
import { AWARENESS_CONCEPT_URL, INSTAGRAM_URL } from "../lib/constants";
import Link from "next/link";
import { getTextData, TextData } from "../lib/texts";
import RenderMarkdown from "../components/markdown";
import { LocaleProps } from "./layout";
import { locales } from "../lib/localisation";
import LinkButton from "../components/link-button";

// Generate static params for all locales
export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

interface LandingSectionProps {
    welcomeText: string;
    bipocStatementData: { title?: string; content: string };
    awarenessConceptData: { title?: string; content: string };
    conferenceData: TextData;
}

export default async function Home({ params }: LocaleProps) {
    const { locale } = await params;

    const conferenceData = await getTextData("conference-2025/data", locale);
    const welcomeText = await getTextData("welcome", locale);
    const bipocStatementData = await getTextData("bipoc-statement", locale);
    const awarenessConceptData = await getTextData("awareness-concept", locale);

    return (
        <main className="min-h-screen">
            <LandingSection
                welcomeText={welcomeText.content}
                bipocStatementData={bipocStatementData}
                awarenessConceptData={awarenessConceptData}
                conferenceData={conferenceData}
            />
        </main>
    );
}

function LandingSection(
    { welcomeText, bipocStatementData, awarenessConceptData, conferenceData: data }:
        LandingSectionProps,
) {
    return (
        <>
            <link
                rel="preload"
                href="/background.webp"
                as="image"
                type="image/webp"
                fetchPriority="high"
            />
            <section
                aria-labelledby="landing-heading"
                className="flex flex-col items-center justify-center bg-[url(/background.webp)] min-h-screen bg-fixed bg-cover px-2 md:px-16 xl:px-24 2xl:px-48"
            >
                <div className="flex flex-col xl:flex-row gap-4 md:gap-8 w-full my-8 items-stretch">
                    {/* Conference poster — decorative, described by surrounding headings */}
                    <div
                        className="rounded-xl bg-transparent bg-[url(/poster.png)] bg-contain bg-center bg-no-repeat w-fit min-w-[20rem] xl:min-w-[32rem] relative overflow-hidden"
                        role="img"
                        aria-label="BIPoC Climate Justice Conference 2025 poster"
                    />

                    {/* Content */}
                    <div className="flex flex-col gap-4 items-start justify-stretch flex-1">
                        <h1
                            id="landing-heading"
                            className="text-pink-400 text-xl font-bold sm:text-2xl lg:text-4xl text-balance"
                        >
                            BIPoC Climate Justice Conference
                        </h1>

                        {/*
                          Conference date display with animated gradient.
                          To make it static: remove "bg-shine" and add a plain background class.
                          To update the dates: change the text below.
                        */}
                        <span className="w-full px-4 py-2 text-2xl font-bold text-center text-white shadow-lg rounded-xl sm:text-4xl md:text-6xl bg-shine">
                            11.09 – 15.09.2025
                        </span>

                        <div className="bg-black/75 border border-white/10 flex flex-col items-start justify-start rounded-xl shadow-2xl w-full h-full flex-1 p-6 self-stretch">
                            <div className="text-base text-start text-white md:text-lg leading-relaxed">
                                <RenderMarkdown content={welcomeText} />
                            </div>

                            <div className="flex flex-wrap items-start justify-start gap-3 my-6">
                                <LinkButton href="./faq">
                                    {bipocStatementData.title || "The BI_POC-Statement"}
                                </LinkButton>

                                <LinkButton
                                    href={AWARENESS_CONCEPT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {awarenessConceptData.title || "Awareness Concept"}
                                </LinkButton>

                                {data.programURL && (
                                    <LinkButton
                                        href={data.programURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.viewProgram || "View Program"}
                                    </LinkButton>
                                )}

                                {data.programDescriptionURL && (
                                    <LinkButton
                                        href={data.programDescriptionURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.viewProgramDescription || "View Program Description"}
                                    </LinkButton>
                                )}

                                <Link
                                    href={INSTAGRAM_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow us on Instagram"
                                    className="flex items-center justify-center size-11 rounded-full bg-white/10 hover:bg-white/20 transition shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-400"
                                >
                                    <Image
                                        src="/icons/instagram.svg"
                                        alt=""
                                        aria-hidden="true"
                                        width={24}
                                        height={24}
                                        className="filter-white"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
