const {User, schemas} = require('../../models/user');

const logout = async (req, res, next) => {
    const {_id} = req.user;
    await User.findByIdAndUpdate(_id, {token: ""})

    res.json({
        message: "Logout success"
    })
};

module.exports = logout;