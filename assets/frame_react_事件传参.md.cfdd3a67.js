import{_ as s,c as a,o as n,a as l}from"./app.c4aa1f4f.js";const A=JSON.parse('{"title":"react 事件传参","description":"","frontmatter":{},"headers":[{"level":2,"title":"bind","slug":"bind","link":"#bind","children":[]},{"level":2,"title":"直接 this","slug":"直接-this","link":"#直接-this","children":[]},{"level":2,"title":"箭头","slug":"箭头","link":"#箭头","children":[]}],"relativePath":"frame/react/事件传参.md","lastUpdated":1673364519000}'),o={name:"frame/react/事件传参.md"},p=l(`<h1 id="react-事件传参" tabindex="-1">react 事件传参 <a class="header-anchor" href="#react-事件传参" aria-hidden="true">#</a></h1><h2 id="bind" tabindex="-1">bind <a class="header-anchor" href="#bind" aria-hidden="true">#</a></h2><p>用 bind 绑定，调用是作为第二个参数传递，不用显示传递事件对象，定义方法时，事件对象作为最后一个参数传入</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#82AAFF;">handleClick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span></code></pre></div><h2 id="直接-this" tabindex="-1">直接 this <a class="header-anchor" href="#直接-this" aria-hidden="true">#</a></h2><p>返回一个函数，事件对象在返回的函数中</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#82AAFF;">handleClick</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#82AAFF;">handleClick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="箭头" tabindex="-1">箭头 <a class="header-anchor" href="#箭头" aria-hidden="true">#</a></h2><p>事件对象作为第二个参数传递</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">handleClick</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> e)</span><span style="color:#89DDFF;">}&gt;&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#82AAFF;">handleClick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span></code></pre></div>`,10),e=[p];function t(c,r,D,F,y,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
