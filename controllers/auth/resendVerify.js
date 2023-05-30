const {User, schemas} = require('../../models/user');
const {RequestError, sendMail} = require('../../helpers');

const resendVerify = async ( req,res) => {
    const {email} = req.body
    const user = await User.findOne({email})

    if(!user) {
        throw RequestError(401, "Email not found")
    }

    if(user.verify) {
        throw RequestError(401, "Email already verify")
    }

    const verifyEmail = {
        to: user.email,
        subject: 'Confirm your email',
        html: `<a href="http://localhost:3000/api/auth/verify/${user.verificationToken}"> Confirm your email </a>`,
    }

    await sendMail(verifyEmail)

    res.json({
        message: "Verify email send success"
    })
};

module.exports = resendVerify;
