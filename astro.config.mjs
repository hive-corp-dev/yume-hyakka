import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://yume-hyakka.com",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/styles/_mixin.scss" as mixin;
          @use "./src/styles/_var.scss" as var;
          `,
        },
      },
    },
  },

  integrations: [
    mdx(),
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
