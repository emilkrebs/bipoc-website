// redirect to the locale-specific page
import { redirect } from "next/navigation";

export default async function Home() {
	// Redirect to the English version of the welcome text
	redirect("/en");
}