import "@/app/globals.css";
import { notFound } from "next/navigation";
import { isValidLocale, locales } from "../lib/localisation";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

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
	if (!isValidLocale(locale)) {
		notFound();
	}
	return (
		<html lang={locale}>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}