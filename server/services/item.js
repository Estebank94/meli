const fetch = require('node-fetch');

async function listItems(query) {
  try {
    const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).then(response => response.json())

    let formattedResult = {
      author: {
        name: 'Esteban',
        lastname: 'Kramer'
      },
      categories: [],
      items: [],
    }

    const { filters, results } = data

    if(filters[0]) {
      for(const category of filters[0].values[0].path_from_root) {
        formattedResult.categories.push(category.name)
      }
    }

    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });

    for(const item of results.slice(0, 4)) {
      const { id, title, price, currency_id, thumbnail, condition, shipping, address } = item
      const formattedPrice = formatter.formatToParts(price)

      formattedResult.items.push({
        id,
        title,
        price: {
          currency: currency_id,
          amount: Math.floor(price),
          decimals: parseInt(`${formattedPrice[formattedPrice.length - 1].value}`)
        },
        picture: thumbnail,
        condition: condition,
        free_shipping: shipping.free_shipping,
        location: address.state_name,
      })
    }

    return formattedResult

  } catch (e) {
    throw new Error(e)
  }
}

async function getItemDetails(itemId) {
  try {
    const itemInfo = await fetch(`https://api.mercadolibre.com/items/${itemId}`).then(response => response.json())
    const description = await fetch(`https://api.mercadolibre.com/items/${itemId}/description`).then(response => response.json())

    const { id, title, price, currency_id, thumbnail, condition, shipping, sold_quantity } = itemInfo

    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });

    const formattedPrice = formatter.formatToParts(price)

    return {
      author: {
        name: 'Esteban',
        lastname: 'Kramer'
      },
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: Math.floor(price),
          decimals: parseInt(`${formattedPrice[formattedPrice.length - 1].value}`)
        },
        picture: thumbnail,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description: description.plain_text
      }
    }

  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {listItems, getItemDetails}
