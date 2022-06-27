const express = require('express')
const router = express.Router()
const SitesController = require('../controller/SitesController')

router.use('/',SitesController.index)

module.exports = router