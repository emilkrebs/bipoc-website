// ─── Localisation (Language) Helpers ────────────────────────────────────────
//
// This file controls which languages the website supports.
//
// HOW TO ADD A NEW LANGUAGE:
//   1. Add the language code (e.g. "de" for German) to the locales array below.
//   2. Copy the folder  texts/en/  to  texts/de/  and translate every .md file.
//   3. Run "npm run build" to generate the new language pages.
//
// Language codes follow the BCP 47 standard (same as HTML lang= attribute).
// Common ones: "en" = English, "es" = Spanish, "de" = German, "fr" = French.

export const locales: string[] = ["en", "es"]; // ← Add more language codes here

export function isValidLocale(locale: string): boolean {
    return locales.includes(locale);
}

export function getLocale(pathname: string): string {
    const segments = pathname.split("/");
    return segments.length > 1 ? segments[1] : "en"; // Default to "en" if no locale is specified
}
