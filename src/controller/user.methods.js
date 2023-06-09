const { createUser, findUser, JwtUser } = require("../service/user.service");

class userController {
  /**
   * 用户注册路由
   */
  async regiseter(ctx, next) {
    // 解析数据
    const { username, password } = ctx.request.body;
    // 操作数据库
    const res = await createUser(username, password);
    // 返回结果
    ctx.body = {
      code: 0,
      message: "success",
      result: {
        id: res.id,
        user_name: res.user_name,
      },
    };
  }

  /**
   * 用户登录路由
   */
  async Landing(ctx, next) {
    const { username } = ctx.request.body;
    const { id } = await findUser(username);
    const token = JwtUser(id, username);
    console.log('触发了,该函数')
    ctx.body = {
      code: 0,
      message: "success",
      result: {
        id,
        userName: username,
      },
      token,
    };
  }
}
module.exports = new userController();
