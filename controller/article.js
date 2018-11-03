const {Router} = require('express')
const router = Router()
const articleModel = require('../database/model/article')

router.post('/article',async (req,res,next) => {
  try {
    if (req.session.user) {
      const { content, contentText, title, category } = req.body

      const data = await articleModel.create({
          content,
          contentText,
          title,
          category,
          author:req.session.user._id
        })
      
        res.json({
          code:200,
          data,
          msg:'笔记发布成功'
        })
    } else {
      res.json({
        code: 403,
        msg: '未登录状态不能发布笔记'
      })
    }
  } catch (err) {
    res.json({
      code:400,
      msg:'缺少必要参数'
    })
  }
})

//获取文章接口
router.get('/article',async (req,res) => {
  let {page=1,size=5} = req.query
  page = parseInt(page)
  size = parseInt(size)
  let total = await articleModel.count()

  articleModel.find()
    .skip((page-1)*size)
    .limit(size)
    .sort({_id:-1})
    .populate({
      path:'author',
      select: '-password -email'
    })
    .populate({
      path:'category'
    })
    .then(data => {
      res.json({
        code:200,
        msg: '请求成功',
        data,
        total
      })
    })
  })

//根据文章id获取文章
router.get('/article/:id',async (req,res) => {
  try {
    const {id} = req.params
    const data = await articleModel.findById({ _id: id })
      .populate({
        path:'author',
        select:'-password -email'
      })
      .populate({
        path:'category'
      })
    await articleModel.updateOne({ _id: id }, {$inc: {readnums: 1}})
      res.json({
        code:200,
        msg: '单条笔记获取成功',
        data
      })
  } catch (error) {
    next(error)
  }
})

router.get('/article/category/:typeId',async (req,res,next) => {
  try {
    const {typeId} = req.params
    const data = await articleModel.find({category: typeId})
      .populate({
        path: 'author',
        select: '-password -email'
      })
      .populate({
        path: 'category'
      })
    res.json({
      code: 200,
      msg: '分类获取笔记成功',
      data
    })
  } catch (error) {
    next(error)
  }
})

router.patch('/article/:_id',async (req,res,next) => {
  try {
    const { content, contentText, title, category } = req.body
    const {_id} = req.params
    const data = await articleModel.findById({_id})
    const updateData = await data.updateOne({
      $set: {
        content,
        contentText, 
        title, 
        category
      }
    })
    res.json({
      code: 200,
      msg: '笔记修改成功',
      data: updateData
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/article/:_id',async (req,res,next) => {
  try {
    const {_id} = req.params
    const data = await articleModel.deleteOne({_id})
    res.json({
      code: 200,
      msg: '删除笔记成功',
      data
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router