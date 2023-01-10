# 页脚

当配置 `themeConfig.footer` 的时候，VitePress将会在页面底部展示全局的页脚。

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
  // The message shown rigth before copyright.
  message?: string

  // The actual copyright text.
  copyright?: string
}
```

注意，当 [侧边栏](./theme-sidebar) 可见时，不会显示页脚。
