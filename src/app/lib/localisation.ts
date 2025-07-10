

export const locales: string[] = ["en", "es"];

export function isValidLocale(locale: string): boolean {
	return locales.includes(locale);
}