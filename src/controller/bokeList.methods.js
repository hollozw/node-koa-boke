class bokeListController {
  async getBokeList(ctx, next) {
    // const { typeNumber, keyWord, people } = ctx.request.body;
    ctx.body = {
      code: 0,
      message: ["success"],
      data: "显示所有表格数据",
    };
  }
}

module.exports = new bokeListController();
