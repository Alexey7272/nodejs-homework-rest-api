const express = require("express");
const userController = require('../../controllers/auth');
const {authenticate} = require('../../middlewares/index');

const router = express.Router();

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/current', authenticate, userController.getCurrent)

router.post('/logout', authenticate, userController.logout)

module.exports = router;
