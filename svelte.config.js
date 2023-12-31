import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: "./src/components",
      $config: "./src/lib/config",
      $stores: "./src/lib/stores",
    },
  },
  preprocess: vitePreprocess(),
};
export default config;
