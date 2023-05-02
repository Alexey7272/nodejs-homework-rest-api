const express = require('express')
const contactsConroller = require('../../controllers/contacts')

const router = express.Router()


router.get('/', contactsConroller.listContacts)

router.get('/:contactId', contactsConroller.getContactById)

router.post('/', contactsConroller.addContact)

router.delete('/:contactId', contactsConroller.removeContact)

router.put('/:contactId', contactsConroller.updateContact)


module.exports = router;
