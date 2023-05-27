const express = require("express");
const userController = require('../../controllers/auth');
const {authenticate, upload} = require('../../middlewares/index');

const router = express.Router();

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/current', authenticate, userController.getCurrent);

router.post('/logout', authenticate, userController.logout);

router.patch('/avatars', authenticate, upload.single('avatar'), userController.avatarChange);

router.get('/verify/:token', userController.verifyEmail);

router.post('/verify', userController.resendVerify);

module.exports = router;
