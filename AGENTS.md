# Agent Instructions for Revolt Astro Theme

This document provides essential context and instructions for AI coding agents operating within this Astro + Tailwind CSS repository.

## 1. Commands & Workflows

### Build & Type Check

The project does not currently have a dedicated test suite (like Jest or Vitest) set up. The primary verification mechanisms are TypeScript type-checking and the Astro build process.

- **Type-checking:** Use `npx astro check` to verify TypeScript typings in `.astro` and `.ts` files. This should be run before committing changes to ensure type safety.
- **Full Build:** Run `npm run build` (which executes `astro check && astro build`) to type-check and generate the production static build. This optimizes assets and outputs to the `./dist/` directory.
- **Development Server:** Run `npm run dev` to start the local development server with hot module replacement at `http://localhost:4321`.
- **Preview Build:** Run `npm run preview` to locally preview the production build before deploying.

### Adding Tests

If instructed to write or run a test and no test runner is available:

1.  Assume a lightweight test runner like `vitest` needs to be used if necessary, but **always ask** the user before installing new dependencies unless explicitly instructed.
2.  If `vitest` is installed, run a single test using `npx vitest run path/to/test.ts`.
3.  For UI testing in Astro components, consider using `@testing-library/astro` if tests are needed.

### Common Development Tasks

- **Creating a new page:** Add a new `.astro` file in `src/pages/` with appropriate frontmatter and component structure.
- **Creating a reusable component:** Add a new `.astro` file in `src/components/` following the naming conventions.
- **Adding content:** For blog-like content, add markdown files to `src/content/[collection-name]/` and update `content.config.ts` if needed.
- **Updating configuration:** Modify files in `src/config/` for site-wide settings like navigation, footer, analytics, etc.
- **Adding assets:** Place images in `src/assets/` or `public/` and reference them appropriately in components.

## 2. Code Style & Guidelines

### Formatting

The project uses Prettier with strict configurations located in `src/.prettierrc`. Ensure all code adheres to these settings:

- Use **tabs** for indentation (`useTabs: true`) - Configure your editor to insert tabs when pressing Tab key.
- Use **single quotes** for strings (`singleQuote: true`) - Except when the string contains a single quote, then use double quotes.
- Do not use semicolons at the ends of statements (`semi: false`) - Only use semicolons to separate multiple statements on one line.
- No trailing commas (`trailingComma: "none"`) - In objects, arrays, function parameters, etc.
- Maximum line length is 100 characters (`printWidth: 100`) - Break long lines logically, especially in JSX/template sections.
- **Astro-specific formatting:** Keep the frontend template clean and readable, extracting complex logic to the frontmatter script.

Prettier plugins are enabled for both Astro and Tailwind CSS. Ensure Tailwind classes are correctly ordered by the Prettier plugin (alphabetically within categories: layout, flexbox, grid, spacing, sizing, typography, etc.).

### TypeScript & Typing

- **Strict Types:** The project uses TypeScript in strict mode. Ensure all variables, function arguments, and component props are strictly typed. Avoid `any` and `unknown` unless absolutely necessary (with proper justification).
- **Astro Props:** When creating `.astro` components, define `Props` using a TypeScript `interface` or `type` at the top of the component's frontmatter. Use descriptive names and JSDoc comments for complex props.
- **Component Structure:** Place component logic and imports inside the Astro frontmatter (`---`). Keep the HTML/JSX template focused on presentation only.
- **Collections Schema:** When defining content collections in `content.config.ts`, use Zod schemas (`astro/zod`) to validate frontmatter fields with appropriate types.
- **Utility Functions:** For reusable logic, create TypeScript utility functions in `src/utils/` or similar, exporting typed functions.

### Tailwind CSS

- **Styling:** Exclusively use Tailwind CSS utility classes for styling. Avoid writing custom CSS in `<style>` blocks unless absolutely necessary for complex animations, keyframes, or pseudo-elements not easily handled by Tailwind.
- **Class Organization:** Follow the recommended Tailwind class order: layout → flexbox/grid → spacing → sizing → typography → visual effects (shadows, borders, etc.) → transitions/transforms.
- **Responsive Design:** Use responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) appropriately. Consider mobile-first approach when building layouts.
- **Dark Mode:** The project uses selector-based dark mode. Use `dark:` prefix for dark-specific styles. Test both light and dark modes when making visual changes.
- **Typography:** The project utilizes `@tailwindcss/typography`. Use `.prose` and related classes (like `.prose-headings`, `.prose-bold`) for rendering Markdown content or rich text.
- **Custom CSS:** When unavoidable, place custom CSS in `src/styles/global.css` or component-specific `<style>` blocks with clear comments explaining why Tailwind wasn't sufficient.

