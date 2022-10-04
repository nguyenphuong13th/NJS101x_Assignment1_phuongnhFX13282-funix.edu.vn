const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')

router.put('/:_id/check-out',userController.checkoutAction)
router.put('/:_id/check-in',userController.checkinAction)
router.put('/:_id/personalinfoImgUpdatedScreen',userController.personalinfoImgChangeUpdate)//patch URL must match with action in form submit
router.get('/:_id/personalinfoImgChangeScreen',userController.personalinfoImgChange)
router.use('/check-in-out', userController.inOut)
router.use('/personal-information',userController.personalinfo)
router.use('/leave-holiday',userController.dayOff)
router.use('/overtime-information',userController.overtimeinfo)
router.use('/covid-information',userController.covidinfo)

// router.use('/register-screen',userController.Register) // read from top to bottom nesting page
router.use('/',userController.index)

module.exports = router