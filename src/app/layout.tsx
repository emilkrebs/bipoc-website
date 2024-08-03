import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
	title: "BIPOC Climate Justice Summit",
	description: "Join us at the BIPOC Climate Justice Summit on Sept 9-13. Registrations are open!",
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
