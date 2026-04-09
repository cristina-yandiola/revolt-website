import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://revolt-website.bachacode.workers.dev",
  integrations: [icon(), sitemap()],

  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "passthrough",
  }),

  vite: {
    build: {
      minify: false,
    },
  },
  image: {
    // This tells Astro to stop trying to "process" images and just serve them
    service: passthroughImageService(),
  },
});
