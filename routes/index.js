var express = require('express');
var router = express.Router();
const register = require('../controller/register')
const login = require('../controller/login')
const category = require('../controller/category')
const article = require('../controller/article')
const user = require('../controller/user')

router.use(register)
router.use(login)
router.use(category)
router.use(article)
router.use(user)

module.exports = router;
