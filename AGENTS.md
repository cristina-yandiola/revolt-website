# Agent Instructions for Foxi Astro Theme

This document provides essential context and instructions for AI coding agents operating within this Astro + Tailwind CSS repository.

## 1. Commands & Workflows

### Build & Type Check

The project does not currently have a dedicated test suite (like Jest or Vitest) set up. The primary verification mechanisms are TypeScript type-checking and the Astro build process.

- **Type-checking:** Use `npx astro check` to verify TypeScript typings in `.astro` and `.ts` files.
- **Full Build:** Run `npm run build` (which executes `astro check && astro build`) to type-check and generate the production static build.
- **Development Server:** Run `npm run dev` to start the local development server.

### Adding Tests

If instructed to write or run a test and no test runner is available:

1.  Assume a lightweight test runner like `vitest` needs to be used if necessary, but **always ask** the user before installing new dependencies unless explicitly instructed.
2.  If `vitest` is installed, run a single test using `npx vitest run path/to/test.ts`.

## 2. Code Style & Guidelines

### Formatting

The project uses Prettier with strict configurations located in `src/.prettierrc`. Ensure all code adheres to these settings:

- Use **tabs** for indentation (`useTabs: true`).
- Use **single quotes** for strings (`singleQuote: true`).
- Do not use semicolons at the ends of statements (`semi: false`).
- No trailing commas (`trailingComma: "none"`).
- Maximum line length is 100 characters (`printWidth: 100`).

Prettier plugins are enabled for both Astro and Tailwind CSS. Ensure Tailwind classes are correctly ordered by the Prettier plugin.

### TypeScript & Typing

- **Strict Types:** The project uses TypeScript. Ensure all variables, function arguments, and component props are strictly typed. Avoid `any`.
- **Astro Props:** When creating `.astro` components, define `Props` using a TypeScript `interface` or `type` at the top of the component's frontmatter.
- **Component Structure:** Place component logic and imports inside the Astro frontmatter (`---`). Keep the HTML/JSX template clean.

### Tailwind CSS

- **Styling:** Exclusively use Tailwind CSS utility classes for styling. Avoid writing custom CSS in `<style>` blocks unless absolutely necessary for complex animations or pseudo-elements not easily handled by Tailwind.
- **Typography:** The project utilizes `@tailwindcss/typography`. Use `.prose` classes for rendering Markdown content or rich text.

### Naming Conventions

- **Components:** PascalCase for component file names (e.g., `Button.astro`, `StickySidebar.astro`) and when importing them.
- **Variables/Functions:** camelCase for variables and standard functions.
- **Constants:** UPPER_SNAKE_CASE for global constants or configuration values.

### Imports

- Group imports logically: Astro built-ins/integrations first, then UI components, then utility functions, then types/data.
- Use absolute paths or aliases if configured, otherwise use clean relative paths.
- Import icons using the `astro-icon` integration (e.g., `import { Icon } from "astro-icon/components"`).

### Error Handling

- Handle missing props gracefully in Astro components (e.g., by providing defaults or conditionally rendering).
- For data fetching or external integrations, use `try/catch` blocks and log errors to `console.error` during development, or return fallback UI components.

## 3. Core Project Structure

- `src/components/`: Reusable Astro UI components.
- `src/pages/`: Astro routing pages.
- `src/content/`: Content collections (if defined in `content.config.ts`).
- `src/assets/`: Static assets like images.
- `src/layouts/`: Reusable page layouts.
