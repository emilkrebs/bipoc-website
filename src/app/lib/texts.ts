import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { TEXTS_DIRECTORY } from "./constants";

export interface TextData {
  id: string;
  content: string;

  [key: string]: any;
}

// Use locale-specific cache keys to prevent cross-locale contamination
const cachedTexts: Record<string, TextData> = {};

export function getMarkdownContent(fullPath: string) {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return matter(fileContents);
}

export function createTextFromFile(
    fileName: string,
    directory: string,
    locale: string,
): TextData {
    // Create a cache key that includes the locale to prevent cross-contamination
    const cacheKey = `${locale}:${fileName}`;

    // check if post is already cached
    if (cachedTexts[cacheKey]) {
        return cachedTexts[cacheKey];
    }

    const id = fileName.replace(/\.md$/, "");
    const fullPath = `${directory}/${fileName}`;
    const markdown = getMarkdownContent(fullPath);

    const object = {
        id,
        ...markdown.data,
        content: markdown.content,
    };

    cachedTexts[cacheKey] = object;
    return object as TextData;
}

export async function getTextsData(locale: string = "en") {
    try {
        const localeDirectory = path.join(TEXTS_DIRECTORY, locale);
        const fileNames = fs.readdirSync(localeDirectory);
        return fileNames.map((fileName) =>
            createTextFromFile(fileName, localeDirectory, locale)
        );
    } catch (error) {
        // Fallback to English if the locale directory doesn't exist
        if (locale !== "en") {
            console.warn(
                `Text directory for locale ${locale} not found, falling back to English`,
            );
            const englishDirectory = path.join(TEXTS_DIRECTORY, "en");
            const fileNames = fs.readdirSync(englishDirectory);
            return fileNames.map((fileName) =>
                createTextFromFile(fileName, englishDirectory, "en")
            );
        }
        // If English directory also doesn't exist, throw the error
        throw error;
    }
}

export async function getTextData(id: string, locale: string = "en") {
    try {
        // Try to load the file for the requested locale
        return createTextFromFile(
            `${id}.md`,
            path.join(TEXTS_DIRECTORY, locale),
            locale,
        );
    } catch (error) {
        // Fallback to English if the locale file doesn't exist
        if (locale !== "en") {
            console.warn(
                `Text file for ${id} not found in locale ${locale}, falling back to English`,
            );
            return createTextFromFile(
                `${id}.md`,
                path.join(TEXTS_DIRECTORY, "en"),
                "en",
            );
        }
        // If English file also doesn't exist, throw the error
        throw error;
    }
}
