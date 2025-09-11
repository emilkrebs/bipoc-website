export const locales: string[] = ["en", "es"]; // Add more locales as needed

export function isValidLocale(locale: string): boolean {
    return locales.includes(locale);
}

export function getLocale(pathname: string): string {
    const segments = pathname.split("/");
    return segments.length > 1 ? segments[1] : "en"; // Default to "en" if no locale is specified
}