### Naming Conventions

- **Components:** PascalCase for component file names (e.g., `Button.astro`, `StickySidebar.astro`) and when importing them. Match the component name exactly to the filename.
- **Components (UI vs Blocks):**
  - UI components (reusable primitives): `src/components/ui/` (Button, Input, Card, Modal, etc.)
  - Blocks/Sections (page sections): `src/components/blocks/` (Hero, Features, Testimonials, CTA, etc.)
- **Variables/Functions:** camelCase for variables and standard functions (e.g., `isVisible`, `calculateTotal`, `formatDate`).
- **Constants:** UPPER_SNAKE_CASE for global constants or configuration values (e.g., `MAX_ITEMS`, `API_ENDPOINT`, `DEFAULT_THEME`).
- **Files:** Use kebab-case for non-component files (e.g., `helper-utils.ts`, `site-metadata.json`), but prefer PascalCase for Astro components.
- **Routes:** Use kebab-case for page files in `src/pages/` (e.g., `about-us.astro`, `blog-post.astro`), which creates corresponding URL paths.
- **Collections:** Use singular nouns for content collection names (e.g., `blog`, `course`, `author`) matching the directory name in `src/content/`.

### Imports

- **Group imports logically:**
  1. Astro built-ins/integrations first (`import { Component } from 'astro:components'`)
  2. UI components from `src/components/`
  3. Utility functions from `src/utils/` or similar
  4. Types/data from TypeScript interfaces or content collections
  5. External libraries (lodash, etc.)
- **Use absolute paths or aliases** if configured in `tsconfig.json`, otherwise use clean relative paths (avoid excessive `../` prefixes).
- **Import icons** using the `astro-icon` integration (e.g., `import { Icon } from "astro-icon/components"`).
- **Import images** using `import { Image } from 'astro:assets'` for optimized handling, or direct imports for simple usage.
- **Avoid barrel exports** (`from './index'`) unless specifically needed for re-exporting multiple items from a directory.

### Error Handling

- **Handle missing props gracefully** in Astro components (e.g., by providing defaults with destructuring: `const { title = 'Default Title' } = Astro.props`).
- **For data fetching or external integrations,** use `try/catch` blocks and log errors to `console.error` during development, or return fallback UI components.
- **Content collections:** When using `getEntry()` or `getCollection()`, handle the case where the entry doesn't exist (redirect to 404 or show empty state).
- **Image loading:** Consider using the `Image` component from `astro:assets` which handles optimization and provides loading states.
- **Development vs Production:** Use `import.meta.env.PROD` to conditionally handle errors differently in development (more verbose) vs production (user-friendly).

## 3. Core Project Structure

- `src/components/`: Reusable Astro UI components.
  - `src/components/ui/` - Primitive UI components (buttons, inputs, cards, modals, etc.)
  - `src/components/blocks/` - Larger section components used in pages (heroes, features, testimonials, CTAs, etc.)
  - `src/components/scripts/` - Astro components that primarily contain scripts (analytics, GTM, etc.)
- `src/pages/`: Astro routing pages. Each `.astro` file becomes a route based on its file name.
- `src/content/`: Content collections (defined in `content.config.ts`). Each subdirectory is a collection.
  - `src/content/blog/` - Blog posts in markdown format
  - Additional collections can be added here (courses, authors, products, etc.)
- `src/assets/`: Static assets like images, fonts, etc. that are processed by Astro's asset pipeline.
- `src/layouts/`: Reusable layout components that define the overall structure of pages (typically wraps `<slot/>`).
- `src/config/`: Configuration files for the site (navigation, footer, analytics, social links, etc.) in TypeScript format.
- `src/styles/`: Global CSS and CSS variables.
- `public/`: Static assets served directly at the root URL (favicon, robots.txt, etc., unprocessed assets).

## 4. Astro-Specific Best Practices

### Component Architecture

- **Call to Action (CTA):** Always use `src/components/blocks/homepage/CTA.astro` as the default CTA component across the site instead of basic/generic CTA blocks. It provides a high-conversion, highly-styled presentation aligned with the brand.
- **Frontmatter vs Template:** Keep all logic (data fetching, computations, conditionals) in the frontmatter script (`---`). The template should be purely declarative HTML/JSX.
- **Props Destructuring:** Destructure props in the frontmatter for cleaner template usage: `const { title, description, children } = Astro.props`.
- **Slots:** Use `<slot />` and `<slot name="specific" />` for flexible component composition. Document available slots in component JSDoc comments.
- **Conditional Rendering:** Use JavaScript ternary operators in templates (`{condition ? <ShowWhenTrue /> : <ShowWhenFalse />}`) or logical AND (`{showElement && <Element />}`).
- **Lists:** Use JavaScript `map()` function in templates to render arrays: `{items.map(item => <Item key={item.id} {...item} />)}`.

