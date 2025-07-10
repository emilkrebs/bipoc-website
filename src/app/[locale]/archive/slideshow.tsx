"use client";

import { useState } from "react";
import Image from "next/image";

const imagesPath = "/archive/2024/photos";

export default function ImageSlideshow() {
	const totalImages = 14;
	const [current, setCurrent] = useState(0);

	const goPrev = () => setCurrent((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
	const goNext = () => setCurrent((prev) => (prev === totalImages - 1 ? 0 : prev + 1));

	return (
		<div className="flex flex-col items-center w-full mt-8">
			<div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/9]">
				<Image
					priority
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 640px"
					src={`${imagesPath}/image_${current + 1}.webp`}
					alt={`Image ${current + 1}`}
					className="object-cover w-full h-full rounded-lg shadow-lg"
				/>
				<button
					onClick={goPrev}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
					aria-label="Previous image"
				>
					&#8592;
				</button>
				<button
					onClick={goNext}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
					aria-label="Next image"
				>
					&#8594;
				</button>
			</div>
		</div>
	);
}
