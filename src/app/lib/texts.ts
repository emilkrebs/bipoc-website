import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { TEXTS_DIRECTORY, REGISTRATION_FORM_URL } from "./constants";

export interface Text {
	id: string;
	title?: string;
	content: string;
}


const cachedTexts: Record<string, Text> = {};


export function getMarkdownContent(fullPath: string) {
	const fileContents = fs.readFileSync(fullPath, "utf8");
	return matter(fileContents);
}


export function createTextFromFile(fileName: string, directory: string): Text {

	// check if post is already cached
	if (cachedTexts[fileName]) {
		return cachedTexts[fileName];
	}

	const id = fileName.replace(/\.md$/, "");
	const fullPath = `${directory}/${fileName}`;
	const markdown = getMarkdownContent(fullPath);

	const object = {
		id,
		...markdown.data,
		title: markdown.data.title,
		content: markdown.content
	};


	cachedTexts[fileName] = object;
	return object as Text;
}

export async function getTextsData(locale: string = "en") {
	try {
		const localeDirectory = path.join(TEXTS_DIRECTORY, locale);
		const fileNames = fs.readdirSync(localeDirectory);
		return fileNames.map(fileName => createTextFromFile(fileName, localeDirectory));
	} catch (error) {
		// Fallback to English if the locale directory doesn't exist
		if (locale !== "en") {
			console.warn(`Text directory for locale ${locale} not found, falling back to English`);
			const englishDirectory = path.join(TEXTS_DIRECTORY, "en");
			const fileNames = fs.readdirSync(englishDirectory);
			return fileNames.map(fileName => createTextFromFile(fileName, englishDirectory));
		}
		// If English directory also doesn't exist, throw the error
		throw error;
	}
}

export async function getTextData(id: string, locale: string = "en") {
	try {
		// Try to load the file for the requested locale
		const text = createTextFromFile(`${id}.md`, path.join(TEXTS_DIRECTORY, locale));
		
		// Replace placeholders with actual URLs
		text.content = text.content.replace(/REGISTRATION_FORM_URL/g, REGISTRATION_FORM_URL);
		
		return text;
	} catch (error) {
		// Fallback to English if the locale file doesn't exist
		if (locale !== "en") {
			console.warn(`Text file for ${id} not found in locale ${locale}, falling back to English`);
			const fallbackText = createTextFromFile(`${id}.md`, path.join(TEXTS_DIRECTORY, "en"));
			
			// Replace placeholders with actual URLs
			fallbackText.content = fallbackText.content.replace(/REGISTRATION_FORM_URL/g, REGISTRATION_FORM_URL);
			
			return fallbackText;
		}
		// If English file also doesn't exist, throw the error
		throw error;
	}
}