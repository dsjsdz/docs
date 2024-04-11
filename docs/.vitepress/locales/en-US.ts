import { defineConfig, type DefaultTheme } from 'vitepress'

// [document](https://devonline.net/technology/learn/esm-require.html)
import * as app from '../../../package.json'

const Nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/en-US/' },
  { text: 'Guide', link: '/en-US/guide' },
  { text: 'Reference', link: '/en-US/reference' },
  { text: 'Contributing', link: '/en-US/contributing' }
]

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guide',
    collapsed: false,
    items: [
      { text: 'Guide', link: 'guide' },
      { text: 'Getting Started', link: 'getting-started' }
    ]
  },
  {
    text: '商户',
    collapsed: false,
    items: [
      { text: '直连通道', link: 'direct' },
      {
        text: '商户入驻',
        link: 'register',
        items: [
          { text: '下单出货', link: 'http' },
          { text: '归还产品', link: 'task' },
          { text: '查询出货结果', link: 'job' },
          { text: '根据货道号下发出货指令', link: 'migration' }
        ]
      },
      { text: '接口认证', link: 'wire' },
      { text: '注意事项', link: 'wire' },
      { text: '快速开始', link: 'wire' }
    ]
  },
  {
    text: '订单',
    collapsed: false,
    items: [
      {
        text: '订单',
        link: '订单',
        items: [
          { text: '下单出货', link: 'http' },
          { text: '归还产品', link: 'task' },
          { text: '查询出货结果', link: 'job' },
          { text: '根据货道号下发出货指令', link: 'migration' }
        ]
      },
      {
        text: '配置', link: 'config'
      },
      {
        text: '设备',
        link: 'repository',
        items: [
          { text: '获取设备列表', link: 'database' },
          { text: '获取设备货道信息', link: 'redis' },
          { text: '查询取货码状态查询', link: 'redis' },
          { text: '根据设备生成取货码', link: 'redis' },
          { text: '获取设备所有货道', link: 'redis' },
          { text: '发送继电器指令', link: 'redis' },
          { text: '取消取货码', link: 'redis' }
        ]
      },
      {
        text: '格子机',
        link: 'repository',
        items: [
          { text: '二维码上报接口', link: 'database' },
          { text: '一键满货接口', link: 'redis' }
        ]
      }
    ]
  },
  {
    text: 'Contact US',
    collapsed: false,
    items: [
      { text: 'Feedback', link: 'feedback' },
      { text: 'Support', link: 'support' },
      { text: 'Official Account', link: 'official_account' }
    ]
  }
]

export const enUS = defineConfig({
  title: 'DingShang',
  lang: 'en-US',
  description: 'Dingshang Metal Products Co., Ltd., creating intelligent business terminals exclusively for you.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '../images/favicon.ico' }]
  ],
  themeConfig: {
    nav: Nav,
    sidebar: {
      '/en-US/': { base: '/en-US/', items: SidebarGuide }
    },

    // editLink: {
    //   pattern: 'https://github.com/go-nunu/nunu/edit/feature/docs/docs/src/en/:path',
    //   text: 'Edit this page on GitHub'
    // },

    footer: {
      message: '© All rights reserved. Dingshang Metal Products Co., Ltd.',
      copyright: `Powered dsjsdz.com. 2012 - ${new Date().getFullYear()} v${app.version}`
    }
  }
})

/**
 * @description: 英文
 */
export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  en: {
    placeholder: 'Search Documentation',
    translations: {
      button: {
        buttonText: 'Search Documentation',
        buttonAriaLabel: 'Search Documentation'
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Clear query',
          resetButtonAriaLabel: 'Clear query',
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: 'Cancel'
        },
        startScreen: {
          recentSearchesTitle: 'Recent searches',
          noRecentSearchesText: 'No recent searches',
          saveRecentSearchButtonTitle: 'Save this search',
          removeRecentSearchButtonTitle: 'Remove this search from history',
          favoriteSearchesTitle: 'Favorite searches',
          removeFavoriteSearchButtonTitle: 'Remove this search from favorites'
        },
        errorScreen: {
          titleText: 'No results',
          helpText: 'You might need to check your network connection'
        },
        footer: {
          selectText: 'Select',
          navigateText: 'Go',
          closeText: 'Close',
          searchByText: 'Search by'
        },
        noResultsScreen: {
          noResultsText: 'No results found for query',
          suggestedQueryText: 'Try querying for',
          reportMissingResultsText: 'Report this missing result',
          reportMissingResultsLinkText: 'Learn more'
        }
      }
    }
  }
}