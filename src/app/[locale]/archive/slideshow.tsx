"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ImageSlideshow — displays photos from the 2024 conference archive.
//
// HOW TO ADD OR CHANGE PHOTOS:
//   1. Drop .webp image files into public/archive/2024/photos/
//   2. Name them image_1.webp, image_2.webp, image_3.webp … in order.
//   3. Update the totalImages constant below to match the number of files.
//
// Keyboard users: use ← / → arrow keys to navigate.

const imagesPath = "/archive/2024/photos";

// ↓ Change this number when you add or remove photos from the folder above.
const totalImages = 31;

export default function ImageSlideshow() {
    const [current, setCurrent] = useState(0);

    const goPrev = () => setCurrent((current - 1 + totalImages) % totalImages);
    const goNext = () => setCurrent((current + 1) % totalImages);

    // Keyboard navigation — Arrow keys (WCAG 2.1 SC 2.1.1)
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    });

    return (
        <figure
            aria-label={`Photo slideshow, image ${current + 1} of ${totalImages}`}
            className="flex flex-col items-center w-full mt-8"
        >
            <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/9]">
                <Image
                    priority
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 640px"
                    src={`${imagesPath}/image_${current + 1}.webp`}
                    alt={`BIPoC Climate Justice Conference 2024 — photo ${current + 1} of ${totalImages}`}
                    className="object-contain w-full h-full rounded-xl"
                />
                <button
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-3 hover:bg-pink-900/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                    aria-label="Previous photo"
                >
                    &#8592;
                </button>
                <button
                    onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-3 hover:bg-pink-900/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                    aria-label="Next photo"
                >
                    &#8594;
                </button>
            </div>
            <figcaption className="text-sm text-neutral-400 mt-2">
                {current + 1} / {totalImages}
            </figcaption>
        </figure>
    );
}
