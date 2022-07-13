const express = require('express')
const router = express.Router()
const SitesController = require('../controller/SitesController')

router.use('/',SitesController.index)
router.use('/login',SitesController.login)
module.exports = router