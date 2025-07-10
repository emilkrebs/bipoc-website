// Client-side redirect based on browser language (works with static sites)
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { locales } from "./lib/localisation";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		// Get browser language preferences
		const browserLanguages = navigator.languages || [navigator.language];

		// Find the best matching locale
		const preferredLocale = getBestMatchingLocale(browserLanguages);

		// Redirect to the preferred locale
		router.replace(`/${preferredLocale}`);
	}, [router]);

	// Show loading state while redirecting
	return (
		<html>
			<body>
				<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
					<div className="text-center space-y-4">
						<div className="text-4xl animate-pulse">
							🌍
						</div>
						<div className="space-y-2">
							<div className="text-lg font-medium text-gray-900">
								Detecting language...
							</div>
							<div className="text-base text-gray-600">
								Detectando idioma...
							</div>
						</div>
						<div className="flex justify-center mt-6">
							<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}

function getBestMatchingLocale(languages: readonly string[]): string {
	// Check each browser language in order of preference
	for (const language of languages) {
		const normalizedLang = language.toLowerCase();

		// Check for exact match first (e.g., "es")
		if (locales.includes(normalizedLang)) {
			return normalizedLang;
		}

		// Check for language prefix match (e.g., "es-ES" -> "es")
		const languagePrefix = normalizedLang.split("-")[0];
		if (locales.includes(languagePrefix)) {
			return languagePrefix;
		}
	}

	// Default to English if no match found
	return "en";
}