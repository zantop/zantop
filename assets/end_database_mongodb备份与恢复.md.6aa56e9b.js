import{_ as s,c as a,o as n,a as o}from"./app.c4aa1f4f.js";const A=JSON.parse('{"title":"mongodb 备份与恢复","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、备份","slug":"_1、备份","link":"#_1、备份","children":[]},{"level":2,"title":"2、恢复","slug":"_2、恢复","link":"#_2、恢复","children":[]}],"relativePath":"end/database/mongodb备份与恢复.md","lastUpdated":1673364519000}'),l={name:"end/database/mongodb备份与恢复.md"},p=o(`<h1 id="mongodb-备份与恢复" tabindex="-1">mongodb 备份与恢复 <a class="header-anchor" href="#mongodb-备份与恢复" aria-hidden="true">#</a></h1><h2 id="_1、备份" tabindex="-1">1、备份 <a class="header-anchor" href="#_1、备份" aria-hidden="true">#</a></h2><p>使用 <code>mongodump</code> 命令备份数据</p><p>mongodump 常用参数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">db：指定导出的数据库</span></span>
<span class="line"><span style="color:#A6ACCD;">collection：指定导出的集合</span></span>
<span class="line"><span style="color:#A6ACCD;">excludeCollection：指定不导出的集合</span></span>
<span class="line"><span style="color:#A6ACCD;">host ：远程ip</span></span>
<span class="line"><span style="color:#A6ACCD;">username：开启身份验证后，用户的登录名</span></span>
<span class="line"><span style="color:#A6ACCD;">password：用户的密码</span></span>
<span class="line"><span style="color:#A6ACCD;">out（指定输出目录）：如果不使用这个参数，mongodump将输出文件保存在当前工作目录中名为dump的目录中</span></span>
<span class="line"><span style="color:#A6ACCD;">archive：导出归档文件，最后只会生成一个文件</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip：压缩归档的数据库文件，文件的后缀名为</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gz</span></span>
<span class="line"></span></code></pre></div><p>备份我们一般使用 mongodump 命令。常用的备份命令格式如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">mongodump </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">h </span><span style="color:#F78C6C;">127.0</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">port </span><span style="color:#F78C6C;">8888</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d dbname  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o home</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mongodb</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">mongodump </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">h 主机：端口 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d 数据库名  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o  备份目录</span></span>
<span class="line"></span></code></pre></div><p>在安装的 mongodb 目录下<code>/usr/local/mongodb/bin</code> 执行</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">mongodump </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">h </span><span style="color:#F78C6C;">127.0</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">27018</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">home</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mongodbbak</span></span>
<span class="line"></span></code></pre></div><p>要加<code>./</code>不然找不到命令,备份到<code>/home/mongodbbak</code>目录下了。</p><h2 id="_2、恢复" tabindex="-1">2、恢复 <a class="header-anchor" href="#_2、恢复" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">h：MongoDB所在服务器IP。</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p：MongoDB所在服务器端口。</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d：需要恢复的数据库实例。</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">u</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 指定登录用户</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 指定登录用户的密码</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  指定要恢复的集合</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">mongorestore </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">h </span><span style="color:#FFCB6B;">主机</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">端口 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d 要恢复的DB名 备份目录下的db子目录</span></span>
<span class="line"><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">mongorestore </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">h </span><span style="color:#F78C6C;">127.0</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">27018</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d training  </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">home</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mongodbbak</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">training</span></span>
<span class="line"></span></code></pre></div><p><a href="https://www.cnblogs.com/mingerlcm/p/10701752.html" target="_blank" rel="noreferrer">MongoDB 备份（mongodump）与恢复（mongorestore）</a></p><p><a href="https://blog.csdn.net/SHU15121856/article/details/81660357" target="_blank" rel="noreferrer">数据备份(mongodump)与恢复(mongorestore)流程</a></p><p><a href="https://blog.51cto.com/xiaorenwutest/2137022" target="_blank" rel="noreferrer">Mongodb 备份与恢复</a></p><p><a href="https://blog.csdn.net/qq_25827845/article/details/54311235" target="_blank" rel="noreferrer">MongoDB 学习（三）索引、备份、恢复和导入导出操作</a></p>`,17),e=[p];function t(c,r,C,D,d,i){return n(),a("div",null,e)}const F=s(l,[["render",t]]);export{A as __pageData,F as default};
