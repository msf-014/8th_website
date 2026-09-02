// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // トップの 7 リンクをページ読込直後に先読みして、クリック時の fetch 待ちをなくす
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "load",
  },
});
