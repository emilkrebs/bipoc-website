import Image from "next/image";
import { Archive2025Image } from "@/app/lib/archive2025Images";

interface Archive2025GalleryProps {
    images: Archive2025Image[];
    title?: string;
}

export default function Archive2025Gallery({ images, title = "Conference 2025 Photos" }: Archive2025GalleryProps) {
    // Group images by category
    const imagesByCategory = images.reduce((acc, image) => {
        if (!acc[image.category]) {
            acc[image.category] = [];
        }
        acc[image.category].push(image);
        return acc;
    }, {} as Record<string, Archive2025Image[]>);

    const categories = Object.keys(imagesByCategory).sort();

    return (
        <section className="w-full max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center border-b-2 border-white mb-6 md:mb-8 mt-12 md:mt-16 text-white">
                {title}
            </h2>
            
            {categories.map(category => (
                <div key={category} className="mb-12">
                    <h3 className="text-xl md:text-2xl font-semibold text-center text-white mb-6 capitalize">
                        {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {imagesByCategory[category].map((image, index) => (
                            <div
                                key={`${category}-${index}`}
                                className="relative aspect-square overflow-hidden rounded-lg bg-gray-200"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}