const { regiseter } = require("../controller/user.methods");
const {
  userValidator,
  crpyPassword,
} = require("../middleware/user.middleware");

const Router = require("koa-router");
const userRouter = new Router({ prefix: "/user" });

userRouter.post("/login", crpyPassword, regiseter);

module.exports = userRouter;

