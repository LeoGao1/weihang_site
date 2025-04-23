import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  site: 'https://leogao1.github.io/weihang_site/',
  base: '/weihang_site/',
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
  },
  build: {
    assets: '_assets',
    format: 'directory',
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    server: {
      fs: {
        strict: false,
      },
    },
  },
})
