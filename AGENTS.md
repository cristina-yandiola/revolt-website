# Agent Instructions for Revolt Astro Theme

This document provides essential context and instructions for AI coding agents operating within this Astro + Tailwind CSS repository.

## 1. Commands & Workflows

### Build & Type Check
The project primary verification mechanisms are TypeScript type-checking and the Astro build process.

- **Type-checking:** Use `npx astro check` to verify TypeScript typings in `.astro` and `.ts` files.
- **Full Build:** Run `npm run build` (executes `astro check && astro build`) to generate the production static build.
- **Development Server:** Run `npm run dev` to start the local development server at `http://localhost:4321`.

### Adding Tests
If instructed to write tests:
1. Assume `vitest` needs to be used but **always ask** before installing new dependencies.
2. If installed, run tests using `npx vitest run path/to/test.ts`.

## 2. Technical Precision: Design System

### Brand & Style
This system is engineered for high-stakes data environments. It adopts a **Modern Minimalist** aesthetic, prioritizing data density and readability. The vibe is "engineering-first"—authoritative, precise, and systematic.

### Color Palette (Tailwind Config)
Always use the functional color scales defined in `tailwind.config.mjs`:
- **Primary:** `primary-500` (#284bff) - Used for primary actions and technical highlights.
- **Accent:** `accent-500` (#c5e901) - Used for high-visibility highlights and CTA components.
- **Neutral:** `neutral` scale for backgrounds (`neutral-50` for light, `neutral-950` for dark).
- **Contrasts:** Use `dark:` prefixes to ensure accessibility in dark mode.

### Typography
- **Headings:** `font-headings` (Outfit Variable) for page titles and section headers.
- **Body:** `font-sans` (Inter Variable) for all narrative and body content.
- **Technical Accents:** `font-mono` for technical labels, metadata, and coordinate markers.
- **Constraints:** Max title size is `text-5xl`. **No italics** are permitted.

### Layout Principles
- **Grid:** Strictly follow a **12-column grid** system using the `Row` and `Col` components.
- **Vertical Rhythm:** Generous spacing between sections (typically `py-16` to `py-28`).
- **Full-Bleed Images:** Use absolute positioning with `left/right: [calc(50%-50vw)]` to make images occupy exactly half the screen, bleeding to the viewport edge.

## 3. Core Structural Components

These are the most important components of the application. Adhere to their property interfaces strictly.

### 1. `Layout.astro` (`src/layouts/Layout.astro`)
The top-level wrapper for every page.
- **Props:** `title`, `description`, `ogImage`, `classes`.
- **Function:** Handles SEO metadata, fonts, global styles, and persistent UI (Nav/Footer).

### 2. `Section.astro` (`src/components/ui/Section.astro`)
The foundational container for vertical page sections.
- **Props:**
  - `id`: Unique section identifier.
  - `classes`: Tailind classes (usually for `bg-` and `py-`).
  - `mode`: Override theme (`light` | `dark`).
  - `padding`: (`both` | `top` | `bottom` | `none`) - Default is `both`.
- **Note:** It automatically provides a centered `container` div.

### 3. `Row.astro` (`src/components/ui/Row.astro`)
A 12-column grid container placed inside a `Section`.
- **Props:**
  - `flex`: If true, uses flexbox instead of grid.
  - `classes`: Gap and alignment classes (e.g., `items-center gap-y-12`).

### 4. `Col.astro` (`src/components/ui/Col.astro`)
A grid column placed inside a `Row`.
- **Props:**
  - `span`: Number of columns (1-12) on large screens.
  - `spanMobile`: Number of columns on mobile (default 12).
  - `align`: Horizontal text alignment (`left`, `center`, `right`).

## 4. Code Style & Guidelines

### Formatting
- Use **tabs** for indentation.
- Use **single quotes** for strings.
- **No semicolons** at ends of statements.
- **No trailing commas** in objects/arrays.

### Naming Conventions
- **Components:** PascalCase (e.g., `HeroSection.astro`).
- **UI vs Blocks:**
  - `src/components/ui/`: Reusable primitives (Button, Section, Row).
  - `src/components/blocks/`: Larger page-specific sections.
- **Routes:** kebab-case in `src/pages/` (e.g., `grid-strategy.astro`).

### Imports
1. Astro built-ins.
2. UI components.
3. Utility functions.
4. Assets/Images.

## 5. Astro Best Practices
- **Call to Action:** Always use `src/components/blocks/homepage/CTA.astro`.
- **Images:** Always use the `Image` component from `astro:assets` for automatic optimization.
- **Frontmatter:** Keep all logic (data fetching, computations) inside the `---` script block.
- **Icons:** Use the `Icon` component and verify the icon exists in `src/icons/` before use.
