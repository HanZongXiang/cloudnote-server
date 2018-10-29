const { Router } = require('express');
const router = Router();
const userModel = require('../database/model/user');

router.get('/user', async (req, res, next) => {
  try {
    let { page = 1, page_size = 10 } = req.query
    page = parseInt(page)
    page_size = parseInt(page_size)
    const data = await userModel.find()
      .skip((page - 1) * page_size)
      .limit(page_size)
      .select('-password')

      res.json({
        code: 200,
        data
      })
  } catch (error) {
    next(error)
  }
})

router.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await userModel.findById(id)

    res.json({
      code: 200,
      msg: '管理员信息获取成功',
      data
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/user/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params
    const data = await userModel.deleteOne({ _id })
    res.json({
      code: 200,
      msg: '删除管理员成功',
      data
    })
  } catch (error) {
    next(error)
  }
})

router.patch('/user/:id', async (req, res, next) => {
  try {
    let {
      username,
      avatar,
      password,
      desc,
      email
    } = req.body
    const { id } = req.params
    const data = await userModel.findById(id)
    const updateData = await data.updateOne({
      $set: {
        username,
        avatar,
        password,
        desc,
        email
      }
    })
    res.json({
      code: 200,
      msg: '管理员信息修改成功',
      data: updateData
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router