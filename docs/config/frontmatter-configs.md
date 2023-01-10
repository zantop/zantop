# Frontmatter Configs

Frontmatter 支持基于页面的配置。在每个 markdown 文件，您都可以自由添加任何设置以覆盖任何全局应用程序或主题配置。 此外，有些配置只能在 Frontmatter 中定义。

```yaml
---
title: Docs with VitePress
editLink: true
---
```

您可以通过 Markdown 文件中的 `$frontmatter` 辅助函数访问 frontmatter 的内容。

```md
{{ $frontmatter.title }}
```

## title

- Type: `string`

页面的标题。 它与 [config.title](../config/app-configs#title) 相同，它会覆盖应用程序配置。

```yaml
---
title: VitePress
---
```

## titleTemplate

- Type: `string | boolean`

标题的后缀。 它与 [config.titleTemplate](../config/app-configs#titletemplate) 相同，它会覆盖应用程序配置。

```yaml
---
title: VitePress
titleTemplate: Vite & Vue powered static site generator
---
```

## description

- Type: `string`

页面的标题。 它与 [config.description](../config/app-configs#description) 相同，它会覆盖应用程序配置。

```yaml
---
description: VitePress
---
```

### head

- Type: `HeadConfig[]`

指定要注入的额外头部标签：

```yaml
---
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```

```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```

## lastUpdated

- Type: `boolean`
- Default: `true`

是否在当前页面显示 [最近更新](../guide/theme-last-updated) 文本。

```yaml
---
lastUpdated: false
---
```

## layout

- Type: `doc | home | page`
- Default: `doc`

指定页面的布局。

- `doc` - 它将默认文档样式应用于 markdown 内容。
- `home` - “主页”的特殊布局。 您可以添加额外的选项，例如“hero”和“feature”，以快速创建漂亮的首页。
- `page` - 类似于 `doc`，但它不将样式应用于内容。 当您想要创建一个完全自定义的页面时很有用。

```yaml
---
layout: doc
---
```

## hero

- Type: `Hero`

此选项仅在 `layout` 设置为 `home` 时生效。

它定义了 home hero 部分的内容。

```yaml
---
layout: home

hero:
  name: VuePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---
```

```ts
interface Hero {
  // The string shown top of `text`. Comes with brand color
  // and expected to be short, such as product name.
  name?: string

  // The main text for the hero section. This will be defined
  // as `h1` tag.
  text: string

  // Tagline displayed below `text`.
  tagline?: string

  // Action buttons to display in home hero section.
  actions?: HeroAction[]
}

interface HeroAction {
  // Color theme of the button. Defaults to `brand`.
  theme?: 'brand' | 'alt'

  // Label of the button.
  text: string

  // Destination link of the button.
  link: string
}
```

## features

- Type: `Feature[]`

此选项仅当 `layout` 设置为 `home` 时生效。

它定义了要在特性部分显示的内容。

```yaml
---
layout: home

features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---
```

```ts
interface Feature {
  // Show icon on each feature box. Currently, only emojis
  // are supported.
  icon?: string

  // Title of the feature.
  title: string

  // Details of the feature.
  details: string
}
```

## aside

- Type: `boolean`
- Default: `true`

如果你不想在 `doc` 布局中显示右边的组件，设置该选项为 `false`。

```yaml
---
aside: false
---
```
