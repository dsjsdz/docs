import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "鼎商云开发平台",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dsjsdz/docs' }
    ],

    footer: {
      message: '© All rights reserved. 广州鼎商金属制品有限公司',
      copyright: 'Powered dsjsdz.com. v1.0.0'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    }
  }
})
