const {Contact, shemas} = require("../../models/contact");
const RequestError = require('../../helpers')

const addContact = async (req, res, next) => {
    try {
      const {error} = shemas.addShema.validate(req.body);
      if (error) {
        throw RequestError(400, error.message)
      }
      const result = await Contact.create(req.body)
      res.json(result)
    } catch (error) {
      next(error)
    }
};

module.exports = addContact;