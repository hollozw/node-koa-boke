async function upoadFile(ctx, next) {
  console.log('-----------------------------')
  const file = ctx.request.body
  console.log(file)
  ctx.body = "上传成功";
  await next();
}

module.exports = { upoadFile };
