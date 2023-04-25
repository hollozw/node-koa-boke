const Koa = require("koa");
const app = new Koa();
const { koaBody } = require("koa-body");
const userRouter = require("./router/userLogin.route");
const userLand = require("./router/userLand.route");
const bokeList = require("./router/bokeList.route");
const bokeDetail = require("./router/bokeDetail.route");
app.use(koaBody());
app.use(userRouter.routes());
app.use(userLand.routes());
app.use(bokeList.routes());
app.use(bokeDetail.routes());


/**
 * 登录路由
 */

/**
 * 注册路由
 */

app.listen(8000);
