import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { TEXTS_DIRECTORY } from "./constants";

export interface Text {
	id: string;
	content: string;
}

export interface LocalisationPageProps {
	params: {
		locale: Locale;
	};
}
export type Locale = "en" | "es";


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
		content: markdown.content
	};


	cachedTexts[fileName] = object;
	return object as Text;
}

export async function getTextsData(locale: Locale = "en") {
	const localeDirectory = path.join(TEXTS_DIRECTORY, locale);
	const fileNames = fs.readdirSync(localeDirectory);
	return fileNames.map(fileName => createTextFromFile(fileName, localeDirectory));
}

export async function getTextData(id: string, locale: Locale = "en") {
	return createTextFromFile(`${id}.md`, path.join(TEXTS_DIRECTORY, locale));
}