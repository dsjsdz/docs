import { defineConfig } from 'vitepress'

import { common as Common } from './common'

import { enUS } from './locales/en-US'
import { zhCN } from './locales/zh-CN'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...Common,
  base: '/docs/',
  appearance: 'dark',
  locales: {
    root: { label: '简体中文', ...zhCN },
    'en-US': { label: 'English', ...enUS }
  }
})
