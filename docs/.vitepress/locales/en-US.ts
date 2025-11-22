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
      { text: 'Summary', link: '' },
      { text: 'Language Switching', link: '' },
      {
        text: '1. User Management',
        collapsed: false,
        items: [
          { text: '1.1 Sign Up / Log In', link: '' },
          { text: '1.2 User Information', link: '' },
          { text: '1.3 User Login Logs', link: '' }
        ]
      },
      {
        text: '2. Merchant Management',
        collapsed: false,
        items: [
          { text: '2.1 Create / Join', link: '' },
          { text: '2.2 Invitation Code', link: '' },
          { text: '2.3 Merchant Information', link: '' },
          { text: '2.4 Developer Center', link: '' },
          { text: '2.5 Staff Settings', link: '' },
          { text: '2.6 Tax Control Features', link: '' }
        ]
      },
      {
        text: '3. Order List',
        collapsed: false,
        items: [
          { text: '3.1 List Data', link: '' },
          { text: '3.2 Order Details', link: '' }
        ]
      },
      {
        text: '4. Dispense Logs',
        collapsed: false,
        items: [
          { text: '4.1 List Data', link: '' }
        ]
      },
      {
        text: '5. My Products',
        collapsed: false,
        items: [
          { text: '5.1 Product List', link: '' },
          { text: '5.2 Add / Edit', link: '' },
          { text: '5.3 Age Verification', link: '' },
          { text: '5.4 Duty-Free Products', link: '' }
        ]
      },
      {
        text: '6. Restock Records',
        collapsed: false,
        items: [
          { text: '6.1 Record List', link: '' }
        ]
      },
      {
        text: '7. Machine Model Type',
        collapsed: false,
        items: [
          { text: '7.1 Model Type List', link: '' },
          { text: '7.2 Channels of Model', link: '' },
          { text: '7.3 Normal Model', link: '' }
        ]
      },
      {
        text: '8. My Machines',
        collapsed: false,
        items: [
          { text: '8.1 Machine Management', link: '' },
          { text: '8.2 Machine Information', link: '' },
          {
            text: '8.3 Machine Details', collapsed: false, items: [
              { text: '8.3.1 Notification Bar', link: '' },
              { text: '8.3.2 Advertisements of Machine', link: '' },
              { text: '8.3.3 Machine Testing', link: '' },
              { text: '8.3.4 Machine Logs', link: '' },
              { text: '8.3.5 Machine Password', link: '' },
              { text: '8.3.6 Pickup Code', link: '' },
              { text: '8.3.6 Free Claim', link: '' },
              { text: '8.3.7 Coupon', link: '' }
            ]
          },
          {
            text: '8.4 Product List', collapsed: false, items: [
              { text: '8.4.1 Categories', link: '' },
              { text: '8.4.2 Sync Channels to Create Product', link: '' },
              { text: '8.4.3 Edit Product', link: '' },
              { text: '8.4.4 Product On/Off Shelf', link: '' },
              { text: '8.4.5 Restock Product', link: '' }
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
  title: 'DingShang',
  lang: 'en-US',
  description: 'Dingshang Metal Products Co., Ltd., creating intelligent business terminals exclusively for you.',
  head: [['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '../../images/favicon.ico' }]],
  themeConfig: {
    nav: Nav,
    sidebar: {
      '/en-US/': { base: '/en-US/', items: SidebarGuide }
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
