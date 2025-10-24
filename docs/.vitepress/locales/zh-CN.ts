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
    text: '签名校验',
    link: 'signatory'
  },

  {
    text: '接口推送文档',
    collapsed: true,
    items: [
      { text: '摘要', link: 'standalone/index' },
      { text: '1. 批量更新库存', link: 'standalone/batch_update_inventory' },
      { text: '2. 批量上传订单', link: 'standalone/batch_upload_orders' }
    ]
  },

  {
    text: 'GraphQL 文档',
    collapsed: true,
    items: [
      { text: '摘要', link: 'GraphQL/index' },
      { text: '1. 取货码', link: 'GraphQL/pickup_code' }
    ]
  },

  {
    text: 'GRPC 文档',
    collapsed: true,
    items: [
      { text: '摘要', link: 'grpc/index' },
      { text: '1. 设备登录', link: 'grpc/machine.login' },
      { text: '2. 设备信息', link: 'grpc/machine.profile' },
      { text: '3. 商户信息', link: 'grpc/merchant' },
      { text: '4. 货币列表', link: 'grpc/currency' },
      { text: '5. 补货记录', link: 'grpc/restock' },
      { text: '6. 今日销售', link: 'grpc/daily_sale' },
      { text: '7. 订单列表', link: 'grpc/order' },
      { text: '8. 产品列表', link: 'grpc/product' },
      { text: '8.1 商品列表', link: 'grpc/good' },
      { text: '9. 设备广告', link: 'grpc/banner' },
      { text: '10. 设备公告', link: 'grpc/announcement' },
      { text: '11. 货道列表', link: 'grpc/channel' },
      { text: '12. 测试出货', link: 'grpc/debugging' },
      { text: '13. 栏目列表', link: 'grpc/category' },
      { text: '14. 出货日志', link: 'grpc/delivery_log' },
      { text: '15. 设备日志', link: 'grpc/machine_log' },
      { text: '16. 设备控制', link: 'grpc/power_control' },
      { text: '17. 定时开关机', link: 'grpc/power_schedule' },
      { text: '18. 清除定时开关机', link: 'grpc/power_clear' },
      { text: '19. 配方数据表', link: 'grpc/recipe' },
      { text: '20. 获取当前设备取货码(未过期)', link: 'grpc/pickup_codes' },
      { text: '21. 通过接口生成取货码', link: 'grpc/create_pickup_codes' }
    ]
  },

  {
    text: 'MQTT 文档',
    collapsed: true,
    items: [
      { text: '摘要', link: 'mqtt/index' },
      {
        text: '订阅 Subscribe',
        link: '',
        items: [
          { text: '1. 设备字段更新', link: 'mqtt/subscribe/machine.invalidate' },
          { text: '2. 设备关机', link: 'mqtt/subscribe/machine.shutdown' },
          { text: '3. 设备重启', link: 'mqtt/subscribe/machine.reboot' },
          { text: '4. 设备密码更新', link: 'mqtt/subscribe/password.modified' },
          { text: '5. 设备测试（h5发起）', link: 'mqtt/subscribe/channel.debugging' },
          { text: '6. 设备定时开关机(一次)', link: 'mqtt/subscribe/power.schedule.once' },
          { text: '7. 设备定时开关机(重复)', link: 'mqtt/subscribe/power.schedule.cycle' },
          { text: '8. 设备清除开关机', link: 'mqtt/subscribe/power.schedule.clear' },
          { text: '9. 设备配置更新(服务端->客户端)', link: 'mqtt/subscribe/machine.config.push' },
          { text: '10. 广告推送', link: 'mqtt/subscribe/machine.ads.push' },
          { text: '11. 广告更新', link: 'mqtt/subscribe/machine.ads.update' },
          { text: '12. 广告删除', link: 'mqtt/subscribe/machine.ads.delete' },
          { text: '13. 取货码生成后推送', link: 'mqtt/subscribe/client.pickup_codes.create' },
          { text: '14. 取货码删除后推送', link: 'mqtt/subscribe/client.pickup_codes.delete' }
        ]
      },
      {
        text: '发布 Publish',
        link: '',
        items: [
          { text: '1. 温度上报', link: 'mqtt/publish/temperature.put' },
          { text: '2. 湿度上报', link: 'mqtt/publish/humidity.put' },
          { text: '3. 心跳检测（定时）', link: 'mqtt/publish/heartbeat' },
          { text: '4. 离线（遗属消息）', link: 'mqtt/publish/offline' },
          { text: '5. ENV 上报', link: 'mqtt/publish/machine.env.put' },
          { text: '6. 产品更新', link: 'mqtt/publish/product.put' },
          { text: '7. 门锁状态上报', link: 'mqtt/publish/doorlock.status' },
          { text: '8. 批量补货（一键补货）', link: 'mqtt/publish/product.restock' },
          { text: '9. 设备配置更新(客户端->服务端)', link: 'mqtt/publish/machine.config.put' },
          { text: '10. 取货码消费后推至服务端', link: 'mqtt/publish/client.pickup_codes.put' }
        ]
      }
    ]
  },

  {
    text: '更新日志',
    link: 'changelog'
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
