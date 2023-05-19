import{_ as s,c as n,o as a,a as l}from"./app.c4aa1f4f.js";const i=JSON.parse('{"title":"ngnix 配置记录","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、ngnix.conf","slug":"_1、ngnix-conf","link":"#_1、ngnix-conf","children":[]},{"level":2,"title":"2、配置 https","slug":"_2、配置-https","link":"#_2、配置-https","children":[]},{"level":2,"title":"3、问题","slug":"_3、问题","link":"#_3、问题","children":[]}],"relativePath":"end/os/ngnix配置记录.md","lastUpdated":1673417607000}'),p={name:"end/os/ngnix配置记录.md"},o=l(`<h1 id="ngnix-配置记录" tabindex="-1">ngnix 配置记录 <a class="header-anchor" href="#ngnix-配置记录" aria-hidden="true">#</a></h1><h2 id="_1、ngnix-conf" tabindex="-1">1、ngnix.conf <a class="header-anchor" href="#_1、ngnix-conf" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">## 工作模式与连接数上限</span></span>
<span class="line"><span style="color:#A6ACCD;">events </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    ## </span><span style="color:#A6ACCD;">单个进程的最大连接数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">worker_connections</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">## 设置http 服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//http强制跳转https</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">server</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">listen</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">server_name</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wz</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">zantop</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">rewrite</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">^</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">.*</span><span style="color:#F07178;">) </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//$server_name$1 permanent;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mime</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">default_type</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">application</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">octet</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">conf</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#676E95;font-style:italic;">/*.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_2、配置-https" tabindex="-1">2、配置 https <a class="header-anchor" href="#_2、配置-https" aria-hidden="true">#</a></h2><p>conf.d 文件夹下 eggjs.conf</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    #</span><span style="color:#A6ACCD;">比起默认的80</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">使用了443</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">默认</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">是ssl方式</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">多出default之后的ssl</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">listen</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">443</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    #</span><span style="color:#A6ACCD;">开启如果把ssl</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">on</span><span style="color:#F07178;">；</span><span style="color:#A6ACCD;">这行去掉</span><span style="color:#F07178;">，</span><span style="color:#A6ACCD;">ssl写在443端口后面</span><span style="color:#F07178;">。</span><span style="color:#A6ACCD;">这样http和https的链接都可以用</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ssl</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">server_name</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wz</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">zantop</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    #</span><span style="color:#A6ACCD;">配置证书文件路径</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ssl_certificate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ssl</span><span style="color:#89DDFF;">/</span><span style="color:#F07178;">1</span><span style="color:#A6ACCD;">_wz</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">zantop</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cn_bundle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">crt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ssl_certificate_key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ssl</span><span style="color:#89DDFF;">/</span><span style="color:#F07178;">2</span><span style="color:#A6ACCD;">_wz</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">zantop</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cn</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    ## </span><span style="color:#A6ACCD;">配置前端文件</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">home</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">reactTraining</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">dist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">try_files</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$uri</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">     ## </span><span style="color:#A6ACCD;">配置后端接口</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">api</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Real</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">IP</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Forwarded</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">For</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Host</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$http_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Nginx</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Proxy</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Connection</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cookie</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$http_cookie</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_pass</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//172.17.0.11:7001;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">     ## </span><span style="color:#A6ACCD;">配置后端接口</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">lottery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Real</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">IP</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Forwarded</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">For</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Host</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$http_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Nginx</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Proxy</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Connection</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cookie</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$http_cookie</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">proxy_pass</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//172.17.0.11:7002;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_3、问题" tabindex="-1">3、问题 <a class="header-anchor" href="#_3、问题" aria-hidden="true">#</a></h2><p><strong>1. 在 centos 下启动 nginx 出现 Failed to start nginx.service:unit not found</strong></p><p>错误的原因就是没有添加 nginx 服务，所以启动失败。</p><ul><li>在/root/etc/init.d/目录下新建文件，文件名为 nginx</li><li>或者用命令在根目录下执行:# vim /etc/init.d/nginx (注意 vim 旁边有一个空格)</li></ul><p>插入一下代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/sh</span></span>
<span class="line"><span style="color:#A6ACCD;"># nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;"> script starts and stops the nginx daemin</span></span>
<span class="line"><span style="color:#A6ACCD;">#</span></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#FFCB6B;">chkconfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">85</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  Nginx is an </span><span style="color:#82AAFF;">HTTP</span><span style="color:#A6ACCD;">(S) server</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HTTP</span><span style="color:#A6ACCD;">(S) reverse \\</span></span>
<span class="line"><span style="color:#A6ACCD;">#               proxy and IMAP</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">POP3 proxy server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#FFCB6B;">processname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#FFCB6B;">config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">conf</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">conf</span></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#FFCB6B;">pidfile</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">logs</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># Source </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">library</span><span style="color:#A6ACCD;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">. /</span><span style="color:#82AAFF;">etc</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">rc</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">d</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">d</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">functions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#82AAFF;">Source</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">networking</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">configuration</span><span style="color:#A6ACCD;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">. /</span><span style="color:#82AAFF;">etc</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">sysconfig</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">network</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#82AAFF;">Check</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">that</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">networking</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">up</span><span style="color:#A6ACCD;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[ &quot;</span><span style="color:#82AAFF;">$NETWORKING</span><span style="color:#A6ACCD;">&quot; = &quot;</span><span style="color:#82AAFF;">no</span><span style="color:#A6ACCD;">&quot; ] &amp;&amp; </span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">nginx</span><span style="color:#A6ACCD;">=&quot;/</span><span style="color:#82AAFF;">usr</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">local</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">nginx</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">sbin</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">nginx</span><span style="color:#A6ACCD;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">prog</span><span style="color:#A6ACCD;">=</span><span style="color:#82AAFF;">$</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">basename</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">$nginx</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">NGINX_CONF_FILE</span><span style="color:#A6ACCD;">=&quot;/</span><span style="color:#82AAFF;">usr</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">local</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">nginx</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">conf</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">nginx</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">conf</span><span style="color:#A6ACCD;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">lockfile</span><span style="color:#A6ACCD;">=/</span><span style="color:#82AAFF;">var</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">lock</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">subsys</span><span style="color:#A6ACCD;">/</span><span style="color:#82AAFF;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    [ </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$nginx</span><span style="color:#F07178;"> ] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">exit</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    [ </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$NGINX_CONF_FILE</span><span style="color:#F07178;"> ] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">exit</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">echo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Starting $prog: </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">daemon</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$nginx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">c</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$NGINX_CONF_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">retval</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$</span><span style="color:#89DDFF;">?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">echo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    [ </span><span style="color:#A6ACCD;">$retval</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">eq</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> ] </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">touch</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$retval</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">stop</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    echo -n $</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">Stopping $prog: </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    killproc $prog -QUIT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    retval=$?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    echo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    [ $retval -eq 0 ] &amp;&amp; rm -f $lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    return $retval</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">restart() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    configtest || return $?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">reload() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    configtest || return $?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    echo -n $</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">Reloading $prog: </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    killproc $nginx -HUP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    RETVAL=$?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    echo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">force_reload() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    restart</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">configtest() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  $nginx -t -c $NGINX_CONF_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">rh_status() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    status $prog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">rh_status_q() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    rh_status &gt;/dev/null 2&gt;&amp;1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">case </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">$1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> in</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    start)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        rh_status_q &amp;&amp; exit 0</span></span>
<span class="line"><span style="color:#F07178;">        $1</span></span>
<span class="line"><span style="color:#F07178;">        ;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    stop)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        rh_status_q || exit 0</span></span>
<span class="line"><span style="color:#F07178;">        $1</span></span>
<span class="line"><span style="color:#F07178;">        ;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    restart|configtest)</span></span>
<span class="line"><span style="color:#F07178;">        $1</span></span>
<span class="line"><span style="color:#F07178;">        ;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    reload)</span></span>
<span class="line"><span style="color:#F07178;">        rh_status_q || exit 7</span></span>
<span class="line"><span style="color:#F07178;">        $1</span></span>
<span class="line"><span style="color:#F07178;">        ;;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    force-reload)</span></span>
<span class="line"><span style="color:#F07178;">        force_reload</span></span>
<span class="line"><span style="color:#F07178;">        ;;</span></span>
<span class="line"><span style="color:#F07178;">    status)</span></span>
<span class="line"><span style="color:#F07178;">        rh_status</span></span>
<span class="line"><span style="color:#F07178;">        ;;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    condrestart|try-restart)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        rh_status_q || exit 0</span></span>
<span class="line"><span style="color:#F07178;">            ;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    *)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        echo $</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">Usage: $0 {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">        exit 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">esac</span></span>
<span class="line"></span></code></pre></div><p>执行命令</p><ol><li><p><code>chmod 755 /etc/init.d/nginx</code></p></li><li><p><code>chkconfig --add nginx</code></p></li></ol><p>开启 ngnix</p><p><code>service nginx start</code></p>`,16),e=[o];function c(t,r,y,F,A,D){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
