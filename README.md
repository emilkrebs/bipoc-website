# BIPoC Climate Justice Conference Website

Official website of the **BIPoC Climate Justice Network** — centred on BIPOC
voices in climate justice, built with and for the community.

→ **[CONTRIBUTING.md](CONTRIBUTING.md)** — how to update content, sponsors,
photos, and translations without writing code.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework, static site export |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [react-markdown](https://github.com/remarkjs/react-markdown) | Markdown rendering |
| [gray-matter](https://github.com/jonschlinkert/gray-matter) | Frontmatter parsing |

## Site Structure

```
/                   → Auto-redirects to /en or /es (browser language detection)
/{locale}/          → Home / landing page
/{locale}/about     → About the conference
/{locale}/conference-2025  → 2025 conference info, program, collectives, sponsors
/{locale}/archive   → Archive of the 2024 summit (photos, audio, collectives)
/{locale}/faq       → Frequently Asked Questions
/{locale}/imprint   → Legal imprint
/{locale}/privacy   → Privacy policy
```

## Content Organization

```
texts/
  en/             ← English content
  es/             ← Spanish content
src/data/
  collectives.json           ← 2025 collective partners
  sponsors.json              ← 2025 sponsors
  archive-collectives.json   ← 2024 collective partners
  archive-sponsors.json      ← 2024 sponsors
public/
  archive/2025/   ← Gallery images (auto-scanned, one subfolder = one category)
  archive/2024/photos/  ← Slideshow images (image_1.webp, image_2.webp …)
  collectives/    ← Collective logo files
  sponsor/        ← Sponsor logo files
```

## Accessibility

This site targets **WCAG 2.1 AA** across all pages, with AAA targets for body text:

- Skip-to-main-content link (keyboard and screen-reader navigation)
- All interactive elements have visible `:focus-visible` indicators
- Images carry descriptive `alt` text; decorative images are `aria-hidden`
- Slideshow keyboard control (← / → arrow keys)
- Mobile menu closes on `Escape` key
- Animations respect `prefers-reduced-motion`
- Both navigation and footer use semantic `<nav>` / `<ul>` markup

## Developer Setup

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # builds static export to /out
npm run lint         # ESLint
```

For detailed editing instructions see [CONTRIBUTING.md](CONTRIBUTING.md).

Your content goes here... # Edit this part You can use **bold text** and
[links](https://example.com)
```

Take a look at the markdown cheatsheet for more formatting options:
[Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)

### Important notes:

- **Don't edit the lines between `---`** at the top of files (these are
  settings)
- **Keep the same file structure** in both English and Spanish folders
- **Use simple markdown formatting**: `**bold**`, `*italic*`, `[link text](url)`
- **Test your changes** by running the website locally (see developer section
  below)

If data or content is missing, the website will fall back to the English version
automatically.

## 🛠️ Developer Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/emilkrebs/bipoc-website.git
cd bipoc-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open your browser** and go to `http://localhost:3000`

### Build for production

```bash
npm run build
```

### Export as static site

```bash
npm run build
```

## 🌍 Multi-language Support

The website automatically detects the user's browser language and redirects them
to the appropriate version:

- **English**: `/en`
- **Spanish**: `/es`

### Adding a new language:

1. **Add the language code** to `src/app/lib/localisation.ts`
2. **Create a new folder** in `texts/` (e.g., `texts/fr/` for French)
3. **Translate all markdown files** from the English version
4. **Update the language detection** logic if needed

```ts
export const locales: string[] = ["en", "es", "fr"]; // Add new language codes here
```

## 📁 Project Structure

```
├── public/           # Static files (images, PDFs, etc.)
├── src/
│   ├── app/         # Next.js app directory
│   │   ├── [locale]/ # Language-specific pages
│   │   └── lib/     # Utility functions
│   └── components/  # Reusable React components
├── texts/           # All website content (markdown files)
│   ├── en/         # English content
│   └── es/         # Spanish content
└── README.md       # This file
```

## 🚀 Deployment

The website can be deployed as:

- **Static site** on Netlify, Vercel, or GitHub Pages (Currently using GitHub
  Pages)
- **Server-side rendered** on any Node.js hosting platform

For static deployment, use `npm run export` to generate static files in the
`out/` directory.

## 🤝 Contributing

1. **For content changes**: Edit the markdown files in the `texts/` folder
2. **For design/functionality changes**: Submit a pull request with your changes
3. **For issues/ feedback**:
   [Open an issue](https://github.com/emilkrebs/VailNote/issues/new) on GitHub
   and choose a label

## 📧 Contact

For questions about the website content contact the lead developer Emil Krebs at
[emilkrebs.dev](https://emilkrebs.dev).
