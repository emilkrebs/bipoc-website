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

// Generate static params for all locales
export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const collectivePath = "/archive/2024/collectives";

const sponsors: {
    href: string;
    src: string;
    title: string;
    rounded?: boolean;
}[] = [
        {
            href: "https://www.bewegungsstiftung.de/",
            src: "/sponsor/bewegungs_stiftung.svg",
            title: "Bewegungs Stiftung",
        },
        {
            href: "https://guerrillafoundation.org/",
            src: "/sponsor/guerrilla.svg",
            title: "Guerrilla Foundation",
        },
        {
            href: "https://www.heidehof-stiftung.de/",
            src: "/sponsor/heidenhof_stiftung.png",
            title: "Heidenhof Stiftung",
        },
    ];

const archiveCollectives: {
    href: string;
    src: string;
    title: string;
    rounded?: boolean;
}[] = [
        {
            href: "https://linktr.ee/back2soilbasics",
            src: `${collectivePath}/back2soilbasics.webp`,
            title: "@back2soilbasics",
        },
        {
            href: "https://stichtingaralez.com/",
            src: `${collectivePath}/aralez.webp`,
            title: "Aralez",
        },
        {
            href: "https://herewedrawtheline.org/",
            src: `${collectivePath}/herewedrawtheline.svg`,
            title: "Here we draw the line",
        },
        {
            href: "https://mamakiya.org/",
            src: `${collectivePath}/mamakiya.webp`,
            title: "Mamakiya",
        },
        {
            href: "https://afrofeminas.com/",
            src: `${collectivePath}/afrofeminas.webp`,
            title: "Afrofeminas",
        },
        {
            href: "https://www.instagram.com/colectivo.amra/",
            src: `${collectivePath}/amra.webp`,
            title: "AMRA COLLECTIVE",
        },
        {
            href: "https://bewegungsschule.org/",
            src: `${collectivePath}/bewegungsschule.webp`,
            title: "Bewegungsschule",
            rounded: true,
        },
        {
            href: "https://www.ataec.com/user/274",
            src: `${collectivePath}/colectivx.webp`,
            title: "Colectivx Raíces Negras",
            rounded: true,
        },
        {
            href: "https://www.instagram.com/afrofem.marseille",
            src: `${collectivePath}/afroqueerfem.webp`,
            title: "AfroQueerFem",
            rounded: true,
        },
        {
            href: "https://www.instagram.com/collettivo.menen/",
            src: `${collectivePath}/menen_abegascn.webp`,
            title: "Collettivo Menen Abegasc",
            rounded: true,
        },
        {
            href: "https://www.instagram.com/conuco_leipzig/",
            src: `${collectivePath}/conuco_leipzig.webp`,
            title: "Conuco Leipzig",
            rounded: true,
        },
        {
            href: "https://www.instagram.com/xrnl_rebelsofcolour",
            src: `${collectivePath}/rebels_of_color.webp`,
            title: "Rebels of Colour",
            rounded: true,
        },
        {
            href: "https://www.instagram.com/sudanuprisinggermany/",
            src: `${collectivePath}/sudan_uprising_germany.webp`,
            title: "SudanUprising Germany",
            rounded: true,
        },
        {
            href: "https://www.instagram.com/roc_awareness",
            src: `${collectivePath}/roses_of_care.webp`,
            title: "Roses of Care Awareness",
            rounded: true,
        },
        {
            href: "https://www.instagram.com/quilombooalle/",
            src: `${collectivePath}/quilombooalle.webp`,
            title: "Quilombooalle",
            rounded: true,
        },
        {
            href: "https://www.cric-colombia.org/portal/",
            src: `${collectivePath}/cric_colombia.webp`,
            title: "Cric Colombia",
            rounded: true,
        },
    ];

export default async function ArchivePage({ params }: LocaleProps) {
    const { locale } = await params;
    const archiveData = await getTextData("archive", locale);
    const data = await getTextData("data", locale);
    const archive2025Images = getArchive2025Images();

    return (
        <main className="min-h-screen flex flex-col items-center justify-start gap-4 bg-[url(/background_2.webp)] bg-fixed py-8 md:py-16 px-2 md:px-16 text-white">
            {/* Radio Program Section - Featured at the top */}
            <RadioProgram data={data} />

            <div className="w-full max-w-7xl">

                {/* 2025 Archive Images */}
                <Archive2025Gallery
                    images={archive2025Images}
                    title={data.conference2025Photos || "Conference 2025 Photos"}
                />

                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 md:mb-10 tracking-tight text-center drop-shadow-lg">
                    {archiveData.title || "Archive 2024"}
                </h1>
                <div className="flex-1 text-white whitespace-pre-line">
                    <RenderMarkdown content={archiveData.content} />
                </div>

                <ImageSlideshow />

                <Collectives
                    title={data.collectives}
                    collectives={archiveCollectives}
                />
            </div>
            <Sponsors title={data.sponsorsTitle} sponsors={sponsors} />

            <h2 className="text-2xl md:text-4xl font-bold text-center border-b-2 border-black mb-6 md:mb-8 mt-12 md:mt-16">
                {data.instagramPosts || "Instagram Posts"}
            </h2>

            <InstagramPosts />

            <h2 className="text-2xl md:text-4xl font-bold text-center border-b-2 border-black mt-12 md:mt-16">
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


function RadioProgram({ data }: { data: any }) {
    return (
        <section className="flex flex-col items-center justify-center w-full max-w-7xl mb-12 md:mb-16">
            <div className="bg-linear-to-br from-white/80 via-neutral-100/80 to-neutral-200/70 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-md border border-neutral-100 w-full">
                <div className="max-w-4xl mx-auto space-y-6 text-neutral-800 text-lg leading-relaxed mb-8">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-neutral-800 mb-4 leading-tight tracking-tight">
                        {data.radioTitle?.replace('🎧 ', '') || "Decolonial Ecologies: Collective Audio Collage"}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 font-medium mb-6">
                        {data.radioAuthors || "by Yama Togola (Kokoko Radio Collective) & Vanessa García (Colectiva Conuco)"}
                    </p>
                    <p>
                        {data.radioParagraph1 || "Created during the BIPoC Climate Justice Summit 2025 in Ziordia, this collective audio collage serves as a living sound archive of our voices, memories, and visions for ecological justice."}
                    </p>
                    <p>
                        {data.radioParagraph2 || "Through the workshops \"Decolonial Ecologies – A Radio Workshop\" and \"Climate Voices: Audio Storytelling for Justice,\" Yama Togola and Vanessa García invited participants to record their own stories, sounds, and reflections on land, resistance, migration, belonging, and healing."}
                    </p>
                    <p>
                        {data.radioParagraph3 || "The resulting piece weaves together these diverse sonic fragments into a shared narrative — amplifying decolonial perspectives on climate, justice, and community."}
                    </p>

                    <LinkButton href="https://www.swisstransfer.com/d/bbe367f5-93fc-4c28-ab15-077fcf4c4274">
                        🎵 {data.radioButtonText || "Listen to the Audio Collage"}
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}