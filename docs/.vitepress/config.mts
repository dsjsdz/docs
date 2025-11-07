import { defineConfig } from 'vitepress'

import { common as Common } from './common'

import { zhCN } from './locales/zh-CN'
import { enUS } from './locales/en-US'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...Common,
  lang: 'zh-CN',
  base: '/docs/',
  appearance: 'dark',

  locales: {
    'zh-CN': { label: '简体中文', ...zhCN },
    'en-US': { label: 'English', ...enUS }
  },
})
