import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "appweb-trpr02-documentation",
  description: "A VitePress Site",
  base: '/appweb-trpr02-doc',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Première revue de code', link: '/firstCodeReview' },
      { text: 'Seconde revue de code', link: '/secondCodeReview' }
    ],
  }
})
