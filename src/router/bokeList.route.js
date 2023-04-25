const Router = require("koa-router");
const { getKeyWord } = require("../middleware/bokeList.middleware");
const bokeList = new Router({ prefix: "/boke" });
const { getBokeList } = require("../controller/bokeList.methods");

bokeList.post("/List", getKeyWord, getBokeList);

module.exports = bokeList;
