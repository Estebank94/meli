const express = require('express')
const router = express.Router();
const itemController = require('../controller/item')

router.get('/items', itemController.listItems)
router.get('/items/:id', itemController.getItemDetails)

module.exports = router
