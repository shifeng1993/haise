/*
 * 名称：koa2mvc服务；
 * 作用：
 * 1.使用mock假数据做api服务，
 * 2.使用数据库做api服务,orm模块为waterline
 * 3.做真实api的代理转发。
 * 技术栈：koa2，es7，waterline
 * 作者：haise
 */

/* =================以下是引入模块=======================*/
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const onerror = require('koa-onerror');
const static = require('koa-static');
const app = new Koa();
var server = require('http').Server(app.callback());
var io = require('socket.io')(server);
const waterline = require('./server/config/waterline')

// 引入路由
const index = require('./server/routes/index');

// 开启服务渲染首页面
app.use(static(__dirname + '/build'));

// 错误处理
onerror(app);

// 定义本地服务端口
const host = 'http://127.0.0.1:';
const port = 3333; //设置本地服务端口

// 中间件
app.use(bodyparser());
app.use(json());
// waterline中间件，不用则删掉
app.use(async(ctx, next) => {
  ctx.request.models = app.models;
  await next();
});

//资源加载记录log
app.use(async(ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

/*以下监听二选一*/
/* 1.waterline参数（第一项为wlconfig配置，第二项为回调函数，回调函数参数第一项为是否出错，第二项为models）*/
waterline.orm.initialize(waterline.wlconfig, function (err, models) {
  if (err) {
    console.log('waterline initialize failed, err:', err);
    return
  }
  app.models = models.collections;
  server.listen(port, () => console.log("服务已经启动，APIhost：" + host + port));
})


/*2.不与数据库连接，直接监听*/
// server.listen(port, () => console.log("服务已经启动，APIhost：" + host + port));

io.on('connection', function (socket) {
  socket.emit('连接成功');
  socket.on('onindex', function (data) {
    console.log(data);
  });
  var index = 1;
  function a(){
    socket.emit('news',index++);
  }
  setInterval(a,3000)
});

// console.log(io)
/*引入路由文件*/
app.use(index.routes(), index.allowedMethods());
