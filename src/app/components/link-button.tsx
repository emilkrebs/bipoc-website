import Link from "next/link";
import { HTMLProps } from "react";

export default function LinkButton(props: HTMLProps<HTMLAnchorElement>) {
	const classes = "px-4 py-2 text-2xl font-bold text-center text-red-500 bg-black border-2 border-red-500 rounded-lg shadow-lg bg-opacity-90 transition-transform hover:-translate-y-0.5";
	return (
		<Link href={props.href || "/"} className={`${classes} ${props.className || ""}`}>
			{props.children}
		</Link>
	);
}