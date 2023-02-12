# git缩写命令

当有多个git账号时，比如：

一个github，国际认可的仓库,一个gitee码云，国内仓库，速度快
这两者如果邮箱不同的话，在生成第二个key的时候会覆盖第一个的key，导致一个用不了。

解决办法就是：生成两个（或多个）不同的公私密钥对，用config文件管理它们。

## 步骤

我们假设原来在`~/.ssh`目录下已经生成了一个密钥对：

```js
id_rsa
id_rsa.pub
```

### 1.1 接下来我们生成第二个ssh key：

`ssh-keygen -t rsa -C "yourmail@gmail.com"`
这里不要一路回车，我们自己手动填写保存路径：
```ts
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Gary/.ssh/id_rsa): /c/Users/Gary/.ssh/id_rsa_github
```
<剩下两个直接回车>,这里我们用`id_rsa_github`来区别原有密钥对，避免被覆盖。  
完成之后，我们可以看到`~/.ssh`目录下多了两个文件，变成：  

```ts
id_rsa
id_ras.pub
id_rsa_github
id_rsa_github.pub
known_hosts
```

### 1.2 打开ssh-agent

这里如果你用的github官方的bash，用：`ssh-agent -s`  
如果是其他的，比如msysgit，用：`eval $(ssh-agent -s)`
略过这一步的话，下一步会提示这样的错误：`Could not open a connection to your authentication agent.`

### 1.3 添加私钥
```ts
ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa_github
```
如果提示文件或目录不存在，就使用绝对地址。

### 1.4 创建config文件
在`~/.ssh`目录下创建名为config的文件。

添加一下内容：
```ts
# gitee and github
# 注意：多个Host公用一个公钥时，
# 对应的HostName和Port必须跟在Host后面
    Host gitee.com
    HostName gitee.com
    Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa

# gerrit
    Host gerrit.awaimai.com
    HostName gerrit.awaimai.com
    Port 8000
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_gerrit

# 其他的统一用id_rsa文件登陆，或者密码。
# 注意：这里的第二行后面有个password，就是同时允许密码登陆
# 不然第一次没加公钥，密码也登陆不了，会提示错误：Permission denied (publickey,password).
    Host *
    PreferredAuthentications publickey,password
    IdentityFile ~/.ssh/id_rsa
```

其中，Host和HostName填写git服务器的域名。

IdentityFile指定私钥的路径。

如果在Linux系统下提示错误：`Bad owner or permissions on /home/gary/.ssh/config`

说明config权限过大，chmod命令调整：

```ts
$ chmod 644 ~/.ssh/config
```
然后在github和gitee码云上添加公钥即可，这里不再多说。


示例：`~/.ssh/config`
```ts

Host *
PreferredAuthentications publickey
AddKeysToAgent yes

# gitee
Host gitee.com
HostName gitee.com
IdentityFile ~/.ssh/id_rsa_gitee

# github
Host github.com
Hostname github.com
Port 443
IdentityFile ~/.ssh/id_rsa_github
```
### 1.5 测试
然后用ssh命令分别测试：`ssh -T git@github.com`

## 调试

如果到这里你没有成功的话，别急，教你解决问题的终极办法--debug

比如测试`github：`

```ts
ssh -vT git@github.com
```
`-v` 是输出编译信息，然后根据编译信息自己去解决问题吧。

就我自己来说一般是config里的host那块写错了。

## 关于用户名
如果之前有设置全局用户名和邮箱的话，需要unset一下

```ts
git config --global --unset user.name
git config --global --unset user.email
```
然后在不同的仓库下设置局部的用户名和邮箱

比如在公司的repository下

```ts
git config user.name "yourname" 
git config user.email "youremail"
```
在自己的github的仓库在执行刚刚的命令一遍即可。

这样就可以在不同的仓库，已不同的账号登录。

