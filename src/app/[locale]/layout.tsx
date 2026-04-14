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
                {/*
                  Skip-to-main-content link — the very first focusable element.
                  Keyboard users and screen-reader users press Tab to activate it,
                  jumping past the navbar directly to the page content.
                  WCAG 2.1 SC 2.4.1 (A) and SC 2.4.5 (AA) requirement.
                */}
                <a href="#main-content" className="skip-to-main">
                    {data.skipToContent || "Skip to main content"}
                </a>

                <Navbar
                    links={links}
                    homeLabel={data.home || "Home"}
                />

                {/*
                  The id="main-content" is the target for the skip link above.
                  tabIndex={-1} allows the browser to focus this div programmatically
                  when the skip link is activated, without adding it to the Tab order.
                */}
                <div id="main-content" tabIndex={-1}>
                    {children}
                </div>

                <Footer
                    imprint={data.imprint}
                    privacy={data.privacy}
                    contact={data.contact}
                />
            </body>
        </html>
    );
}
