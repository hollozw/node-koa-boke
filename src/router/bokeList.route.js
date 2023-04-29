const Router = require("koa-router");
const { getKeyWord } = require("../middleware/bokeList.middleware");
const bokeList = new Router({ prefix: "/boke" });
const { getBokeList,addBokeList } = require("../controller/bokeList.methods");

bokeList.post("/List", getKeyWord, getBokeList);

bokeList.post('/addList', addBokeList)
module.exports = bokeList;
