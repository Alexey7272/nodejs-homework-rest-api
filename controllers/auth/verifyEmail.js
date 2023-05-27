const {User} = require('../../models/user');
const {RequestError, sendMail} = require('../../helpers');

const verifyEmail = async ( req,res) => {
    const { token } = req.params
    const user = await User.findOne({ verificationToken: token })

    if(!user) {
        throw RequestError(401, "Verify token is not valid")
    }

    await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: ""})

    return res.json({message: "Success"})
};

module.exports = verifyEmail;
