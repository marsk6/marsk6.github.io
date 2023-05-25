## Workflow

blog
提 pr 到 master，自动触发 ci 更新

admin

```shell
# 更新数据库
yarn db:prod
```

```shell
# 启动 keystone admin
yarn keystone:build
yarn keystone:start
```

发布文章

## Doing

- [ ] 调整 lab
- [ ] UI style

## Todo

- [ ] 把 keystone admin 嵌入非 browser 客户端
- [ ] 规范化仓库
- [ ] 从远端 api 获取发布内容，build 时写入 app.db

## Done

- [x] 预览发布的文章
- [x] 添加文章的流程正规一点
- [x] toc 定位改进
- [x] 添加 toc
- [x] 添加 sider
- [x] seo
