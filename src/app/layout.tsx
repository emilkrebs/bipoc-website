import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";

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
				
				{children}
				<Footer	/>
			</body>
		</html>
	);
}
