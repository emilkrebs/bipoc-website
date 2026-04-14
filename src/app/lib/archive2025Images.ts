// ─── 2025 Archive Image Loader ───────────────────────────────────────────────
//
// Automatically scans the  public/archive/2025/  folder for .webp images.
//
// HOW TO ADD PHOTOS TO THE 2025 GALLERY:
//   1. Convert your photos to .webp format (free tools: squoosh.app, imagemagick)
//   2. Place them inside a subfolder of  public/archive/2025/
//      For example: public/archive/2025/Day 1/my-photo.webp
//   3. The gallery will include them automatically on the next build.
//      No code changes needed!
//
// Each subfolder becomes a separate gallery category (shown as a filter tab).

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