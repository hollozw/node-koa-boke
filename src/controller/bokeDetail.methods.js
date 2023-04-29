async function upoadFile(ctx, next) {
  ctx.body = { code: 0, message: "success", data: "添加成功" };
  await next();
}

module.exports = { upoadFile };
