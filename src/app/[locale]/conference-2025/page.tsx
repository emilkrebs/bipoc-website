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

// Generate static params for all locales
export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const pagePath = "conference-2025";
const sponsorPath = "/sponsor";
const collectivePath = "/collectives";

const sponsors: {
  href: string;
  src: string;
  title: string;
  rounded?: boolean;
}[] = [
    {
        href: "https://www.bewegungsstiftung.de/",
        src: `${sponsorPath}/bewegungs_stiftung.svg`,
        title: "Bewegungs Stiftung",
    },
    {
        href: "https://guerrillafoundation.org/",
        src: `${sponsorPath}/guerrilla.svg`,
        title: "Guerrilla Foundation",
    },
    {
        href: "https://www.heidehof-stiftung.de/",
        src: `${sponsorPath}/heidenhof_stiftung.png`,
        title: "Heidenhof Stiftung",
    },
    {
        href: "https://www.solarpowers.de/das-projekt/",
        src: `${sponsorPath}/solarpowers.png`,
        title: "Solar Powers",
    },
    {
        href: "https://www.themovementhub.org/",
        src: `${sponsorPath}/movement_hub.png`,
        title: "The Movement Hub",
    },
    {
        href: "https://www.collectiveabundance.org/",
        src: `${sponsorPath}/collective_abundance.png`,
        title: "Collective Abundance",
    },
];

const collectives: {
  href: string;
  src: string;
  title: string;
  rounded?: boolean;
}[] = [
    {
        href: "https://www.instagram.com/colectivo.amra/",
        src: `${collectivePath}/amra.webp`,
        title: "AMRA COLLECTIVE",
    },
    {
        href: "https://www.ataec.com/user/274",
        src: `${collectivePath}/colectivx.webp`,
        title: "Colectivx Raíces Negras",
        rounded: true,
    },
    {
        href: "https://www.instagram.com/conuco_leipzig/",
        src: `${collectivePath}/conuco_leipzig.webp`,
        title: "Conuco Leipzig",
        rounded: true,
    },
    {
        href: "https://www.youtube.com/@CasaMassape",
        src: `${collectivePath}/casa_massape.webp`,
        title: "Massape Xilo Colectivo",
        rounded: true,
    },
    {
        href: "",
        src: `${collectivePath}/soulartath.webp`,
        title: "Soulartath",
        rounded: true,
    },
    {
        href: "",
        src: `${collectivePath}/kokoko.webp`,
        title: "Kokoko",
        rounded: true,
    },
    {
        href: "https://www.instagram.com/colectivo.mawvn/",
        src: `${collectivePath}/mawvn.webp`,
        title: "colectivo.mawvn",
        rounded: true,
    },
    {
        href: "https://www.instagram.com/munaykollektiv/",
        src: `${collectivePath}/munay.webp`,
        title: "Munay Kollektiv",
        rounded: true,
    },
    {
        href: "https://www.instagram.com/collectivesabr/",
        src: `${collectivePath}/sabr.webp`,
        title: "Collective Sabr",
        rounded: true,
    },
    {
        href: "https://www.instagram.com/timetospringup/",
        src: `${collectivePath}/springup.webp`,
        title: "Time to Spring Up",
        rounded: true,
    },
    {
        href: "",
        src: `${collectivePath}/voces_guatemala.webp`,
        title: "Voces de Guatemala en Berlín",
        rounded: true,
    },
];

export default async function InformationPage({ params }: LocaleProps) {
    const { locale } = await params;

    const data = await getTextData(`${pagePath}/data`, locale);
    const sponsorsData = await getTextData("data", locale);
    const registrationText =
    (await getTextData(`${pagePath}/registration`, locale)).content;
    const locationText =
    (await getTextData(`${pagePath}/location`, locale)).content;
    const programText =
    (await getTextData(`${pagePath}/program`, locale)).content;
    const awarenessConcept = await getTextData("awareness-concept", locale);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center w-full bg-[url(/background_2.webp)] bg-fixed py-12 px-2 md:px-16">
            <section className="flex flex-col items-center justify-center w-full gap-2">
                <div className="flex flex-col items-start justify-start w-full md:max-w-6xl bg-black/70 rounded-xl p-4 md:p-8 shadow-2xl">
                    <h2 className="text-xl font-extrabold tracking-tight text-left text-pink-500 md:text-4xl">
                        {data.title || "Conference 2025 Information"}
                    </h2>
                    <div className="mb-6 text-base leading-relaxed text-left text-neutral-300 md:text-lg">
                        <RenderMarkdown content={data.content} />
                    </div>

                    <h3
                        id="registration"
                        className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl"
                    >
                        {data.registration || "Registration"}
                    </h3>
                    <div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
                        <RenderMarkdown content={registrationText} />
                        <LinkButton
                            href={REGISTRATION_FORM_URL}
                            target="_blank"
                        >
                            {data.registrationForm || "Registration Form"}
                        </LinkButton>
                    </div>

                    <h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
                        {data.location || "Location"}
                    </h3>
                    <div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
                        <RenderMarkdown content={locationText} />
                    </div>

                    <h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
                        {data.schedule || "Program/ Schedule"}
                    </h3>
                    <div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
                        <RenderMarkdown content={programText} />

                        <div className="space-x-2" >
                            <LinkButton
                                href={data.programURL}
                                target="_blank"
                            >
                                {data.viewProgram}
                            </LinkButton>

                            <LinkButton
                                href={data.programDescriptionURL}
                                target="_blank"
                            >
                                {data.viewProgramDescription || "View Program Description"}
                            </LinkButton>
                        </div>
                    </div>

                    <h3 className="mb-2 text-lg font-bold tracking-tight text-left text-white md:text-2xl">
                        {awarenessConcept.title || "Awareness Concept"}
                    </h3>
                    <div className="mb-6 text-base leading-relaxed text-left text-white md:text-lg">
                        <RenderMarkdown content={awarenessConcept.content} />
                        <LinkButton
                            href={AWARENESS_CONCEPT_URL}
                            target="_blank"
                        >
                            {(awarenessConcept.title || "Awareness Concept") + " PDF"}
                        </LinkButton>
                    </div>
                </div>

                <Collectives title={data.collectives} collectives={collectives} />

                <Sponsors title={sponsorsData.sponsorsTitle} sponsors={sponsors} />
            </section>
        </main>
    );
}
