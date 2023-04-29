/**
 * 使用element-ui上传文件时，在ctx.body.request中无法查看文件
 * 可以使用koa-multer插件，注入到路由中
 */
const multer = require("koa-multer");
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/storage/mdData");
  },
  filename: function (ctx, file, cb) {
    const filenameArr = file.originalname.split(".");
    cb(null, Date.now() + "." + filenameArr.pop());
  },
});

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

module.exports = upload;
