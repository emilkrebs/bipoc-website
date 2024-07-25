"use client";
export default function Navbar() {
	function shareLink() {
		navigator.share({
			title: "BIPoC Climate Justice Conference",
			text: "Join us for the next BIPoC Climate Justice Conference",
			url: "https://bipoclimatejusticenetwork.org/",
		});
	}
	return (
		<nav className="flex flex-row items-center justify-between w-full gap-2 p-4 text-base text-white bg-neutral-800">
			<p>BIPoC Climate Justice Network</p>
			<button
				className="hover:underline"
				onClick={shareLink}
			>
				Share it!
			</button>
		</nav>
	);
}