const express = require('express')
const router = express.Router()
const loginController = require('../controller/loginController')

router.post('/update',loginController.Update)
router.get('/',loginController.Login)
module.exports = router