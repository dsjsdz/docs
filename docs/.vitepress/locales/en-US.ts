import { type DefaultTheme, defineConfig } from 'vitepress'

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
    text: 'Change Log',
    link: ''
  },

  {
    text: 'Platform Usage',
    collapsed: false,
    items: [
      { text: 'Summary', link: '/platform/index' },
      { text: 'Language Switching', link: '/platform/language' },
      {
        text: '1. User Management',
        collapsed: false,
        items: [
          { text: '1.1 Sign Up / Log In', link: '/platform/user.signup' },
          { text: '1.2 User Information', link: '/platform/user.profile' },
          { text: '1.3 User Login Logs', link: '/platform/user.logs' }
        ]
      },
      {
        text: '2. Merchant Management',
        collapsed: false,
        items: [
          { text: '2.1 Create / Join', link: '/platform/merchant.create' },
          { text: '2.2 Invitation Code', link: '/platform/merchant.invite' },
          { text: '2.3 Merchant Information', link: '/platform/merchant.profile' },
          { text: '2.4 Developer Center', link: '/platform/merchant.developer' },
          { text: '2.5 Staff Settings', link: '/platform/merchant.employee' },
          { text: '2.6 Alarm Configuration', link: '/platform/alarm.platform' },
          { text: '2.7 Modify Administrator', link: '/platform/merchant.owner' }
        ]
      },
      {
        text: '3. Order List',
        collapsed: false,
        items: [
          { text: '3.1 List Data', link: '/platform/orders' },
          { text: '3.2 Order Details', link: '/platform/order.detail' }
        ]
      },
      {
        text: '4. Dispense Logs',
        collapsed: false,
        items: [
          { text: '4.1 List Data', link: '/platform/delivery.logs' }
        ]
      },
      {
        text: '5. My Products',
        collapsed: false,
        items: [
          { text: '5.1 Measurement Name', link: '/platform/good.unit' },
          { text: '5.2 Good List', link: '/platform/goods' },
          { text: '5.3 Add / Edit', link: '/platform/good.create' },
          { text: '5.4 Age Verification', link: '/platform/good.age_verification' },
          { text: '5.5 Tax-Free of Goods', link: '/platform/good.is_tax_exempt' },
          { text: '5.6 Good Pricing', link: '/platform/good.price' },
        ]
      },
      {
        text: '6. Restock Records',
        collapsed: false,
        items: [
          { text: '6.1 Record List', link: '/platform/restocks' }
        ]
      },
      {
        text: '7. Machine Model Type',
        collapsed: false,
        items: [
          { text: '7.1 Type List', link: '/platform/models' },
          { text: '7.2 Create / Edit', link: '/platform/model.create' },
          { text: '7.3 Channel Details', link: '/platform/model.channel' },
          { text: '7.4 Common Types', link: '' }
        ]
      },
      {
        text: '8. My Machines',
        collapsed: false,
        items: [
          { text: '8.1 Machine Management', link: '/platform/machines' },
          { text: '8.2 Create / Edit', link: '/platform/machine.create' },
          {
            text: '8.3 Machine Details', collapsed: false,  link: '/platform/machine.detail', items: [
              { text: '8.3.1 Notification Bar', link: '/platform/machine.announce' },
              { text: '8.3.2 Advertisement', link: '/platform/machine.ads' },
              { text: '8.3.3 Machine Test', link: '/platform/machine.qrcode' },
              { text: '8.3.4 Machine Logs', link: '/platform/machine.logs' },
              { text: '8.3.5 Machine Password', link: '/platform/machine.password' },
              { text: '8.3.6 Pickup Code', link: '/platform/machine.pickup_code' },
              { text: '8.3.7 Free Claim', link: '/platform/machine.free_purchase' },
              { text: '8.3.8 Machine Coupons', link: '/platform/machine.coupon' }
            ]
          },
          {
            text: '8.4 Product List', collapsed: false, items: [
              { text: '8.4.1 Categories', link: '/platform/categories' },
              { text: '8.4.2 Sync Channels', link: '/platform/product.sync' },
              { text: '8.4.3 Edit Product', link: '/platform/product.edit' },
              { text: '8.4.4 Product Listing / Delisting', link: '/platform/product.status' },
              { text: '8.4.5 Product Restock', link: '/platform/product.replenish' }
            ]
          }
        ]
      }
    ]
  },

  {
    text: 'Developer Document',
    collapsed: false,
    items: [
      {
        text: 'Kotlin',
        collapsed: false,
        items: [
          { text: 'Project Started', link: '/build-app/getting-started' },
          { text: 'Jar File Config', link: '/build-app/jar-file-config' },
          { text: 'Main Activity', link: '/build-app/main-activity' },
          {
            text: 'Android Motherboard',
            collapsed: false,
            items: [
              {
                text: 'YS-F88 Series',
                link: '/YS-F88/index'
              },
              {
                text: 'ZC 3288 Series',
                link: '/zc/index',
                collapsed: false,
                items: [
                  { text: 'shutdown', link: '/zc/shutdown' },
                  { text: 'reboot', link: '/zc/reboot' },
                  { text: 'setPowerOnOffTime', link: '/zc/setPowerOnOffTime' },
                  { text: 'getBuildModel', link: '/zc/getBuildModel' },
                  { text: 'getBuildSerial', link: '/zc/getBuildSerial' },
                  { text: 'setStatusBar', link: '/zc/setStatusBar' },
                  { text: 'setGestureStatusBar', link: '/zc/setGestureStatusBar' },
                  { text: 'Serial Communication', link: '/build-app/serial-api' }
                ]
              },
              { text: 'Lango Series', link: '/lango/index' }
            ]
          },
          {
            text: 'USDK Jar Methods',
            collapsed: false,
            link: '/usdk/index',
            items: [
              {
                text: 'UBoard Class',
                link: '/uboard/index',
                collapsed: false,
                items: [
                  { text: 'EF_OpenDev', link: '/uboard/EF_OpenDev' },
                  { text: 'EF_CloseDev', link: '/uboard/EF_CloseDev' },
                  { text: 'readHardwareConfig', link: '/uboard/readHardwareConfig' },
                  { text: 'GetSoftwareVersion', link: '/uboard/GetSoftwareVersion' },
                  { text: 'getMinPayoutAmount', link: '/uboard/getMinPayoutAmount' },
                  { text: 'ageVerification', link: '/uboard/ageVerification' },
                  { text: 'GetDropStatus', link: '/uboard/GetDropStatus' },
                  { text: 'Shipment', link: '/uboard/Shipment' },
                  { text: 'ReadTemp', link: '/uboard/ReadTemp' },
                  { text: 'GetBoxStatus', link: '/uboard/GetBoxStatus' },
                  { text: 'ResetLift', link: '/uboard/ResetLift' }
                ]
              }
            ]
          },
          { text: 'AndroidManifest Config', link: '/build-app/android-manifest' },
          { text: 'Advanced Usage', link: '/build-app/advanced-usage' },
          { text: 'Sqldelight Usage', link: '/build-app/sqldelight' }
        ]
      },

      {
        text: 'Standalone Version',
        collapsed: true,
        items: []
      },

      {
        text: 'GraphQL',
        collapsed: true,
        items: []
      },

      {
        text: 'GRPC',
        collapsed: true,
        items: []
      },

      {
        text: 'MQTT',
        collapsed: true,
        items: []
      }
    ]
  },

  {
    text: 'Contact US',
    collapsed: false,
    items: [
      { text: 'Feedback', link: '/feedback' },
      { text: 'Support', link: '/support' },
      { text: 'Official Account', link: '/official_account' }
    ]
  }
]

export const enUS = defineConfig({
  title: '鼎商',
  lang: 'en-US',
  description: '广州鼎商金属制品有限公司，打造专属于您的智能商业终端机',
  head: [['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '../../images/favicon.ico' }]],
  themeConfig: {
    nav: Nav,
    siteTitle: '鼎商',
    sidebar: {
      '/en-US': { base: '/en-US', items: SidebarGuide }
    },

    editLink: {
      pattern: 'https://github.com/dsjsdz/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

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
