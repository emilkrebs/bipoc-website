import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
	title: "BIPOC Climate Justice Summit",
	description: "Join us at the BIPOC Climate Justice Summit on Sept 9-13. Registrations are open!",
	creator: "Emil Krebs",
	robots: "follow, index",
	openGraph: {
		type: "website",
		title: "BIPOC Climate Justice Summit",
		description: "Join us at the BIPOC Climate Justice Summit on Sept 9-13. Registrations are open!",
		images: [
			{
				url: "/opengraph.webp",
				width: 1200,
				height: 630,
				alt: "BIPOC Climate Justice Summit",
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
