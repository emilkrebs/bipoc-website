// ─── Shared TypeScript Types ──────────────────────────────────────────────────
//
// These interfaces define the shape of data used across the site.
//
// Non-developers: you don't need to edit this file.
// If you want to add a new field to a JSON data file, ask a developer to
// add the corresponding type here so TypeScript can validate it.
//
// ─────────────────────────────────────────────────────────────────────────────

/**
 * A collective partner of the conference.
 *
 * These are stored in:
 *   src/data/collectives.json         (2025 conference)
 *   src/data/archive-collectives.json (2024 archive)
 */
export interface Collective {
    /** URL to the collective's website or social media. Omit or set to "" if they don't have one. */
    href?: string;
    /** Path to the logo image, relative to /public — e.g. "/collectives/amra.webp" */
    src: string;
    /** Display name shown in the tooltip and read aloud by screen readers */
    title: string;
    /** Set to true to display the logo in a circle (good for portrait-style photos) */
    rounded?: boolean;
}

/**
 * A financial or organisational sponsor.
 *
 * These are stored in:
 *   src/data/sponsors.json         (2025 conference)
 *   src/data/archive-sponsors.json (2024 archive)
 */
export interface Sponsor {
    /** URL to the sponsor's website */
    href: string;
    /** Path to the logo image, relative to /public — e.g. "/sponsor/guerrilla.svg" */
    src: string;
    /** Display name shown in screen readers and tooltips */
    title: string;
    /** Set to true to display the logo in a circle */
    rounded?: boolean;
}
