const {User, schemas} = require('../../models/user');
const {RequestError} = require('../../helpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = process.env;

const login = async (req,res, next) => {
   const {email, password} = req.body
   const user = await User.findOne({email})
    if(!user) {
      throw RequestError(401, "Email or password invalid")
    };

    if(!user.verify) {
      throw RequestError(401, "Email is not confirmed")
    };

   const passwordCompare = await bcrypt.compare(password, user.password)
    if(!passwordCompare){
      throw RequestError(401, "Email or password invalid")
    };

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
    await User.findByIdAndUpdate(user._id, {token});

    res.json({
      token,
    });
};

module.exports = login;