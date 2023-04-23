const bcrypt = require('bcryptjs')
const {userDoesNotExist} = require('../constant/err.type')
const { findUser } = require('../service/user.service')

const userValidator = async (ctx, next)=>{
  const {user_name, password} = ctx.request.body
  if(!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.status = 400
    ctx.body = {
      code: '10001',
      message: '用户名或密码为空',
      result: '',
    }
    return
  }
}

// 密码加密方法
const crpyPassword = async (ctx, next)=>{
  const {password} = ctx.request.body
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password,salt)
  ctx.request.body.password = hash
  await next()
}

// 登录验证
const verifyLogin = async (ctx, next)=>{
  try{
    const {username,password: keyPassword} = ctx.request.body
    const {user_name, password} = await findUser(username)
    if(!bcrypt.compareSync(keyPassword,password)) {
      ctx.body = userDoesNotExist
      return
    } 
  }catch(err) {
    ctx.body = userDoesNotExist
    return
  }
  await next()
}

module.exports = {userValidator, crpyPassword, verifyLogin}