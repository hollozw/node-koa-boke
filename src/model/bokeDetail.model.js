async function upoadFile(ctx, next) {
  console.log(ctx.request.files);
  ctx.body = "上传成功";
  await next();
}

module.exports = { upoadFile };
