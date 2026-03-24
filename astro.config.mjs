import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://revolt-website.bachacode.workers.dev",
  integrations: [icon(), sitemap()],
  image: {
    service: passthroughImageService(),
  },
});
