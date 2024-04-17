import { defineConfig } from "astro/config";

// const mode = import.meta.env.MODE;
// console.log("msg from CONFIG");
const base = import.meta.env.BASE_URL;
// console.log(import.meta.url);
// console.log("base", base);
// https://astro.build/config
export default defineConfig({
  site: "https://vita-klejch.github.io",
  // base: "hybl-website_astro",
  base: base,
});