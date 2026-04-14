import Link from "next/link";
import Markdown from "react-markdown";

// RenderMarkdown — renders Markdown content from the /texts/ directory.
//
// To change how markdown renders (fonts, colours, spacing), edit the
// className values on each element below.
// Link colour is currently pink-400 (vibrant, high contrast on dark backgrounds).

interface MarkdownProps {
    content: string;
}

export default function RenderMarkdown({ content }: MarkdownProps) {
    return (
        <Markdown
            components={{
                h1: ({ children }) => (
                    <h1 className="mt-4 mb-2 text-xl font-bold text-balance">{children}</h1>
                ),
                h2: ({ children }) => (
                    <h2 className="mt-4 mb-2 text-lg font-bold text-balance">{children}</h2>
                ),
                h3: ({ children }) => (
                    <h3 className="mt-4 mb-2 text-base font-bold text-balance">{children}</h3>
                ),
                a: ({ href, children }) => (
                    <Link
                        className="text-pink-400 underline underline-offset-2 hover:text-pink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
                        href={href || ""}
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                        {children}
                    </Link>
                ),
                p: ({ children }) => <p className="mb-3 text-base leading-relaxed">{children}</p>,
                ul: ({ children }) => (
                    <ul className="pl-4 mb-3 ml-2 list-disc space-y-1">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="pl-4 mb-3 list-decimal space-y-1">{children}</ol>
                ),
                li: ({ children }) => (
                    <li className="mb-1 text-base leading-relaxed">{children}</li>
                ),
                hr: () => <hr className="my-6 border-neutral-700" />,
                sup: ({ children }) => (
                    <sup className="font-bold px-0.5">{children}</sup>
                ),
                strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                ),
                em: ({ children }) => (
                    <em className="italic">{children}</em>
                ),
            }}
        >
            {content}
        </Markdown>
    );
}
