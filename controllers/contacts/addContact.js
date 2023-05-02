const contacts = require('../../models/contacts')
const RequestError = require('../../helpers')
const Joi = require('joi')
const addShema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
});

const addContact = async (req, res, next) => {
    try {
      const {error} = addShema.validate(req.body);
      if (error) {
        throw RequestError(400, error.message)
      }
      const result = await contacts.addContact(req.body)
      res.json(result)
    } catch (error) {
      next(error)
    }
};

module.exports = addContact;