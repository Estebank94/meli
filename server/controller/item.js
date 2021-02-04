const HTTP_STATUS = require('http-status');
const itemService = require('../services/item')

async function listItems (req, res)  {
  try {
    const { query } = req;
    const data = await itemService.listItems(query.q)
    return res.status(HTTP_STATUS.OK).json(data)
  } catch(e) {
    return res.sendStatus(HTTP_STATUS.INTERNAL_SERVER_ERROR)
  }
}

async function getItemDetails (req, res)  {
  try {
    const { params } = req;
    const data = await itemService.getItemDetails(params.id)
    return res.status(HTTP_STATUS.OK).json(data)
  } catch(e) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
  }
}

module.exports = {listItems, getItemDetails}
