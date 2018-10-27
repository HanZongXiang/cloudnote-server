const {Router} = require('express')
const router = Router()
const categoryModel = require('../database/model/category')

//获取所有分类接口
router.get('/category',async (req,res) => {
  const data = await categoryModel.find()
  res.json({
    code:200,
    msg: '获取分类信息成功',
    data
  })
})

//根据分类id获取接口
router.get('/category/:id',(req,res) => {
  let {id} = req.params
  categoryModel.findById(id).then(data => {
    res.json({
      code:200,
      msg:'获取分类信息成功',
      data
    })
  }).catch(err => {
    res.json({
      code:403,
      msg:'请求参数有误',
      err
    })
  })
})

//添加分类
router.post('/category',async (req,res) => {
  try {
    const {name} = req.body
    const data = await categoryModel.create({name})

    res.json({
      code:200,
      msg:'分类信息添加成功',
      data
    })
  } catch (error) {
    res.json({
      code:400,
      msg:'请求参数有误',
      error
    })
  }
})

module.exports = router