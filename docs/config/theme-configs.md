# 主题配置

主题配置可让您自定义主题。 您可以通过将 `themeConfig` 键添加到配置文件来定义主题配置。

```ts
export default {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg',
    nav: [...],
    sidebar: { ... }
  }
}
```

这里描述了 VitePress 默认主题的设置。 如果您使用的是其他人创建的自定义主题，这些设置可能没有任何效果，或者可能表现不同。

## logo

- Type: `ThemeableImage`

显示在导航栏中的logo文件，位于站点标题之前。接受路径字符串或包含亮/暗模式不同logo的对象。

```ts
export default {
  themeConfig: {
    logo: '/logo.svg'
  }
}
```

```ts
type Image = string | { src: string; alt?: string }
type ThemeableImage = Image | { light: Image; dark: Image }
```

## siteTitle

- Type: `string | false`

您可以自定义此项以替换导航中的默认站点标题（应用配置中的`title`）。 当设置为 `false` 时，导航中的标题将被禁用。 这在当你的 `logo` 已经包含网站标题文本时很有用。

```ts
export default {
  themeConfig: {
    siteTitle: 'Hello World'
  }
}
```

## nav

- Type: `NavItem`

导航菜单项的配置。 您可以在 [主题: 导航栏](../guide/theme-nav#navigation-links) 了解更多详情。

```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ]
  }
}
```

```ts
type NavItem = NavItemWithLink | NavItemWithChildren

type NavItemWithLink = {
  text: string
  link: string
  activeMatch?: string
}

interface NavItemWithChildren {
  text?: string
  items: NavItemWithLink[]
  activeMatch?: string
}
```

## sidebar

- Type: `Sidebar`

侧边栏菜单项的配置。 您可以在 [主题: 侧边栏](../guide/theme-sidebar) 了解更多详情。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          ...
        ]
      }
    ]
  }
}
```

```ts
type Sidebar = SidebarGroup[] | SidebarMulti

interface SidebarMulti {
  [path: string]: SidebarGroup[]
}

interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsible?: boolean
  collapsed?: boolean
}

interface SidebarItem {
  text: string
  link: string
}
```

## outlineTitle

- Type: `string`
- Default: `On this page`

可用于自定义右侧边栏的标题（在大纲链接的顶部）。 这在用另一种语言编写文档时很有用。

```js
export default {
  themeConfig: {
    outlineTitle: 'In hac pagina'
  }
}
```

## socialLinks

- Type: `SocialLink[]`

您可以定义此选项以在导航中展示带有图标的社交帐户链接。

```js
export default {
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // 你也可以自定义svg的icon:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ]
  }
}
```

```ts
interface SocialLink {
  icon: SocialLinkIcon
  link: string
}

type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string }
```

## footer

- Type: `Footer`

页脚配置。 您可以添加 message 和copyright。 由于设计原因，仅当页面不包含侧边栏时才会显示页脚。

```ts
export default {
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}
```

```ts
export interface Footer {
  message?: string
  copyright?: string
}
```

## editLink

- Type: `EditLink`

编辑链接可让您显示链接以编辑 Git 管理服务（例如 GitHub 或 GitLab）上的页面。 有关详细信息，请参阅 [主题：编辑链接](../guide/theme-edit-link)。

```js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
```

```ts
export interface EditLink {
  pattern: string
  text?: string
}
```

## lastUpdatedText

- Type: `string`
- Default: `Last updated`

显示上次更新时间之前的前缀文本。

```ts
export default {
  themeConfig: {
    lastUpdatedText: 'Updated Date'
  }
}
```

## carbonAds

- Type: `CarbonAds`

一个选项用来展示 [Carbon Ads](https://www.carbonads.net/).

```ts
export default {
  themeConfig: {
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
  }
}
```

```ts
export interface CarbonAds {
  code: string
  placement: string
}
```

了解更多 [Theme: Carbon Ads](../guide/theme-carbon-ads)

## docFooter

- Type: `DocFooter`

可用于自定义出现在上一个和下一个链接上方的文本。 如果不是用英语编写文档，这很有帮助。

```js
export default {
  themeConfig: {
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
}
```

```ts
export interface DocFooter {
  prev?: string
  next?: string
}
```
