const { Landing } = require("../controller/user.methods");
const { verifyLogin } = require("../middleware/user.middleware");
const Router = require("koa-router");
const userLand = new Router({ prefix: "/user" });

userLand.post("/land", verifyLogin, Landing);

module.exports = userLand;
