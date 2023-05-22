const {User, schemas} = require('../../models/user');
const {RequestError} = require('../../helpers');
const bcrypt = require('bcrypt');

const register = async (req,res, next) => {
  try {
    const {error} = schemas.registerSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message)
    };

    const {email, password} = req.body;
    const user = await User.findOne({email})
    
    if (user) {
      throw RequestError(409, "Email already in use")
    };

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({...req.body, password: hashPassword});
    res.json({
      email: newUser.email,
    })

  } catch (error) {
    next(error)
  };
};

module.exports = register;
