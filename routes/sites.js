const express = require('express')
const router = express.Router()
const SitesController = require('../controller/SitesController')
router.post('/update',SitesController.Update)
router.get('/login',SitesController.Login)
router.get('/register',SitesController.Register)
router.post('/store',SitesController.Store)
router.get('/',SitesController.Index)
module.exports = router