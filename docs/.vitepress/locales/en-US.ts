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
    text: 'Guide',
    collapsed: false,
    items: [
      { text: 'Guide', link: 'guide' },
      { text: 'Getting Started', link: 'getting-started' }
    ]
  },
  {
    text: 'Build App',
    collapsed: false,
    items: [
      { text: 'Project Started', link: 'build-app/getting-started' },
      { text: 'Jar File Config', link: 'build-app/jar-file-config' },
      { text: 'Main Activity', link: 'build-app/main-activity' },
      {
        text: 'Android Motherboard',
        collapsed: false,
        items: [
          {
            text: 'YS-F88 Series',
            link: 'YS-F88/index'
          },
          {
            text: 'ZC 3288 Series',
            link: 'zc/index',
            collapsed: false,
            items: [
              { text: 'shutdown', link: 'zc/shutdown' },
              { text: 'reboot', link: 'zc/reboot' },
              { text: 'setPowerOnOffTime', link: 'zc/setPowerOnOffTime' },
              { text: 'getBuildModel', link: 'zc/getBuildModel' },
              { text: 'getBuildSerial', link: 'zc/getBuildSerial' },
              { text: 'setStatusBar', link: 'zc/setStatusBar' },
              { text: 'setGestureStatusBar', link: 'zc/setGestureStatusBar' },
              { text: 'Serial Communication', link: 'build-app/serial-api' }
            ]
          },
          { text: 'Lango Series', link: 'lango/index' }
        ]
      },
      {
        text: 'USDK Jar Methods',
        collapsed: false,
        link: 'usdk/index',
        items: [
          {
            text: 'UBoard Class',
            link: 'uboard/index',
            collapsed: false,
            items: [
              { text: 'EF_OpenDev', link: 'uboard/EF_OpenDev' },
              { text: 'EF_CloseDev', link: 'uboard/EF_CloseDev' },
              { text: 'readHardwareConfig', link: 'uboard/readHardwareConfig' },
              { text: 'GetSoftwareVersion', link: 'uboard/GetSoftwareVersion' },
              { text: 'getMinPayoutAmount', link: 'uboard/getMinPayoutAmount' },
              { text: 'ageVerification', link: 'uboard/ageVerification' },
              { text: 'GetDropStatus', link: 'uboard/GetDropStatus' },
              { text: 'Shipment', link: 'uboard/Shipment' },
              { text: 'ReadTemp', link: 'uboard/ReadTemp' },
              { text: 'GetBoxStatus', link: 'uboard/GetBoxStatus' },
              { text: 'ResetLift', link: 'uboard/ResetLift' }
            ]
          }
        ]
      },
      { text: 'AndroidManifest Config', link: 'build-app/android-manifest' },
      { text: 'Advanced Usage', link: 'build-app/advanced-usage' },
      { text: 'Sqldelight Usage', link: 'build-app/sqldelight' }
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
