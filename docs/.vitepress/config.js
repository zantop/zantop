import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "ZANTOP",
  description: "一切成功均源自积累!",
  lastUpdated: true,
  cleanUrls: "without-subfolders",
  base: "",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/front/js": jsConfig(),
      "/front/css": cssConfig(),
      "/end/": sidebarConfig(),
      "/site/": siteConfig(),
      "/frame/": frameConfig(),
      "/my/": myConfig(),
      "/other/": otherConfig(),
    },
    // footer: {},
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },

    lastUpdatedText: "最后更新",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outlineTitle: "这一页",
  },
});

function nav() {
  return [
    {
      text: "前端",
      items: [
        { text: "javascript", link: "/front/js/数组方法" },
        { text: "css", link: "/front/css/flex布局" },
      ],
    },
    { text: "后端", link: "/end/node/nestjs实践教程", activeMatch: "/end/" },
    { text: "框架", link: "/frame/react/redux的实现", activeMatch: "/frame/" },
    { text: "站点", link: "/site/常用", activeMatch: "/site/" },
    { text: "我的", link: "/my/常用", activeMatch: "/site/" },
    { text: "其他", link: "/other/interview/面试集合", activeMatch: "/other/" },
  ];
}

function jsConfig() {
  return [
    {
      text: "基础",
      collapsible: true,
      items: [
        { text: "数组方法", link: "/front/js/数组方法" },
        { text: "字符串方法", link: "/front/js/字符串方法" },
        { text: "函数节流和防抖", link: "/front/js/函数节流和防抖" },
      ],
    },
    {
      text: "高级",
      collapsible: true,
      items: [
        { text: "浏览器原理和V8引擎", link: "/front/js/浏览器原理和V8引擎" },
        { text: "作用域", link: "/front/js/作用域" },
      ],
    },
  ];
}
function cssConfig() {
  return [
    {
      text: "基础",
      collapsible: true,
      items: [
        { text: "flex布局", link: "/front/css/flex布局" },
        { text: "移动端适配解决方案", link: "/front/css/移动端适配解决方案" },
      ],
    },
  ];
}
function sidebarConfig() {
  return [
    {
      text: "node",
      collapsible: true,
      items: [
        { text: "nestjs实践教程", link: "/end/node/nestjs实践教程" },
        { text: "node搭建cli", link: "/end/node/node搭建cli" },
        { text: "koa2笔记", link: "/end/node/koa2笔记" },
        { text: "egg.js笔记", link: "/end/node/egg.js笔记" },
        { text: "nodebb搭建论坛", link: "/end/node/nodebb搭建论坛" },
        { text: "nodejs爬虫彩票数据", link: "/end/node/nodejs爬虫彩票数据" },
        { text: "nvm管理多版本node", link: "/end/node/nvm管理多版本node" },
        { text: "微信小程序支付", link: "/end/node/微信小程序支付" },
        { text: "微信小程序模板消息", link: "/end/node/微信小程序模板消息" },
        { text: "定时任务", link: "/end/node/定时任务" },
        { text: "腾讯云服务器部署nodejs项目", link: "/end/node/腾讯云服务器部署nodejs项目" },
      ],
    },
    {
      text: "数据库",
      collapsible: true,
      items: [
        { text: "mongoose", link: "/end/database/mongoose" },
        { text: "mongodb备份与恢复", link: "/end/database/mongodb备份与恢复" },
      ],
    },
  ];
}

function siteConfig() {
  return [
    {
      text: "站点",
      collapsible: true,
      items: [
        { text: "常用", link: "/site/常用" },
        { text: "收藏", link: "/site/收藏" },
      ],
    },
  ];
}
function frameConfig() {
  return [
    {
      text: "React",
      collapsible: true,
      items: [
        { text: "redux的实现", link: "/frame/react/redux的实现" },
        { text: "redux的应用", link: "/frame/react/redux的应用" },
        { text: "redux-thunk解析", link: "/frame/react/redux-thunk解析" },
        { text: "redux-saga解析", link: "/frame/react/redux-saga解析" },
        { text: "事件传参", link: "/frame/react/事件传参" },
        { text: "hooks", link: "/frame/react/hooks" },
      ],
    },
    {
      text: "vue",
      collapsible: true,
      items: [{ text: "vuex状态管理", link: "/frame/vue/vuex状态管理" }],
    },
    {
      text: "flutter",
      collapsible: true,
      items: [{ text: "基础", link: "/frame/flutter/基础" }],
    },
  ];
}

function otherConfig() {
  return [
    {
      text: "面试",
      collapsible: true,
      items: [{ text: "面试集合", link: "/other/interview/面试集合" }],
    },
  ];
}

function myConfig() {
  return [
    {
      text: "React",
      collapsible: true,
      items: [
        { text: "redux的实现", link: "/frame/react/redux的实现" },
        { text: "redux的应用", link: "/frame/react/redux的应用" },
        { text: "redux-thunk解析", link: "/frame/react/redux-thunk解析" },
        { text: "redux-saga解析", link: "/frame/react/redux-saga解析" },
        { text: "事件传参", link: "/frame/react/事件传参" },
        { text: "hooks", link: "/frame/react/hooks" },
      ],
    },
  ];
}
