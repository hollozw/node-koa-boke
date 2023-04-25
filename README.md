- server 层操作数据库
  - 安装对象的插件 npm install mysql2 sequelize
- router 层
  - 将不同的 url 转发给控制器的不同方法
- model 层
  - 操控数据库
- middleware 层
  - 用于解析格式

### 数据库内容

- user_names: 用户信息表
- boke_list: 用户博客标签表
  - 博客标题
  - 博客的类别
  - 写博客的作者
  - 博客与博客内容表的相关cod值
- boke_list-detail: 博客内容表
