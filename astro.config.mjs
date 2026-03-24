import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://revolt-website.bachacode.workers.dev",
  integrations: [icon(), sitemap()],

  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },

  output: "server",
  adapter: cloudflare(),
});

