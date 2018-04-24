# haise-cli
一个简易的cli脚手架，为了方便使用，故不重复造轮子，只有两个命令 init 和 ls

## 可选框架：
- react(create-react-app)
- react-native(react-native-cli)
- vue(vue-cli)
- koa2-server

koa2-server模板基础为koa2，node>=7.6.0。
## 安装方法
`npm install -g haise-cli`

## 使用方法
`haise ls`

浏览模板列表

`haise init`

创建起始项目

## 版本特性
### 1.0.0
1.添加了四个模板作为脚手架的支持。

2.不添加复杂命令，方便使用。
### 1.1.0
1.添加server模板，默认跨域，可以反向代理，mock数据，支持tcp和http
### 1.1.2
1.修复一些已知问题
### 1.2.0
1.模板名称由可输入变为选择

2.将server模板细分为express和koa2两种。

3.修复一些已知问题
### 1.3.0
1.精简模板数量，
2.添加react-native构建
## 待添加特性
暂无



