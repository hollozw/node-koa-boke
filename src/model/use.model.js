// 要获取数据的类型
const {DataTypes, Model} = require('sequelize')

const seq = require('../db/seq')

// 通过seq的define方法创建模型(表的模型)
// const User = seq.define('test_User', {
//   // id 会被自动创建管理
//   user_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     comment: '用户名,唯一',
//   },
//   password: {
//     type: DataTypes.CHAR(64),
//     allowNull: false,
//     comment: '密码'
//   },
//   is_admin: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     defaultValue: 0,
//     comment: '是否为管理员,0:不是管理员(默认),1:是管理员'
//   }
// })

const User_information = seq.define('User_name',{
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名,唯一',
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员,0:不是管理员(默认),1:是管理员'
  }
})
/**
 * 根据以上数据模板创建对应数据表,调用user中sync方法
 *  force: 是否覆盖原来已经创建的数据表
 */
// User_information.sync({force:true})

module.exports = User_information