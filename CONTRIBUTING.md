# How to Update the BIPoC Climate Justice Conference Website

This guide is for organisers, community members, and content editors who want to
update the website **without writing code**. For developer setup, see [README.md](README.md).

---

## Table of Contents

1. [Update event information (dates, program, location)](#1-update-event-information)
2. [Update navigation labels and site-wide text](#2-update-navigation-labels)
3. [Add or remove sponsors](#3-add-or-remove-sponsors)
4. [Add or remove collective partners](#4-add-or-remove-collective-partners)
5. [Add photos to the archive gallery](#5-add-photos-to-the-archive-gallery)
6. [Update social media links](#6-update-social-media-links)
7. [Translate the site into a new language](#7-translate-the-site-into-a-new-language)
8. [Developer setup (for developers only)](#8-developer-setup)

---

## 1. Update Event Information

All text content (dates, program, location, FAQ answers, etc.) is stored in
**Markdown files** inside the `texts/` folder.

### Folder structure

```
texts/
  en/                         ← English content
    welcome.md                ← Home page welcome message
    about.md                  ← About page
    bipoc-statement.md        ← BIPoC statement (shown on FAQ page)
    awareness-concept.md      ← Awareness concept text
    conference-2025/
      data.md                 ← Conference title, labels, program links
      location.md             ← Location description
      program.md              ← Program / schedule text
      registration.md         ← Registration information
    faq/
      attend.md               ← "Who can attend?" FAQ entry
      registration.md         ← "How do I register?" FAQ entry
      … (one file per FAQ item)
  es/                         ← Spanish content (same structure as en/)
```

### How to edit a page

1. Open the file for the section you want to change.  
   For example, to update the conference location:  
   → Open `texts/en/conference-2025/location.md`

2. The file has two parts separated by `---`:

   ```markdown
   ---
   title: Location
   ---
   The conference will take place at ...
   Your text here supports **bold**, *italic*, and [links](https://example.com).
   ```

   - Lines between the first `---` and second `---` are **labels** (used in buttons etc.)
   - Everything below the second `---` is the **main content** (shown as paragraphs)

3. Save the file. A developer needs to run `npm run build` to publish the changes.

### How to update program links

Open `texts/en/conference-2025/data.md` and update these fields:

```yaml
programURL: "https://link-to-your-program.pdf"
programDescriptionURL: "https://link-to-program-description.pdf"
viewProgram: "View Program"
viewProgramDescription: "View Program Description"
```

---

## 2. Update Navigation Labels

Navigation link labels ("About", "Archive", "FAQ" etc.) and other shared UI text
are in `texts/en/data.md` (and `texts/es/data.md` for Spanish):

```yaml
---
home: Home
skipToContent: Skip to main content
imprint: Imprint
privacy: Privacy Policy
contact: Contact
about: About
archive: Archive
conference2025: Conference 2025
faq: FAQ
sponsorsTitle: Sponsored by
collectives: Collectives
---
```

Edit the values on the right side of each `:` to change the displayed text.

---

## 3. Add or Remove Sponsors

Sponsors are stored in two JSON files — one per conference year.

| File | Used on |
|---|---|
| `src/data/sponsors.json` | Conference 2025 page |
| `src/data/archive-sponsors.json` | Archive / 2024 page |

### Example entry

```json
{
  "href": "https://www.example-foundation.org/",
  "src": "/sponsor/example-logo.png",
  "title": "Example Foundation"
}
```

**Fields:**
- `href` — the sponsor's website URL
- `src` — path to the logo file, starting with `/sponsor/` (place the image in `public/sponsor/`)
- `title` — the sponsor's full name (shown to screen readers and in tooltips)

### Step by step

1. Add the logo image to `public/sponsor/` (use `.svg`, `.png`, or `.webp`)
2. Open the relevant JSON file (e.g. `src/data/sponsors.json`)
3. Add a new entry inside the `[` `]` brackets, separated by commas:

   ```json
   [
     { "href": "https://existing.org/", "src": "/sponsor/existing.svg", "title": "Existing Funder" },
     { "href": "https://new.org/", "src": "/sponsor/new.png", "title": "New Funder" }
   ]
   ```

4. To **remove** a sponsor, delete their `{ … }` entry and the comma before it.

---

## 4. Add or Remove Collective Partners

Collectives work exactly like sponsors but are stored in different files:

| File | Used on |
|---|---|
| `src/data/collectives.json` | Conference 2025 page |
| `src/data/archive-collectives.json` | Archive / 2024 page |

Logo images go into `public/collectives/` (for 2025) or `public/archive/2024/collectives/` (for 2024 archive).

### Circular logos

Add `"rounded": true` to display the logo in a circle (useful for portrait-style images):

```json
{
  "href": "https://www.instagram.com/example/",
  "src": "/collectives/example.webp",
  "title": "Example Collective",
  "rounded": true
}
```

### No website? Leave href empty

If a collective doesn't have a website, set `"href": ""` — it will be displayed
without a link (as a static item).

---

## 5. Add Photos to the Archive Gallery

### 2025 conference photos (shown in the gallery grid)

1. Convert your photos to `.webp` format (free tool: [squoosh.app](https://squoosh.app))
2. Create a subfolder inside `public/archive/2025/` with a descriptive name  
   (e.g. `public/archive/2025/Day 1/`)
3. Place your `.webp` files inside that subfolder
4. The gallery will include them **automatically** on the next build — no code changes needed

The subfolder name becomes the gallery category label.

### 2024 slideshow photos

1. Add your `.webp` image files to `public/archive/2024/photos/`
2. Name them in sequence: `image_1.webp`, `image_2.webp`, …
3. Open `src/app/[locale]/archive/slideshow.tsx`
4. Update the `totalImages` constant to match the number of files:
   ```typescript
   const totalImages = 35; // ← change this number
   ```

---

## 6. Update Social Media Links

### Instagram

Open `src/app/lib/constants.ts` and update:

```typescript
export const INSTAGRAM_URL = "https://www.instagram.com/your_new_handle/";
```

### YouTube and Facebook

Open `src/app/components/footer.tsx` and find the `profiles` array:

```typescript
const profiles = [
  { name: "Instagram", url: INSTAGRAM_URL, icon: "/icons/instagram.svg" },
  { name: "YouTube",   url: "https://www.youtube.com/channel/YOUR_CHANNEL_ID", icon: "/icons/youtube.svg" },
  { name: "Facebook",  url: "https://www.facebook.com/YOUR_PAGE",              icon: "/icons/facebook.svg" },
];
```

Edit the `url` values to update each social media link.

### Contact email

Open `src/app/lib/constants.ts` and update:

```typescript
export const CONTACT_EMAIL = "your-email@example.com";
```

Then also update the `href` in `src/app/components/footer.tsx` (search for `mailto:`).

---

## 7. Translate the Site into a New Language

1. **Duplicate the English text folder:**
   ```
   texts/en/  →  texts/de/     (for German)
   texts/en/  →  texts/fr/     (for French)
   ```

2. **Translate every `.md` file** in the new folder. Keep the frontmatter field
   names (e.g. `title:`, `location:`) unchanged — only translate the values.

3. **Register the language** by adding its code to `src/app/lib/localisation.ts`:
   ```typescript
   export const locales: string[] = ["en", "es", "de"]; // ← add "de" for German
   ```

4. Run `npm run build` — the new language pages will be generated automatically
   at `/de/`, `/de/about`, etc.

---

## 8. Developer Setup

> Skip this section if you're only editing content.

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm (comes with Node.js)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
The site auto-reloads when you edit files.

### Build for production

```bash
npm run build
```

The static files are output to the `out/` folder, ready to be uploaded to any
static hosting service (GitHub Pages, Netlify, Cloudflare Pages, etc.).

### Check for code errors

```bash
npm run lint
```

---

## Questions?

Contact the development team or open an issue in the repository.
