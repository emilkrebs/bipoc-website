"use client";

import Link from "next/link";

export default function Navbar() {
	function shareLink() {
		navigator.share({
			title: "BIPoC Climate Justice Summit",
			text: "Join us for the next BIPoC Climate Justice Summit",
			url: "https://bipoclimatejusticenetwork.org/",
		});
	}
	return (
		<nav className="flex flex-row items-center justify-between w-full gap-2 p-4 text-base text-white bg-neutral-800">
			<Link href="/">BIPoC Climate Justice Summit</Link>
			<button
				className="hover:underline"
				onClick={shareLink}
			>
				Share it!
			</button>
		</nav>
	);
}