import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://revoltgrid.de",

  integrations: [icon(), sitemap()],

  output: "static",
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
    imageService: "passthrough",
  }),

  vite: {
    build: {
      minify: false,
    },
    ssr: {
      optimizeDeps: {
        // Force Vite to pre-bundle these CommonJS packages into ESM for workerd
        include: ["debug", "astro-icon", "@iconify/utils"],
      },
    },
  },
  image: {
    // This tells Astro to stop trying to "process" images and just serve them
    service: passthroughImageService(),
  },
});
