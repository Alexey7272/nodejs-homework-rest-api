const {Contact, shemas} = require("../../models/contact");
const {RequestError} = require('../../helpers/index')

const updateFavorite = async (req, res, next) => {
    try {
      const {error} = shemas.updateFavoriteShema.validate(req.body);
      if (error) {
        throw RequestError(400, error.message)
      }
      const { contactId } = req.params
      const result = await Contact.findByIdAndUpdate(contactId , req.body, {new: true})
      if(!result){
        throw RequestError(404, 'Not found')
      }
      res.json(result)
    } catch (error) {
      next(error)
    }
};

module.exports = updateFavorite;
