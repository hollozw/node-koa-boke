const User_information = require("../model/use.model");
const jwt = require("jsonwebtoken");

class UserService {
  // 注册接口
  async createUser(user_name, password) {
    // 插入数据,create返回promise对象
    const res = await User_information.create({
      user_name,
      password,
    });
    return res.dataValues;
  }

  // 登录接口
  async findUser(user_name, password) {
    const res = await User_information.findAll({
      where: {
        user_name,
      },
    });
    return res[0].dataValues;
  }
  /**
   * 自动生成token方法
   */
  JwtUser(id, user_name) {
    const rules = { id, userName: user_name };
    var token = jwt.sign(
      {
        data: rules,
      },
      "secret"
    );
    return token;
  }
}

module.exports = new UserService();
