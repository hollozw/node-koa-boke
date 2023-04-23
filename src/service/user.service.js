const User_information = require("../model/use.model");

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
    return res[0].dataValues
  }
}

module.exports = new UserService();
