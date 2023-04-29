const Router = require("koa-router");
const upload = require("../storage/multer-koa");
const { upoadFile } = require("../controller/bokeDetail.methods");
const bokeDetail = new Router({ prefix: "/boke" });
bokeDetail.post("/uploadfile", upload.single("file"), upoadFile);

module.exports = bokeDetail;
