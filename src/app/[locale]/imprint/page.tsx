import RenderMarkdown from "@/app/components/markdown";
import { Metadata } from "next";

const markdown = `
# Imprint

BIPoC Climate Justice Conferece

E-Mail: [bipoconference2020@riseup.net](mailto:bipoconference2020@riseup.net)

## Liability for Content

As a service provider we are responsible according to § 7 paragraph 1 of TMG for own contents on these pages under the general laws. According to § § 8 to 10 TMG we are not obliged as a service provider to monitor transmitted or stored foreign information or to investigate circumstances that indicate illegal activity. 
Obligations to remove or block the use of information under the general laws remain unaffected. However, a relevant liability is only possible from the date of knowledge of a specific infringement. Upon notification of such violations, we will remove the content immediately.

## Liability for Links

This site contains links to external websites over which we have no control. Therefore we can not accept any responsibility for their content. The respective provider or operator of the pages is always responsible for the contents of any Linked Site. The linked sites were checked at the time of linking for possible violations of law. Illegal contents did not exist at the time of linking. 
A permanent control of the linked pages is unreasonable without concrete evidence of a violation. Upon notification of violations, we will remove such links immediately.

This website is community-owned and open-source and is available on [GitHub](https://github.com/emilkrebs/bipoc-website).

`;

export const metadata: Metadata = {
	title: "BIPoC Climate Justice Conferece 2024 | Imprint",
};

export default function Imprint() {
	return (
		<main className="min-h-screen bg-neutral-900 text-white">
			<section className="flex flex-col justify-start items-start gap-2 gap-x-4 w-full h-full p-4">
				<RenderMarkdown content={markdown} />
			</section>
		</main>
	);
}