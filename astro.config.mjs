import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://revoltgrid.de",

  integrations: [icon(), sitemap()],

  output: "static",
});
