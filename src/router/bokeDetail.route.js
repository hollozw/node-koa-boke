const Router = require("koa-router");
const { upoadFile } = require("../controller/bokeDetail.methods");
const bokeDetail = new Router({ prefix: "/boke" });
bokeDetail.post("/uploadfile", upoadFile);

module.exports = bokeDetail;
