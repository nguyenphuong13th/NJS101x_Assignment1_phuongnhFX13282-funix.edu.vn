const express = require('express')
const router = express.Router()
const SitesController = require('../controller/SitesController')

router.get('/register',SitesController.Register)
router.post('/store',SitesController.Store)
router.get('/login',SitesController.Login)
router.get('/',SitesController.Index)
module.exports = router