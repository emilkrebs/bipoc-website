import Link from "next/link";
import Markdown from "react-markdown";

interface MarkdownProps {
	content: string;
}

export default function RenderMarkdown(props: MarkdownProps) {
	return (
		<Markdown
			components={{
				h1: ({ node, ...props }) => <h1 className="mt-4 mb-2 text-xl font-bold" {...props} />,
				h2: ({ node, ...props }) => <h2 className="mt-4 mb-2 text-lg font-bold" {...props} />,
				h3: ({ node, ...props }) => <h3 className="mt-4 mb-2 text-base font-bold" {...props} />,
				a: ({ node, ...props }) => <Link target="_blank" passHref className="mb-2 text-blue-600 hover:underline" href={props.href || ""} {...props} />,
				p: ({ node, ...props }) => <p className="mb-2 text-base" {...props} />,
				ul: ({ node, ...props }) => <ul className="pl-4 mb-2 ml-2 list-disc" {...props} />,
				ol: ({ node, ...props }) => <ol className="pl-4 mb-2 list-decimal" {...props} />,
				li: ({ node, ...props }) => <li className="mb-2 text-base" {...props} />,
				hr: ({ node, ...props }) => <hr {...props} className="my-4" />,
				sup: ({ node, ...props }) => <sup {...props} className="font-bold px-0.5 hover:shadow-2xl" />,
			}}>{props.content}</Markdown>
	);
}