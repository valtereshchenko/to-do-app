const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', userController.getLoginPage)
router.post('/', urlencodedParser, userController.sendDataLogin)


module.exports = router;