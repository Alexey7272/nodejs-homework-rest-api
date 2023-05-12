const express = require('express');
const contactsConroller = require('../../controllers/contacts');
const {isValidId} = require('../../middlewares/index');

const router = express.Router();


router.get('/', contactsConroller.listContacts);

router.get('/:contactId', isValidId, contactsConroller.getContactById);

router.post('/', contactsConroller.addContact);

router.delete('/:contactId', isValidId, contactsConroller.removeContact)

router.put('/:contactId', isValidId, contactsConroller.updateContact)

router.patch('/:contactId/favorite', isValidId, contactsConroller.updateFavorite)


module.exports = router;
