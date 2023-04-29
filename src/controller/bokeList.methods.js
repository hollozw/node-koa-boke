class bokeListController {
  // 成功查询博客列表
  async getBokeList(ctx, next) {
    // const { typeNumber, keyWord, people } = ctx.request.body;
    ctx.body = {
      code: 0,
      message: ["success"],
      data: "显示所有表格数据",
    };
  }
  // 成功添加博客列表
  async addBokeList(ctx,next) {
    console.log(ctx.request.body)
    ctx.body = {
      code: 0,
      message: 'success',
      data: '添加成功'  
    }
  }
}

module.exports = new bokeListController();
