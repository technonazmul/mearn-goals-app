const express = require('express')
const router = express.Router()
const {testSave} = require('../controllers/testController')

router.post('/', testSave)

module.exports = router