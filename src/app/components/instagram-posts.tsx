import Image from 'next/image';
import Link from 'next/link';

export default function InstagramPosts() {
	const posts = [
		{
			src: "instagram/registration_open.webp",
			alt: "Registration Open",
			link: "https://www.instagram.com/reel/C_bMr8OMTl8/?igsh=MXMwbjN4aDljZTRvdw=="
		},
		{
			src: "instagram/call_to_action.webp",
			alt: "Call to Action",
			link: "https://www.instagram.com/p/CzMHEzfsiys/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
		},
		{
			src: "logo.webp",
			alt: "BIPoC Climate Justice Summit",
			link: "https://www.instagram.com/p/CzEugRRMBhH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
		},
		{
			src: "instagram/we_are_back.webp",
			alt: "We are back!",
			link: "https://www.instagram.com/p/C8_8KIXC1bX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
		}
	];

	return (
		<section id="instagram" className="flex flex-wrap items-center justify-center w-full gap-16 lg:gap-28">
			{posts.map((post, index) => (
				<Post key={index} src={post.src} alt={post.alt} link={post.link} />
			))}
		</section>
	)
}

function Post({ src, alt, link }: { src: string, alt: string, link: string }) {
	return (
		<Link href={link} target="_blank" className="relative w-full rounded-md shadow-2xl cursor-pointer md:w-80">
			<p className="absolute flex items-center justify-center w-full h-full transition-opacity bg-black rounded-md opacity-0 hover:bg-opacity-45 hover:opacity-100">
				View Post
			</p>
			<Image
				className="object-cover w-full h-full rounded-md"
				src={src}
				loading='lazy'
				alt={alt}
				width={100}
				height={100}
			/>
		</Link>
	);
}
