import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
	metadataBase: new URL("https://bipoclimatejusticenetwork.org/"),
	title: "BIPoC Climate Justice Summit 2024 | Register Now!",
	description: "Join us at the BIPoC Climate Justice Summit on Sept 9-13. Registrations are open!",
	creator: "Emil Krebs",
	robots: "follow, index",
	openGraph: {
		type: "website",
		title: "BIPoC Climate Justice Summit 2024 | Register Now!",
		description: "Join us at the BIPoC Climate Justice Summit on Sept 9-13. Registrations are open!",
		images: [
			{
				url: "/opengraph.webp",
				width: 1200,
				height: 630,
				alt: "BIPoC Climate Justice Summit",
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
				<Footer	/>
			</body>
		</html>
	);
}
