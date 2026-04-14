import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://bipoclimatejusticenetwork.org/"),
    title: "BIPoC Climate Justice Conference 2025",
    description:
        "Join us at the BIPoC Climate Justice Conference — Sept 11–15, 2025. A summit centred on BIPOC voices in climate justice.",
    creator: "Emil Krebs",
    robots: "follow, index",
    openGraph: {
        type: "website",
        title: "BIPoC Climate Justice Conference 2025",
        description:
            "Join us at the BIPoC Climate Justice Conference — Sept 11–15, 2025. A summit centred on BIPOC voices in climate justice.",
        images: [
            {
                url: "/opengraph.webp",
                width: 1200,
                height: 630,
                alt: "BIPoC Climate Justice Conference 2025 poster",
            },
        ],
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
