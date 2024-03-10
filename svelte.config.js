import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  layout: {
    _: './src/mdsvex.svelte',
  },
};

/** @type {import('@sveltejs/kit').Config}*/
const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),
    alias: {
      $components: './src/components',
      $config: './src/lib/config',
      $stores: './src/lib/stores',
      $lib: './src/lib',
    },
  },
  preprocess: sequence([
    vitePreprocess(),
    mdsvex(mdsvexOptions),
    preprocessMeltUI(),
  ]),
};
export default config;
