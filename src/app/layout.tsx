import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";


export const metadata: Metadata = {
	title: "BIPOC Climate Justice Network",
	description: ""
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
