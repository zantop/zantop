import { defineConfig } from "vitepress";
import side from "./side";
const path = require("path");
const docsRoot = path.join(__dirname, "..", "..", "docs"); // docs文件路径
// console.log("目录", docsRoot, side(docsRoot + "/front/eng"));

// -------------------- 前端 -------------------------------
const js = [
  ["基础,", "/front/js", "数组方法", "字符串方法", "函数节流和防抖"],
  ["高级", "/front/js", "浏览器工作原理和V8引擎", "作用域"],
];
const ts = [
  [
    "基础,",
    "/front/ts",
    "初识篇",
    "基础篇-三斜线指令",
    "基础篇-函数",
    "基础篇-声明合并",
    "基础篇-声明文件",
    "基础篇-接口",
    "基础篇-数据类型",
    "基础篇-模块和命名空间",
    "基础篇-泛型",
    "基础篇-类",
    "基础篇-装饰器",
    "基础篇-高级类型",
  ],
  [
    "高级",
    "/front/ts",
    "实战篇react与组件类型",
    "实战篇react环境搭建",
    "实战篇ts-eslint",
    "实战篇vue与组件类型",
    "实战篇vue环境搭建",
    "工程篇",
    "文章",
    "进阶篇-工具函数库",
    "配置篇",
  ],
];
const css = [["基础", "/front/css", "flex布局", "移动端适配解决方案"]];
const eng = [
  [
    "npm",
    "/front/eng",
    "git提交规范",
    "git自动化部署项目",
    "npm相关",
    "nrm 使用",
    "packagejson详解",
    "tsrollup搭建工具库",
    "代码规范配置",
    "基于lerna管理packages ",
    "搭建npm私仓库",
    "设计颜色值",
  ],
];

//-------------------- 后端 -------------------------------

const node = [
  [
    "node",
    "/end/node",
    "nestjs实践教程",
    "node搭建cli",
    "egg.js笔记",
    "nodebb搭建论坛",
    "nodejs爬虫彩票数据",
    "nvm管理多版本node",
    "微信小程序支付",
    "微信小程序模板消息",
    "定时任务",
    "腾讯云服务器部署nodejs项目",
    "配置ssh连接服务器",
  ],
];
const database = [["数据库", "/end/database", "mongoose", "mongodb备份与恢复"]];
const os = [
  [
    "服务器",
    "/end/os",
    "centos操作",
    "centos问题总结",
    "docker虚拟化技术",
    "Linux下安装Git",
    "linux和centos中chmod命令",
    "Mac与vim日常命令",
    "Mac相关",
    "ngnix配置记录",
  ],
];

//-------------------- 框架 -------------------------------

const react = [
  [
    "React",
    "/frame/react",
    "redux的实现",
    "redux的应用",
    "redux-thunk解析",
    "redux-saga解析",
    "事件传参",
    "hooks",
  ],
];
const vue = [["Vue", "/frame/vue", "vuex状态管理"]];
const flutter = [["Flutter", "/frame/flutter", "基础"]];

//-------------------- 站点 -------------------------------
const site = [["站点", "/site", "常用", "收藏"]];

//-------------------- 我的 -------------------------------
const my = [["关于", "/my", "关于"]];

//-------------------- 其他 -------------------------------
const other = [
  [
    "读书",
    "/other/read",
    "技术管理36讲",
    "技术人的管理之路",
    "10人以下小团队管理手册",
    "别让猴子跳回背上",
    "穷爸爸富爸爸"
  ],
  ["面试", "/other/interview", "面试集合"],
];

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
      "/front/js": sbconfig(js),
      "/front/ts": sbconfig(ts),
      "/front/css": sbconfig(css),
      "/front/eng": sbconfig(eng),
      "/end/node": sbconfig(node),
      "/end/database": sbconfig(database),
      "/end/os": sbconfig(os),
      "/site/": sbconfig(site),
      "/frame/react": sbconfig(react),
      "/frame/vue": sbconfig(vue),
      "/frame/flutter": sbconfig(flutter),
      "/my/": sbconfig(my),
      "/other/": sbconfig(other),
    },
    algolia: {
      appId: "3XX2MMEDL6",
      apiKey: "e35524d98ec52d320b9c12087130747e",
      indexName: "zantop",
    },
    lastUpdatedText: "最后更新",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outlineTitle: "目录",
  },
});

function nav() {
  return [
    {
      text: "前端",
      items: [
        {
          text: "javascript",
          link: "/front/js/数组方法",
        },
        {
          text: "typescript",
          link: "/front/ts/初识篇",
        },
        { text: "css", link: "/front/css/flex布局" },
        {
          text: "工程化",
          link: "/front/eng/git提交规范",
        },
      ],
    },
    {
      text: "后端",
      items: [
        {
          text: "node",
          link: "/end/node/nestjs实践教程",
        },
        {
          text: "数据库",
          link: "/end/database/mongoose",
        },
        {
          text: "服务器",
          link: "/end/os/centos操作",
        },
      ],
    },
    {
      text: "框架",
      items: [
        {
          text: "react",
          link: "/frame/react/redux的实现",
        },
        {
          text: "vue",
          link: "/frame/vue/vuex状态管理",
        },
        {
          text: "flutter",
          link: "/frame/flutter/基础",
        },
      ],
    },
    { text: "站点", link: "/site/常用" },
    { text: "我的", link: "/my/关于" },
    { text: "其他", link: "/other/read/技术管理36讲" },
  ];
}

function sbconfig(side) {
  return createConfig(side);
}
function createConfig(arr = []) {
  let arrTemp = [];
  arr.forEach((item) => {
    let items = [];
    if (Array.isArray(item)) {
      const arrOp = item.filter((m, n) => n > 1);
      const url = item[1];
      arrOp.forEach((el) => {
        items.push({ text: el, link: `${url}/${el}` });
      });
      arrTemp.push({
        text: item[0],
        collapsible: true,
        items,
      });
    }
  });
  return arrTemp;
}
