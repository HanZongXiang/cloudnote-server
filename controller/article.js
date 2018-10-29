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
router.get('/article',(req,res) => {
  let {pn=1,size=5} = req.query
  pn = parseInt(pn)
  size = parseInt(size)

  articleModel.find()
              .skip((pn-1)*size)
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
                  data
                })
              })
            })

//根据文章id获取文章
router.get('/article/:id',(req,res) => {
  const {id} = req.params
  articleModel.findById(id)
              .populate({
                path:'author',
                select:'-password -email'
              })
              .populate({
                path:'category'
              })
              .then(data => {
                res.json({
                  code:200,
                  data
                })
  }).catch(err => {
    res.json({
      code:400,
      err
    })
  })
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