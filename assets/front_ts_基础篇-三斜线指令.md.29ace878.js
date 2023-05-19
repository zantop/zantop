import{_ as s,c as a,o as n,a as l}from"./app.c4aa1f4f.js";const i=JSON.parse('{"title":"基础篇-三斜线指令","description":"","frontmatter":{},"headers":[],"relativePath":"front/ts/基础篇-三斜线指令.md","lastUpdated":1673364519000}'),p={name:"front/ts/基础篇-三斜线指令.md"},o=l(`<h1 id="基础篇-三斜线指令" tabindex="-1">基础篇-三斜线指令 <a class="header-anchor" href="#基础篇-三斜线指令" aria-hidden="true">#</a></h1><p>三斜线指令是包含单个 XML 标签的单行注释。 注释的内容会做为编译器指令使用。</p><p>三斜线指令仅可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。</p><p><code>/// &lt;reference path=&quot;...&quot; /&gt;</code> 指令是三斜线指令中最常见的一种。 它用于声明文件间的 依赖。</p><p>三斜线引用告诉编译器在编译过程中要引入的额外的文件。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">path</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">a.ts</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Shape</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">square</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Shape</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cricle</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Shape</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">square</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>我们在执行一下打包命令 <code>tsc ./src/b.ts</code> 会生成 <code>a.js</code> 和 <code>b.js</code> 两个文件。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/a.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> Shape</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Shape</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pi</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">cricle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">r</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pi</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Shape</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cricle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cricle</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)(Shape </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> (Shape </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ./src/b.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">path</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">a.ts</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> Shape</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Shape</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">square</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Shape</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">square</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">square</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)(Shape </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> (Shape </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Shape</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cricle</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Shape</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">square</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>命名空间在编译之后其实就是一个闭包。</p><p>为了实现全局引用效果，我们用 <code>script</code> 标签引入两个文件。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Shape</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cricle</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 3.141592653589793</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Shape</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">square</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"></span></code></pre></div><p>为了调用方便，我们可以为方法设置别名。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 别名</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> cricle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Shape</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cricle</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">cricle</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 12.566370614359172</span></span>
<span class="line"></span></code></pre></div><p>注意这里的 <code>import</code> 关键字并不是 <code>es6</code> 中的 <code>import</code>。</p>`,14),e=[o];function t(c,r,y,F,D,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
