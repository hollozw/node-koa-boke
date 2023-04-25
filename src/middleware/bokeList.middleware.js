const getKeyWord = async (ctx, next) => {
  const { typeNumber, keyWord, people } = ctx.request.body;
  if (typeNumber || keyWord || people) {
    ctx.body = { typeNumber, keyWord, people };
    return
  }
  await next();
};

module.exports = { getKeyWord };
