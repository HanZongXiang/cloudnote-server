var express = require('express');
var router = express.Router();
const path = require('path')
const register = require('../controller/register')
const login = require('../controller/login')
const category = require('../controller/category')
const article = require('../controller/article')
const user = require('../controller/user')
const comment = require('../controller/comment')
const collection = require('../controller/collection')

router.get('/',(req,res) => {
  res.sendFile(path.resolve(__dirname,'./index.html'))
})
router.use(register)
router.use(login)
router.use(category)
router.use(article)
router.use(user)
router.use(comment)
router.use(collection)

module.exports = router;
