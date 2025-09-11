import "@/app/globals.css";
import { notFound } from "next/navigation";
import { isValidLocale, locales } from "../lib/localisation";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { getTextData } from "../lib/texts";

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export interface LocaleProps {
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const data = await getTextData("data", locale);
    const links = [
        { href: "/about", label: data.about },
        { href: "/archive", label: data.archive },
        { href: "/conference-2025", label: data.conference2025 },
        { href: "/faq", label: data.faq },
    ];

    if (!isValidLocale(locale)) {
        notFound();
    }
    return (
        <html lang={locale}>
            <body>
                <Navbar links={links} />
                {children}
                <Footer
                    imprint={data.imprint}
                    privacy={data.privacy}
                    contact={data.contact}
                />
            </body>
        </html>
    );
}
