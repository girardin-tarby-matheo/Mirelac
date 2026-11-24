// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Pour publier sur GitHub Pages (https://<compte>.github.io/Mirelac/),
// renseigner `site` et passer `base` à "/Mirelac".
export default defineConfig({
  base: "/",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
