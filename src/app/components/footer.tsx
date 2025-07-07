import Link from "next/link";
import Image from "next/image";
import { INSTAGRAM_URL } from "../lib/constants";

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-between w-full gap-6 px-4 py-6 shadow-xl rounded-t-xl bg-neutral-800 text-white">
			{/* Social Media Section */}
			<SocialMediaLinks />

			{/* Legal section */}
			<div className="flex flex-col items-center justify-between gap-4 sm:gap-16 sm:flex-row w-fit">
				<Link href="/imprint" className="over:underline">Imprint</Link>
				<Link href="/privacy" className="hover:underline">Privacy Policy</Link>
				<Link href="mailto:bipoconference2020@riseup.net" className="hover:underline">Contact</Link>
			</div>

		</footer>
	);
}

function SocialMediaLinks() {
	const profiles = [
		{ name: "Instagram", url: INSTAGRAM_URL, icon: "icons/instagram.svg" },
		{ name: "YouTube", url: "https://www.youtube.com/channel/UCAU55PiRTlEZwLsSV_zoLsw", icon: "icons/youtube.svg" },
		{ name: "Facebook", url: "https://www.facebook.com/BIPoCN", icon: "icons/facebook.svg" },

	];
	return (
		<div className="flex flex-row items-center justify-between gap-6 my-4 sm:gap-16 w-fit">
			{profiles.map((profile) => (
				<Link key={profile.name} href={profile.url} target="_blank" title={profile.name}>
					<Image className="filter-white transition-transform hover:-translate-y-0.5" src={profile.icon} alt={profile.name} width={24} height={24} />
				</Link>
			))}
		</div>
	);
}