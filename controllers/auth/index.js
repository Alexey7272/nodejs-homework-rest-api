const register = require('./register');
const login = require('./login');
const getCurrent = require('./current');
const logout = require('./logout');
const avatarChange = require('./avatarChange');
const verifyEmail = require('./verifyEmail');
const resendVerify = require('./resendVerify');

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    avatarChange,
    verifyEmail,
    resendVerify,
};