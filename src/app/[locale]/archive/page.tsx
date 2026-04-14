import InstagramPosts from "./instagram-posts";
import LinkButton from "@/app/components/link-button";
import RenderMarkdown from "@/app/components/markdown";
import { getTextData } from "@/app/lib/texts";
import { LocaleProps } from "../layout";
import ImageSlideshow from "./slideshow";
import { locales } from "@/app/lib/localisation";
import Sponsors from "@/app/components/sponsors";
import Collectives from "@/app/components/collectives";
import Archive2025Gallery from "./archive2025-gallery";
import { getArchive2025Images } from "@/app/lib/archive2025Images";

// ─── Data imports ──────────────────────────────────────────────────────────────
// To add or remove collectives: edit  src/data/archive-collectives.json
// To add or remove sponsors:    edit  src/data/archive-sponsors.json
import archiveCollectivesData from "@/data/archive-collectives.json";
import archiveSponsorsData from "@/data/archive-sponsors.json";

// Generate static params for all locales
export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function ArchivePage({ params }: LocaleProps) {
    const { locale } = await params;
    const archiveData = await getTextData("archive", locale);
    const data = await getTextData("data", locale);
    const archive2025Images = getArchive2025Images();

    return (
        <main className="min-h-screen flex flex-col items-center justify-start gap-4 bg-[url(/background_2.webp)] bg-fixed py-8 md:py-16 px-2 md:px-16 text-white">
            {/* Radio program — featured at the top */}
            <RadioProgram data={data} />

            <div className="w-full max-w-7xl">
                {/* 2025 gallery — images auto-loaded from public/archive/2025/ */}
                <Archive2025Gallery
                    images={archive2025Images}
                    title={data.conference2025Photos || "Conference 2025 Photos"}
                />

                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 md:mb-10 tracking-tight text-center drop-shadow-lg text-balance">
                    {archiveData.title || "Archive 2024"}
                </h1>
                <div className="flex-1 text-white whitespace-pre-line">
                    <RenderMarkdown content={archiveData.content} />
                </div>

                {/* 2024 slideshow — images from public/archive/2024/photos/ */}
                <ImageSlideshow />

                {/* Collective partners — loaded from src/data/archive-collectives.json */}
                <Collectives
                    title={data.collectives}
                    collectives={archiveCollectivesData}
                />
            </div>

            {/* Sponsors — loaded from src/data/archive-sponsors.json */}
            <Sponsors title={data.sponsorsTitle} sponsors={archiveSponsorsData} />

            <h2
                id="instagram-heading"
                className="text-2xl md:text-4xl font-bold text-center border-b-2 border-pink-900/60 pb-2 mb-6 md:mb-8 mt-12 md:mt-16 text-balance"
            >
                {data.instagramPosts || "Instagram Posts"}
            </h2>

            <InstagramPosts />

            <h2
                id="links-heading"
                className="text-2xl md:text-4xl font-bold text-center border-b-2 border-pink-900/60 pb-2 mt-12 md:mt-16 text-balance"
            >
                {data.links || "Links"}
            </h2>
            <div className="flex flex-row items-center justify-center w-full max-w-6xl mt-6 md:mt-8">
                <LinkButton href="https://cryptpad.fr/pad/#/2/pad/edit/ToSKZSbnvFEpt+AfYvNt9bpP/">
                    {data.viewSchedule || "View 2024 Schedule"}
                </LinkButton>
            </div>
        </main>
    );
}

function RadioProgram({ data }: { data: Record<string, string> }) {
    return (
        <section
            aria-labelledby="radio-heading"
            className="flex flex-col items-center justify-center w-full max-w-7xl mb-4"
        >
            <div className="bg-black/80 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 w-full">
                <div className="max-w-4xl mx-auto space-y-4 text-white text-lg leading-relaxed">
                    <p className="text-pink-400 font-semibold text-sm uppercase tracking-widest mb-2">
                        🎧 {data.radioLabel || "Audio Collage"}
                    </p>
                    <h2
                        id="radio-heading"
                        className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight text-balance"
                    >
                        {data.radioTitle?.replace("🎧 ", "") || "Decolonial Ecologies: Collective Audio Collage"}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-300 font-medium">
                        {data.radioAuthors || "by Yama Togola (Kokoko Radio Collective) & Vanessa García (Colectiva Conuco)"}
                    </p>
                    <p className="text-neutral-200">{data.radioParagraph1}</p>
                    <p className="text-neutral-200">{data.radioParagraph2}</p>
                    <p className="text-neutral-200">{data.radioParagraph3}</p>
                    <div className="pt-2">
                        <LinkButton href="../../radio_program.mp3" target="_blank" rel="noopener noreferrer">
                            🎵 {data.radioButtonText || "Listen to the Audio Collage"}
                        </LinkButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

