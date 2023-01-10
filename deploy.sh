#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf docs/.vitepress/dist/

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
echo 'blog.zantop.cn' > CNAME

git init
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ycwdss/zantop.git master:gh-pages


cd ../../../
rm -rf docs/.vitepress/dist/
git init
git add .
git commit -m '备份'
# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f git@github.com:ycwdss/zantop.git master