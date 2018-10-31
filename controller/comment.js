const {Router} = require('express')
const router = Router()
const articleModel = require('../database/model/article')
const commentModel = require('../database/model/comment')

router.post('/comment',async (req,res,next) => {
  try {
    const { content,articleId,user } = req.body
    const userId = req.session.user._id

    let comment;
    const article = await articleModel.findById(articleId)
    if (article) {  // 笔记存在
      if (content) {
        comment = await commentModel.create({
          content,
          article: articleId,
          author: userId,
        })
        await article.updateOne({ $push: { comment: comment._id } })

        res.json({
          code: 200,
          data: comment,
          msg: '评论成功'
        })
      } else {
        res.json({
          code: 400,
          msg: '评论内容不能为空'
        })
      }
      
    } else {
      res.json({
        code: 400,
        msg: '该笔记不存在'
      })
    }
  } catch (error) {
    next(error)
  }
})

router.get('/comment/:articleId',async (req,res,next) => {
  try {
    let {page = 1,page_size = 10} = req.query
    const articleId = req.params.articleId
    let total = await commentModel.find({ article: articleId }).count()

    const data = await commentModel.find({article:articleId})
      .skip((page - 1) * page_size)
      .limit(page_size)
      .populate({
        path: 'author',
        select: 'username avatar'
      })
      .populate({
        path: 'article',
        select: 'content'
      })
      res.json({
        code: 200,
        msg: '请求成功',
        data,
        total
      })
  } catch (error) {
    next(error)
  }
})

router.delete('/comment/:id/:commentId', async (req,res,next) => {
  try {
    const articleId = req.params.id
    const commentId = req.params.commentId
    const data = await commentModel.find({article: articleId})
      .deleteOne({_id: commentId})
      if (data.n) {
        res.json({
          code: 200,
          data,
          msg: '评论删除成功'
        })
      }
  } catch (error) {
    next(error)
  }
})

module.exports = router