# 快速上手

本节将帮助你从头开始构建一个基本的 VitePress 文档站点。 如果您已经有一个现有项目并希望将文档保留在项目中，请从 步骤 2 开始。

::: warning
VitePress目前处于`alpha`状态。它已经适合使用开箱即用的文档，但是配置和主题化API仍然可能在小版本之间发生变化。
:::

## 步骤 1: 创建一个项目

创建并进入新项目的目录

```sh
$ mkdir vitepress-starter && cd vitepress-starter
```

用你喜欢的包管理工具初始化项目

```sh
$ yarn init
```

## 步骤2: 安装VitePress

添加 VitePress 和 Vue 作为项目的开发依赖项。

```sh
$ yarn add --dev vitepress vue
```

::: details 报了peer dependencies警告？
`@docsearch/js` 的peer dependencies存在某些问题。 如果你看到某些命令由于它们而失败，您现在可以尝试以下解决方法：

如果使用pnpm，在`package.json`添加以下代码：

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search"
    ]
  }
}
```

:::

创建你的第一篇文章

```sh
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## Step. 3: 启动本地开发环境

`package.json`添加以下scripts

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

启动文档网站的本地服务器

```sh
$ yarn docs:dev
```

VitePress 将在 `http://localhost:5173` 启动一个本地开发服务器。

## Step. 4: 增加更多文档

再添加一个页面，创建一个名为 `getting-started.md` 的文件，与前面创建的 `index.md`同级。

现在你的目录结构应该是这样的。

```
.
├─ docs
│  ├─ getting-started.md
│  └─ index.md
└─ package.json
```

接下来，访问 `http://localhost:5173/getting-started.html`，可以看到 `getting-started.md` 的内容。

这就是 VitePress 的基本工作方式。 目录结构与 URL 路径相对应。 你可以添加文件，然后尝试访问它。

## 接下来?

到目前为止，您应该拥有一个基本但功能强大的 VitePress 文档站点。 但现在用户还无法浏览该网站，因为它缺少例如我们在该网站上的侧边栏菜单。

要启用这些导航，我们必须向站点添加一些配置。 前往 [配置指南](./configuration) 了解如何配置 VitePress。

如果你想了解更多关于您可以在页面中执行的操作，例如编写 Markdown 或使用 Vue 组件，请查看文档的“编写”部分。 [Markdown 指南](./markdown) 将是一个很好的入口点。

如果您想了解如何自定义网站外观（主题），并了解 VitePress 默认主题提供的功能，请访问 [主题：简介](./theme-introduction)。

当您的文档站点已经成形时，请务必阅读 [部署指南](./deploying)。

