import { type DefaultTheme, defineConfig } from 'vitepress'
import * as app from '../../../package.json'

const Nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide' },
  { text: '参考', link: '/reference' },
  { text: '贡献', link: '/contributing' }
]

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: '入门指引',
    collapsed: false,
    items: [
      { text: '引言', link: 'guide' },
      { text: '快速开始', link: 'getting-started' },
      { text: '接口约定', link: 'access_rule' },
      { text: '参数加密', link: 'access_sign' },
      { text: '错误代码', link: 'error_code' }
    ]
  },

  {
    text: '商户OpenAPI',
    collapsed: false,
    items: [
      { text: '接口认证', link: 'authentication' },
      {
        text: '获取设备',
        link: '',
        items: [
          { text: '所有设备', link: 'list_machines' },
          { text: '✈️ 单台设备', link: 'get_machine' },
          { text: '✈️ 轮播图', link: 'list_banners' },
          { text: '✈️ 产品列表', link: 'list_products' },
          { text: '✈️ 商品分类', link: 'list_categories' },
          { text: '✈️ Typescript', link: 'typescript' },
          { text: '-', link: '' },
          { text: '-以下待完善', link: '' },
          { text: '货道列表', link: 'list_floors' },
          { text: '取货码状态查询', link: 'get_pickup_code_status' },
          { text: '生成取货码', link: 'gen_pickup_code' },
          { text: '取消取货码', link: 'unset_pickup_code' }
        ]
      },
      {
        text: '订单&出货',
        link: '订单&出货',
        items: [
          { text: '主动下单', link: 'create_order' },
          { text: '下单出货', link: 'gen_order_record' },
          { text: '查询出货结果', link: 'get_order_status' },
          { text: '根据货道号下发出货指令', link: '' }
        ]
      }
    ]
  },

  {
    text: '后台Action',
    collapsed: false,
    items: [
      { text: '设备模型', link: 'list_models' },
    ]
  },

  { text: '直连API', link: 'access_redirect' },

  {
    text: '联系我们',
    collapsed: false,
    items: [
      { text: '问题反馈', link: 'feedback' },
      { text: '技术支持', link: 'support' },
      { text: '公众号', link: 'official_account' }
    ]
  }
]

export const zhCN = defineConfig({
  lang: 'zh-Hans',
  description: '广州鼎商金属制品有限公司，打造专属于您的智能商业终端机',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: './images/favicon.ico' }]
  ],
  themeConfig: {
    nav: Nav,
    logo: './images/favicon.ico',
    siteTitle: '鼎商',
    sidebar: {
      '/': { base: '/', items: SidebarGuide }
    },

    editLink: {
      pattern: 'https://github.com/dsjsdz/docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '© All rights reserved. 广州鼎商金属制品有限公司',
      copyright: `Powered dsjsdz.com. 2012 - ${new Date().getFullYear()} v${app.version}`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

/**
 * @description: 简体中文
 */
export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}