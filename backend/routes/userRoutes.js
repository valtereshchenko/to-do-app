const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', userController.getUsers);
router.post('/', urlencodedParser, userController.createUser);
router.get('/:name', userController.getUserByName);
router.delete('/:name', userController.deleteUser)

module.exports = router;