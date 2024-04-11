import { defineConfig } from 'vitepress'

import { search as zhSearch } from './locales/zh-CN'
import { search as enSearch } from './locales/en-US'

export const common = defineConfig({
  title: '鼎商 - 开发者文档',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://www.awish.vip/docs',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: '鼎商 | ' }],
    ['meta', { property: 'og:site_name', content: '鼎商开发文档' }],
    ['meta', { property: 'og:image', content: 'https://www.awish.vip/docs/images/favicon.ico' }],
    ['meta', { property: 'og:url', content: 'https://www.awish.vip/' }]
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: '/images/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dsjsdz/docs' }
    ],
    search: {
      provider: 'local',
      options: {
        // appId: '',
        // apiKey: '',
        // indexName: '',
        locales: { ...zhSearch, ...enSearch }
      }
    }
    // carbonAds: { code: '', placement: '' }
  }
})