const {Router} = require('express')
const router = Router()
const collectionModel = require('../database/model/collection')
const mongoose = require('mongoose')

router.post('/collection',async (req,res,next) => {
  try {
    const {user,article} = req.body
    const data = await collectionModel.create({
      user,
      article
    })
    res.json({
      code: 200,
      msg: '添加收藏成功',
      data
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/collection',async (req,res,next) => {
  try {
    const { user, article } = req.body
    const data = await collectionModel.deleteMany({
      user,
      article
    })
    if (data.n) {
      res.json({
        code: 200,
        msg: '取消收藏',
        data
      })
    }
  } catch (error) {
    next(error)
  }
})

router.get('/collection',async (req,res,next) => {
  let {page = 1,page_size = 10} = req.query
  try {
    const { user } = req.body
    const data = await collectionModel.find({user})
      .skip((page - 1) * page_size)
      .limit(page-size)
      .sort({_id: -1})
      .populate({
        path: 'article'
      })
  } catch (error) {
    res.json({
      code: 401,
      msg: '登录状态失效，请重新登录'
    })
  }
})

module.exports = router