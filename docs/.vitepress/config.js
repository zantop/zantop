import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  base: '',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig()
    },

    editLink: {
      pattern: 'https://github.com/process1024/vitepress/edit/main/docs/:path',
      text: '在 github 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/process1024/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

    lastUpdatedText: '最后更新',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outlineTitle: '这一页'
  }
})

function nav() {
  return [
    { text: '指南', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: '配置', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: 1.0,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [
        { text: '什么是VitePress?', link: '/guide/what-is-vitepress' },
        { text: '快速上手', link: '/guide/getting-started' },
        { text: '配置', link: '/guide/configuration' },
        { text: '部署', link: '/guide/deploying' }
      ]
    },
    {
      text: '编写',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: '静态资源', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: '在Markdown中使用Vue', link: '/guide/using-vue' },
        { text: 'API参考', link: '/guide/api' }
      ]
    },
    {
      text: '主题',
      collapsible: true,
      items: [
        { text: '介绍', link: '/guide/theme-introduction' },
        { text: '导航栏', link: '/guide/theme-nav' },
        { text: '侧边栏', link: '/guide/theme-sidebar' },
        { text: '上下页链接', link: '/guide/theme-prev-next-link' },
        { text: '编辑链接', link: '/guide/theme-edit-link' },
        { text: '最后更新时间', link: '/guide/theme-last-updated' },
        { text: '布局', link: '/guide/theme-layout' },
        { text: '首页', link: '/guide/theme-home-page' },
        { text: '团队页面', link: '/guide/theme-team-page' },
        { text: '页脚', link: '/guide/theme-footer' },
        { text: '搜索', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: '迁移',
      collapsible: true,
      items: [
        {
          text: '从 VuePress 迁移',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: '从 VitePress 0.x 迁移',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: '配置',
      items: [
        { text: '介绍', link: '/config/introduction' },
        { text: '应用配置', link: '/config/app-configs' },
        { text: '主题配置', link: '/config/theme-configs' },
        { text: 'Frontmatter 配置', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}
