const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')

router.use('/day-off',userController.dayOff)
router.use('/finish',userController.offline)
router.use('/check-in',userController.checkIn) // read from top to bottom nesting page
router.use('/',userController.index)

module.exports = router