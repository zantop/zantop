import{_ as s,c as a,o as n,a as l}from"./app.c4aa1f4f.js";const F=JSON.parse('{"title":"Mac 与 vim 日常命令","description":"","frontmatter":{},"headers":[{"level":2,"title":"Mac 日常命令","slug":"mac-日常命令","link":"#mac-日常命令","children":[]},{"level":2,"title":"vim 命令","slug":"vim-命令","link":"#vim-命令","children":[]}],"relativePath":"end/os/Mac与vim日常命令.md","lastUpdated":1676193515000}'),p={name:"end/os/Mac与vim日常命令.md"},o=l(`<h1 id="mac-与-vim-日常命令" tabindex="-1">Mac 与 vim 日常命令 <a class="header-anchor" href="#mac-与-vim-日常命令" aria-hidden="true">#</a></h1><h2 id="mac-日常命令" tabindex="-1">Mac 日常命令 <a class="header-anchor" href="#mac-日常命令" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">复制 cmd </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> D</span></span>
<span class="line"><span style="color:#A6ACCD;">剪切文字  cmd </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> X</span></span>
<span class="line"><span style="color:#A6ACCD;">剪切文件 先 cmd </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> C  到目标文件 cmd </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> option </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> V</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">全屏截图 cmd</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">shift</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">自定义截图 cmd</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">shift</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">截图或录屏 cmd</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">shift</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">窗口截图 cmd</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">shift</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">空格</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ls          查看目录下的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">ls </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l       查看目录下的文件</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">以列表形式</span></span>
<span class="line"><span style="color:#A6ACCD;">ls </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">la      查看目录下的文件</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">隐藏的文件也可以查</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mv a b      同目录下a 文件重命名为 b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">跨目录也可以移动 mv </span><span style="color:#89DDFF;">~/</span><span style="color:#A6ACCD;">Downloads</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">love</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">txt  </span><span style="color:#89DDFF;">~</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">Documents</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cp a b      复制文件跟mv一样</span></span>
<span class="line"><span style="color:#A6ACCD;">cp </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a a b   复制保留文件所有的权限属性之类的，可以加上参数 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a</span></span>
<span class="line"><span style="color:#A6ACCD;">cp </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">r a b   复制的不是文件，而是文件夹，则要加上一个递归的参数 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">r</span></span>
<span class="line"><span style="color:#A6ACCD;">cp </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ra a b  复制文件夹，并且要保留所有的权限属性，加上参数 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ra</span></span>
<span class="line"><span style="color:#A6ACCD;">cp </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">rav a b 复制的文件夹里面有很多内容，你想看到实时进度的话，可以用 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v 参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rm a        删除某个文件，一般 linux 会给你提示，你需要输入 yes 同意，才能删除。但是 mac 不会给提示，直接就删除掉了。</span></span>
<span class="line"><span style="color:#A6ACCD;">rm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">f a     不想看到这个提示，而是希望直接就删除掉，可以加上一个参数 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">f</span></span>
<span class="line"><span style="color:#A6ACCD;">rm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">rf a    删除目录必须进行递归操作，所以需要加上参数 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">touch a     创建文件</span></span>
<span class="line"><span style="color:#A6ACCD;">touch a b c 创建多个文件 abc</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir a     创建文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir a b c 创建多个文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p res</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">scss 新建多个层级的目录，这就需要加上参数 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p 了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">less index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html 查看文本文件</span></span>
<span class="line"><span style="color:#A6ACCD;">pwd         pwd 看看自己在哪个目录下</span></span>
<span class="line"><span style="color:#A6ACCD;">cat a       查看文件的内容</span></span>
<span class="line"></span></code></pre></div><p><a href="https://www.waerfa.com/" target="_blank" rel="noreferrer">玩法儿</a></p><h2 id="vim-命令" tabindex="-1">vim 命令 <a class="header-anchor" href="#vim-命令" aria-hidden="true">#</a></h2><p><a href="https://www.cnblogs.com/yangjig/p/6014198.html" target="_blank" rel="noreferrer">vim 常用命令总结</a></p>`,6),e=[o];function c(t,r,D,C,A,y){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
