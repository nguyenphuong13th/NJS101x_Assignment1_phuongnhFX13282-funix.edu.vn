const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')

router.use('/:id',userController.checkIn) // read from top to bottom nesting page
router.use('/',userController.index)

module.exports = router