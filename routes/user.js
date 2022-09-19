const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')
router.use('/check-in-screen/check-in-screen', userController.inOut)
router.use('/day-off',userController.dayOff)
router.use('/finish',userController.offline)
// router.use('/register-screen',userController.Register) // read from top to bottom nesting page
router.use('/',userController.index)

module.exports = router