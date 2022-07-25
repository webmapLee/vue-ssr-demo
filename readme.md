# Vue SSR

## 技术栈
webpack5 + vue3 + vue-router + vuex + @vue/server-renderer

## 服务端渲染优缺点

### 服务端渲染
#### 优点
- SEO友好
- 首屏快

#### 缺点
- 开发条件受限
- 无法操作dom，无法使用vue的生命周期
- 配置复杂
- 服务器负载大
- 可见不一定可操作

### 客户端渲染
#### 优点
- 可见即可操作
- 页面切换流畅

#### 缺点
- 不利于seo
- 白屏

## 注意事项
- 声明周期问题
- window dom
- 避免状态单例
- 版本更新问题（版本要对应）

## 开发流程
### 客户端搭建
- vuex
- vue-router
  
### 脚手架搭建

webpack webpack-cli webpack-merge

babel 需要安装@babel/plugin-transform-runtime

- loader
  - vue-loader
  - babel-loader(@babel/core,@babel/preset-env)
  - css-loader
  - css 提取 (mini-css-extract-plugin)
  - ignore-loader //忽略打包某些模块

- plugins
  - html-webpack-plugins
  - webpack-node-externals
- entry
- output
- devServer

### 服务端搭建

#### 需要安装的包
 - koa 
 - koa-static 
 - @koa/router
 - @vue/server-renderer
  
### SSR
- 路由处理
- 请求处理

数据预获取
js加载，发起请求，注水，脱水
