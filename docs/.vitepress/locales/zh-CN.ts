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
      { text: '快速开始', link: 'getting-started' }
    ]
  },

  {
    text: '约定术语',
    collapsed: false,
    items: [
      { text: '设备状态', link: 'machine_status' },
      { text: '错误代码', link: 'error_code' },
      { text: '设备模型', link: 'model_types' }
    ]
  },

  {
    text: 'Open API',
    link: '',
    collapsed: true,
    items: [
      { text: '接口约定', link: 'open/protocol' },
      { text: '接口认证', link: 'open/auth' },
      { text: '参数加密', link: 'open/signatory' },
      {
        text: '获取设备',
        link: '',
        items: [
          { text: '所有设备', link: 'open/machines' },
          { text: '所有货道', link: 'open/floors' },
          { text: '设备详情', link: 'open/machine' },
          { text: '设备轮播图', link: 'open/banners' },
          { text: '产品列表', link: 'open/products' },
          { text: '商品分类', link: 'open/categories' }
        ]
      },
      {
        text: '订单管理',
        link: '',
        items: [
          { text: '主动下单', link: 'open/order_create' },
          { text: '查询订单', link: 'open/order_get' },
          { text: '更新订单', link: 'open/order_update' },
          { text: '取消订单', link: 'open/order_cancel' },
          { text: '超时订单', link: 'open/order_expired' }
        ]
      },
      {
        text: '取货码管理',
        link: '',
        items: [
          { text: '开启功能', link: 'open/pickup_code_enabled' },
          { text: '取货码生成', link: 'open/pickup_code_create' },
          { text: '取货码查询', link: 'open/pickup_code_get' },
          { text: '取货码取消', link: 'open/pickup_code_delete' },
          { text: '取货码消费', link: 'open/pickup_code_consume' }
        ]
      },
      {
        text: '出货管理',
        link: '',
        items: [
          { text: '订单出货', link: 'open/delivery_put' },
          { text: '出货查询', link: 'open/delivery_get' },
          { text: '根据货道名下发出货指令', link: 'open/delivery_test' },
          { text: 'notify_url 回调', link: 'open/delivery_callback' }
        ]
      },
      {
        text: '补货管理',
        link: '',
        items: [
          { text: '单个补货', link: 'open/replenishment_by_id' },
          { text: '整层补货', link: 'open/replenishment_by_category' },
          { text: '整柜补货', link: 'open/replenishment_by_machine' }
        ]
      }
    ]
  },

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
  head: [['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: './images/favicon.ico' }]],
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
