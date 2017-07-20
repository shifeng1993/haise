# react-koa2 V1.1.0
如题，一个单页spa的mvc框架，后端使用koa2作为技术栈，前端使用react作为技术栈，react打包编译后，部署在koa2的静态资源目录下，react基于create-react-app构建。
### 后端技术栈：
- shell
- nodejs
- koa2
- pm2
- es6/7
- mockjs
- koa2-pixie-proxy
- waterline
- socket.io
### 前端技术栈：
- react
- redux
- sass
- webpack
- react-router
- react-router-redux
- axios
- socket.io

## 使用方法

### 克隆到本地
`git clone https://github.com/shifeng1993/react-koa2.git 项目名称`

### 打开项目
`cd 项目名称`

### 安装后端依赖
`npm install`

### 进入前端源文件
`cd webapp`

### 运行 开发/编译 环境

`npm start`/`npm run build`

### 编译完成回到后端文件夹

`cd ..`

### 启动服务
三选一
`supervisor app` / `node app` / `./shell.sh`

## 项目结构

    ├── server                          // 后端逻辑
    │   ├── config                      // waterline配置项
    │   ├── controllers                 // 控制器
    │   ├── models                      // 模型
    │   └── routes                      // 路由
    ├── webapp                          // 前端源码
    │   ├── config                      // webpack配置
    │   ├── public                      // 公共资源
    │   ├── scripts                     // 开发/编译/测试 指令
    │   ├── src                         // react源码
    │   │   ├── components              // 组件
    │   │   ├── containers              // 页面容器
    │   │   ├── routes                  // 路由
    │   │   ├── stores                  // redux
    │   │   ├── styles                  // 样式
    │   │   └── index.js                // 入口 主文件
    │   ├── .gitignore                  // git 忽略项
    │   ├── package.json                // package.json
    │   └── yarn.lock                   // yarn.lock
    ├── .gitignore                      // git 忽略项
    ├── package.json                    // package.json
    ├── app.js.json                     // package.json
    └── shell.sh                        // 守护pm2进程

注意：
shell守护进程脚本用 `./shell.sh`启动。如果遇到权限错误，请先输入`chmod 777 shell.sh`改写权限后，再行启动。

shell脚本依赖pm2 请先进行全局安装后再启动 `npm install -g pm2`

## 版本特性
### 1.0.0
1.使用了koa2当做项目底层，node版本要求为大于7.6.0

2.使用了es6/7新特性来做并发，性能更高。

3.使用了shell脚本用 pm2 来守护进程，更稳定。

4.使用了mockjs模拟假数据。

5.添加了中间层服务代理支持，在`routes/index.js`内部即可轻松添加，项目不需要则删除。

6.添加对数据库的支持，orm模块为`waterline`。

### 1.1.0
1.添加了websocket库socket.io
## 待添加特性
1.对服务端渲染的支持



