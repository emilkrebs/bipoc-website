import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
	metadataBase: new URL("https://bipoclimatejusticenetwork.org/"),
	title: "BIPoC Climate Justice Conferece 2025 | Register Now!",
	description: "Join us at the BIPoC Climate Justice Conferece on Sept 11-15. Registrations are open!",
	creator: "Emil Krebs",
	robots: "follow, index",
	openGraph: {
		type: "website",
		title: "BIPoC Climate Justice Conferece 2025 | Register Now!",
		description: "Join us at the BIPoC Climate Justice Conferece on Sept 11-15. Registrations are open!",
		images: [
			{
				url: "/opengraph.webp",
				width: 1200,
				height: 630,
				alt: "BIPoC Climate Justice Conferece",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
