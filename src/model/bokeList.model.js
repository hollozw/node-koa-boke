const { DataTypes } = require("sequelize");
const seq = require("../db/seq");
const Boke_list = seq.define("boke_list", {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名,唯一",
  },
  boke_type: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "博客类型",
  },
  code_user: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: "用户code值",
  },
  code_bokeNav: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: "博客详情code值",
  },
});
// Boke_list.sync({force:true})
module.exports = Boke_list;
