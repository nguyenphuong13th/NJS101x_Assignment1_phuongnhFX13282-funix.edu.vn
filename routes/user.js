const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')
router.use('/:name/check-in-out', userController.inOut)
router.use('/:name/personal-information',userController.personalinfo)
router.use('/:name/leave-holiday',userController.dayOff)
router.use('/:name/overtime-information',userController.overtimeinfo)
router.use('/:name/covid-information',userController.covidinfo)

// router.use('/register-screen',userController.Register) // read from top to bottom nesting page
router.use('/',userController.index)

module.exports = router