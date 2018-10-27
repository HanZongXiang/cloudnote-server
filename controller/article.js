const {Router} = require('express')
const router = Router()
const articleModel = require('../database/model/article')

router.post('/article',async (req,res,next) => {
  try {
    if (req.session.user) {
      // console.log(req.session.user);
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
  let {pn=1,size=10} = req.query
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

router.get('/search',(req,res) => {
  let {pn=1,size=10,title} = req.query
  let reg= new RegExp(title)

  articleModel.aggregate([
    {
      $match: {
        $or: [
          { title: reg }
        ]
      }
    },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author"
      }
    },
    {
      $project: {
        readnums: 1,
        replynums: 1,
        title: 1,
        content: 1,
        contentText: 1,
        author: 1,
        author: {
          avatar: 1,
          username: 1,
          _id:1
        },
        createdAt: 1,
        updatedAt: 1
      }
    },
    {
      $sort: {
        _id: -1
      }
    },
    {
      $limit: size
    },
    {
      $skip: (pn - 1) * size
    }
  ])
  // articleModel.find({$match: {
  //   $or: [
  //     {title:reg},
  //     {content:reg}
  //   ]
  // }})
  // .skip((pn-1)*size)
  // .limit(size)
  // .sort({_id:-1})
  // .populate({
  //   path:'author',
  //   select:'-password -email'
  // })
  // .populate({
  //   path:'category'
  // })
  .then(data => {
    res.json({
      code:200,
      data
    })
  })
})

module.exports = router