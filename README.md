# BIPoC Climate Justice Conference Website

This is the source code for the official website of the **BIPoC Climate Justice Conference 2025**.

The website supports multiple languages (English and Spanish) and automatically detects the user's browser language to provide the best experience.

## 📝 Editing Website Content (For Non-Developers)

You can easily update the website content by editing markdown files. No programming knowledge required!

### Where to find content files:

All website text is stored in the `texts/` folder:

```
texts/
├── en/           # English content
│   ├── welcome.md
│   ├── about.md
│   ├── archive.md
│   ├── faq/
│   └── conference-2025/
└── es/           # Spanish content
    ├── welcome.md
    ├── about.md
    ├── archive.md
    ├── faq/
    └── conference-2025/
```

### How to edit content:

1. **Find the file you want to edit** in either `texts/en/` (English) or `texts/es/` (Spanish)
2. **Open the `.md` file** with any text editor (even Notepad works!)
3. **Edit the text** below the `---` lines at the top
4. **Save the file**
5. **Commit and push your changes** (or ask a developer to help with this step)

### Example:

To change the welcome page text, edit `texts/en/welcome.md`:

```markdown
--- # Don't change this line
title: Welcome  # Here you can change the title
--- # Don't change this line

Your content goes here...  # Edit this part
You can use **bold text** and [links](https://example.com)
```

Take a look at the markdown cheatsheet for more formatting options: [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)

### Important notes:

- **Don't edit the lines between `---`** at the top of files (these are settings)
- **Keep the same file structure** in both English and Spanish folders
- **Use simple markdown formatting**: `**bold**`, `*italic*`, `[link text](url)`
- **Test your changes** by running the website locally (see developer section below)

If data or content is missing, the website will fall back to the English version automatically.

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

The website automatically detects the user's browser language and redirects them to the appropriate version:

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

- **Static site** on Netlify, Vercel, or GitHub Pages (Currently using GitHub Pages)
- **Server-side rendered** on any Node.js hosting platform

For static deployment, use `npm run export` to generate static files in the `out/` directory.

## 🤝 Contributing

1. **For content changes**: Edit the markdown files in the `texts/` folder
2. **For design/functionality changes**: Submit a pull request with your changes
3. **For issues/ feedback**: [Open an issue](https://github.com/emilkrebs/VailNote/issues/new) on GitHub and choose a label 

## 📧 Contact

For questions about the website content contact the lead developer Emil Krebs at [emilkrebs.dev](https://emilkrebs.dev).
