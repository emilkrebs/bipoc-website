import fs from "fs";
import path from "path";

export interface Archive2025Image {
    src: string;
    alt: string;
    category: string;
}

export function getArchive2025Images(): Archive2025Image[] {
    const imagesDir = path.join(process.cwd(), "public", "archive", "2025");
    const images: Archive2025Image[] = [];
    
    try {
        // Get all subdirectories in the 2025 folder
        const categories = fs.readdirSync(imagesDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        for (const category of categories) {
            const categoryPath = path.join(imagesDir, category);
            const files = fs.readdirSync(categoryPath)
                .filter(file => file.endsWith(".webp"))
                .sort(); // Sort files alphabetically
            
            for (const file of files) {
                images.push({
                    src: `/archive/2025/${category}/${file}`,
                    alt: `BIPoC Climate Justice Conference 2025 - ${category} - ${file.replace(".webp", "")}`,
                    category: category
                });
            }
        }
    } catch (error) {
        console.error("Error reading 2025 archive images:", error);
    }

    return images;
}