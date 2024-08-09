import { defineConfig } from 'astro/config';
import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({mode: "standalone"}),
  build: {
    inlineStylesheets: 'always'
  },
  experimental: {
    serverIslands: true
  },
  server: {
    port: 8080
  }
});