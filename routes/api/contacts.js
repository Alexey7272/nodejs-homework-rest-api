const express = require('express');
const contactsConroller = require('../../controllers/contacts');
const {isValidId, authenticate} = require('../../middlewares/index');

const router = express.Router();


router.get('/', authenticate, contactsConroller.listContacts);

router.get('/:contactId', authenticate, isValidId, contactsConroller.getContactById);

router.post('/', authenticate, contactsConroller.addContact);

router.delete('/:contactId', authenticate, isValidId, contactsConroller.removeContact)

router.put('/:contactId', authenticate, isValidId, contactsConroller.updateContact)

router.patch('/:contactId/favorite', authenticate, isValidId, contactsConroller.updateFavorite)


module.exports = router;