### Data Fetching

- **Collection Data:** Use `getCollection()` for getting all items in a collection, `getEntry()` for a single item by ID.
- **Filtering & Sorting:** Perform filtering, sorting, and pagination logic in the frontmatter before passing data to components.
- **References:** Use the `reference()` type in Zod schemas for relating content between collections.
- **Pagination:** Implement pagination by slicing arrays based on page parameters from `Astro.params` or `Astro.url.searchParams`.

### Performance Optimization

- **Images:** Always use the `Image` component from `astro:assets` for automatic optimization (format selection, sizing, lazy loading).
- **Scripts:** Place third-party scripts in dedicated components in `src/components/scripts/` and import them where needed.
- **CSS:** Tailwind CSS is already purged for production, ensuring minimal CSS output.
- **Component Loading:** Astro automatically code-splits components. Avoid unnecessary dynamic imports unless for specific use cases.

## 5. Contributing Guidelines

### Making Changes

1.  Create a descriptive branch name (e.g., `feature/blog-pagination`, `fix/header-link`).
2.  Make small, focused commits with clear commit messages in conventional format (e.g., `feat: add author bio to blog posts`, `fix: resolve mobile menu toggle`).
3.  Update documentation in AGENTS.md or README.md if your changes affect development workflows.
4.  Ensure your changes follow the existing code style (run Prettier if needed: `npx prettier --write .`).
5.  Test your changes in both development and production builds (`npm run dev` and `npm run build`).

### Code Review Principles

- **Correctness:** Does the code solve the stated problem correctly?
- **Clarity:** Is the code easy to understand and maintain?
- **Consistency:** Does it follow existing patterns and conventions in the codebase?
- **Completeness:** Are edge cases handled appropriately?
- **Minimalism:** Is the solution as simple as possible while being complete?

## 6. Troubleshooting

### Common Issues

- **Tailwind classes not applying:** Check for typos, ensure the class exists in the configured content paths, verify the Prettier/Tailwind plugin is sorting correctly.
- **TypeScript errors in Astro:** Remember that `.astro` files have limited TypeScript support in templates - complex logic should be in the frontmatter.
- **Image not optimizing:** Ensure you're using the `Image` component from `astro:assets` for automatic optimization.
- **Content collections not updating:** Astro's content cache may need clearing during development - try restarting the dev server.
- **404 on new pages:** Ensure the file is in `src/pages/` and the filename matches the expected route (remember kebab-case becomes URL path).

### Debugging

- **Astro logs:** Check the terminal output for warnings and errors during `npm run dev`.
- **Component props:** Use `console.log(Astro.props)` in the frontmatter to debug what's being passed to a component.
- **Collection data:** Log the result of `getCollection()` to verify you're getting expected data.
- **Build vs Dev:** Some issues only appear in production builds - run `npm run build && npm run preview` to test locally before deploying.

## 7. Website Theme & Aesthetic

### Domain & Narrative
Revolt is a specialized consulting firm focused on accelerating grid access strategies for BESS (Battery Energy Storage Systems), renewable energy projects, and data centers. The core narrative revolves around overcoming slow grid processes, managing interconnection risks, and optimizing pipeline structuring within the modern energy and power infrastructure sectors.

### Design Language & Vibe
The overarching aesthetic is **highly technical, modern, and "engineering-first."** It embraces a precise, data-driven look rather than a traditional corporate style.
- **Visual Motifs:** The design utilizes blueprint-style backgrounds, coordinate markers (e.g., `LAT_45.02`), system initialization codes (`SYS.GRID_INIT`), and 3D interactive elements (like geometric cubes) to symbolize solving complex, multi-dimensional puzzles (like grid interconnection).
- **Layout:** Pages follow a structured, high-conversion B2B marketing flow (Hero &rarr; Challenges &rarr; Solution &rarr; Learning Paths &rarr; CTA). Layouts rely heavily on crisp grid systems, reflecting the literal "power grid" theme.

### Color Palette & Typography
- **Colors:** The palette relies heavily on stark contrasts using `neutral` scales for backgrounds (supporting both clean light modes and deep, immersive dark modes). A distinctive `primary` color scale is used deliberately for call-to-actions, highlights, and glowing technical accents (representing energy/power). 
- **Typography:** Combines bold, clean sans-serif fonts for primary headings and body text for legibility, heavily contrasted with `font-mono` (monospace) text for technical accents, small labels, and metadata to reinforce the engineering aesthetic.
