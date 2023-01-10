# 配置

当没有任何配置的时候，页面将非常轻量，但用户也无法通过导航去访问网站。要自定义站点，首先在 docs 目录里创建一个 `.vitepress` 目录。 这是放置所有 VitePress 特定文件的地方。 这时候你的项目结构大概是这样的：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

配置 VitePress 站点的基本文件是 `.vitepress/config.js`，它应该导出一个 JavaScript 对象：

```js
export default {
  title: 'VitePress',
  description: 'Just playing around.'
}
```

在上面的示例中，该站点的标题为“VitePress”，“Just play around.” 作为网站的描述。

在 [主题: 介绍](./theme-introduction) 了解有关 VitePress 功能的所有信息，以了解如何在此配置文件中配置特定功能。

您还可以在 [配置](../config/introduction) 中找到所有配置项。
