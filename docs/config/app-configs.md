# 应用配置

应用配置是定义站点的全局配置的地方。应用配置定义了不仅限于主题配置的基本设置，例如“基本目录”的配置或站点的“标题”。

```ts
export default {
  // These are app level configs.
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  ...
}
```

## appearance

- Type: `boolean`
- Default: `true`

是否启用“暗模式”。 如果该选项设置为 `true`，它会根据用户偏好将 `.dark` 类添加到 `<html>` 标签中。

同时还注入内联样式脚本，并尝试通过 `vitepress-theme-appearance` key 从本地存储读取用户设置，并恢复用户首选的颜色模式。

```ts
export default {
  appearance: true
}
```

## base

- Type: `string`
- Default: `/`

部署站点的 base URL。如果您计划在子路径（例如 GitHub 页面）下部署站点，则需要设置此项。 如果你打算将你的站点部署到`https://foo.github.io/bar/`，那么你应该将base设置为`'/bar/'`。 它应该始终以斜线开头和结尾。

base 会自动添加到其他选项中以 / 开头的所有 URL，因此您只需指定一次。

```ts
export default {
  base: '/base/'
}
```

## description

- Type: `string`
- Default: `A VitePress site`

网站的描述。 这将在页面 HTML 中呈现为 `<meta>` 标记。

```ts
export default {
  description: 'A VitePress site'
}
```

## head

- Type: `HeadConfig[]`
- Default: `[]`

添加到HTML 的 `<head>` 标记中呈现的其他元素。用户添加的标签在结束 `head` 标签之前呈现，在 VitePress 标签之后。

```ts
export default {
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ]
}
```

```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```

## ignoreDeadLinks

- Type: `boolean`
- Default: `false`

当设置为 `true` 时，VitePress 不会因为无效链接而导致构建失败。

```ts
export default {
  ignoreDeadLinks: true
}
```

## lang

- Type: `string`
- Default: `en-US`

站点的 lang 属性。 这将在页面 HTML 中呈现为 `<html lang="en-US">` 标签。

```ts
export default {
  lang: 'en-US'
}
```

## lastUpdated

- Type: `boolean`
- Default: `false`

使用 git commit 获取时间戳。 此选项启用默认主题以显示页面的最后更新时间。 您可以通过 [`themeConfig.lastUpdatedText`](theme-configs#lastupdatedtext) 选项自定义文本。

```ts
export default {
  lastUpdated: true
}
```

## markdown

- Type: `MarkdownOption`

配置 Markdown 解析器选项。 VitePress 使用 [Markdown-it](https://github.com/markdown-it/markdown-it) 作为解析器，使用 [Shiki](https://shiki.matsu.io/) 高亮语言语法。 在此选项中，您可以传递各种 Markdown 相关选项以满足您的需求。

```js
export default {
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
}
```

以下是您可以在此对象中拥有的所有选项：

```ts
interface MarkdownOptions extends MarkdownIt.Options {
  // 自定义主题来高亮语法
  // 可以使用现有的主题。
  // 参考: https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
  // 或者添加自己的主题.
  // 参考: https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme
  theme?:
    | Shiki.IThemeRegistration
    | { light: Shiki.IThemeRegistration; dark: Shiki.IThemeRegistration }

  // 在代码块中启用行号。
  lineNumbers?: boolean

  // markdown-it-anchor plugin options.
  // See: https://github.com/valeriangalliat/markdown-it-anchor#usage
  anchor?: anchorPlugin.AnchorOptions

  // markdown-it-attrs plugin options.
  // See: https://github.com/arve0/markdown-it-attrs
  attrs?: {
    leftDelimiter?: string
    rightDelimiter?: string
    allowedAttributes?: string[]
    disable?: boolean
  }

  // @mdit-vue/plugin-frontmatter plugin options.
  // See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter#options
  frontmatter?: FrontmatterPluginOptions

  // @mdit-vue/plugin-headers plugin options.
  // See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers#options
  headers?: HeadersPluginOptions

  // @mdit-vue/plugin-sfc plugin options.
  // See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc#options
  sfc?: SfcPluginOptions

  // @mdit-vue/plugin-toc plugin options.
  // See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
  toc?: TocPluginOptions

  // Configure the Markdown-it instance.
  config?: (md: MarkdownIt) => void
}
```

## outDir

- Type: `string`
- Default: `./.vitepress/dist`

站点的构建输出位置，相对于项目根目录（如果您正在运行 `vitepress build docs`，则为 `docs` 文件夹）。

```ts
export default {
  outDir: '../public'
}
```

## title

- Type: `string`
- Default: `VitePress`

网站的标题。 这将显示在导航栏中。也用作所有页面标题的后缀，除非定义了 `titleTemplate`。

```ts
export default {
  title: 'VitePress'
}
```

## titleTemplate

- Type: `string | boolean`

标题的后缀。 例如，如果您将 `title` 设置为 `VitePress` 并将 `titleTemplate` 设置为 `我的网站`，则 html 标题变为 `VitePress | 我的网站`。

设置 `false` 以禁用该功能。 如果选项是 `undefined`，那么将使用 `title` 选项的值。

```ts
export default {
  title: 'VitePress',
  titleTemplate: 'Vite & Vue powered static site generator'
}
```

## cleanUrls (试验性的)

- Type: `'disabled' | 'without-subfolders' | 'with-subfolders'`
- Default: `'disabled'`

允许从 URL 中删除后面的“.html”，并且可以选择生成干净的目录结构。可用模式有：

|          Mode          |   Page    |  Generated Page   |     URL     |
| :--------------------: | :-------: | :---------------: | :---------: |
|      `'disabled'`      | `/foo.md` |    `/foo.html`    | `/foo.html` |
| `'without-subfolders'` | `/foo.md` |    `/foo.html`    |   `/foo`    |
|  `'with-subfolders'`   | `/foo.md` | `/foo/index.html` |   `/foo`    |

::: warning 警告

启用此功能可能需要在您的托管平台上进行额外配置。 要使其正常工作，您的服务器必须在请求 URL 时为生成的页面提供**无需重定向**的服务（见上表）。

:::

```ts
export default {
  cleanUrls: 'with-subfolders'
}
```
