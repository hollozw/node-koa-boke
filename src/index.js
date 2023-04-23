const Koa = require('koa');
const app = new Koa()
const { koaBody } = require('koa-body')
const userRouter = require('./router/userLogin.route')
const userLand = require('./router/userLand.route')
app.use(koaBody())
app.use(userRouter.routes())
app.use(userLand.routes())

/**
 * 登录路由
 */

/**
 * 注册路由
 */

app.listen(8000);
