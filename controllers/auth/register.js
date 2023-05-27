const {User, schemas} = require('../../models/user');
const {RequestError, sendMail} = require('../../helpers');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { v4 } = require('uuid');

const register = async (req,res, next) => {
  try {
    const verificationToken = v4()

    const {error} = schemas.registerSchema.validate(req.body)
    if (error) {
      throw RequestError(400, error.message)
    }

    const {email, password} = req.body;
    const user = await User.findOne({email})
    
    if (user) {
      throw RequestError(409, "Email already in use")
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);

    const newUser = await User.create({...req.body, password: hashPassword, avatarURL, verificationToken},)
    res.json({
      email: newUser.email,
    })

    await sendMail({
      to: newUser.email,
      subject: 'Confirm your email',
      html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}"> Confirm your email </a>`,
    })

  } catch (error) { 
    next(error)
  }
};

module.exports = register;
