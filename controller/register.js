const {Router} = require('express');
const router = Router();
const userModel = require('../database/model/user');
const isEmail = require('validator/lib/isEmail');

router.post('/register',async (req,res,next) => {
  try {
    const { username, email, password,desc } = req.body;
    console.log(username, email, password);

    const avatarNumber = Math.ceil(Math.random()*8)
    const avatar = `http://pbl.yaojunrong.com/avatar${avatarNumber}.jpg`

    if (password && password.length>=5) {
      const data = await userModel.create({ username, email, password,avatar,desc })
      res.json({
        code: 200,
        data,
        msg: '注册成功'
      })
    } else {
      throw '密码长度不符合要求'
    }
  } catch (err) {
    if (err.code == 11000) {
      res.json({
        code: 400,
        msg: '该邮箱已被注册',
      })
    } 
    res.json({
      code:400,
      msg:'缺少必要参数',
      err
    })
  }
})

module.exports = router;