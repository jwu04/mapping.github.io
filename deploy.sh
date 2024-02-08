#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add .
git commit -m 'deploy'
git push -f git@github.com:jwu04/mapping.github.io.git

cd -