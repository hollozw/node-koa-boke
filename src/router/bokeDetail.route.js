const Router = require("koa-router");
const { upoadFile } = require("../model/bokeDetail.model");
const bokeDetail = new Router({ prefix: "/boke" });
bokeDetail.post("/uploadfile", upoadFile);

module.exports = bokeDetail;
