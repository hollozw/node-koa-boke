const { Sequelize } = require("sequelize");

const seq = new Sequelize("graduate_information", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

// 检查数据库是否连接
// seq
//   .authenticate()
//   .then(() => {
//     console.log("数据库连接成功");
//   })
//   .catch((err) => {
//     console.log("连接失败", err);
//   });

module.exports = seq