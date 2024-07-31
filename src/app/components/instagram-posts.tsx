import Image from 'next/image';
import Link from 'next/link';

export default function InstagramPosts() {
	const posts = [
		{
			src: "instagram/registration_open.jpg",
			alt: "Registration Open",
			link: "https://www.instagram.com/p/C92UJbsIJth/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
		},
		{
			src: "instagram/call_to_action.jpg",
			alt: "Call to Action",
			link: "https://www.instagram.com/p/CzMHEzfsiys/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
		},
		{
			src: "logo.jpg",
			alt: "BIPoC Climate Justice Summit",
			link: "https://www.instagram.com/p/CzEugRRMBhH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
		},
		{
			src: "instagram/we_are_back.jpg",
			alt: "We are back!",
			link: "https://www.instagram.com/p/C8_8KIXC1bX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
		}
	];

	return (
		<section id="instagram" className="flex flex-wrap items-center justify-between w-full gap-16 lg:gap-28">
			{posts.map((post, index) => (
				<Post key={index} src={post.src} alt={post.alt} link={post.link} />
			))}
		</section>
	)
}

function Post({ src, alt, link }: { src: string, alt: string, link: string }) {
	return (
		<Link href={link} target="_blank" className="relative w-full rounded-md shadow-2xl cursor-pointer md:w-80">
			<p className="absolute flex items-center justify-center w-full h-full transition-opacity bg-black opacity-0 hover:bg-opacity-45 hover:opacity-100">
				View Post
			</p>
			<Image
				className="object-cover w-full h-full"
				src={src}
				alt={alt}
				width={100}
				height={100}
			/>
		</Link>
	);
}
