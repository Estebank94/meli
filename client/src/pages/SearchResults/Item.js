import React from 'react'
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import './styles.scss'
import {formatAmount} from 'utils';

const Item = ({ free_shipping, id, picture, price, title, location }) => {
  let history = useHistory()

  const goToItemDetails = () => {
    history.push(`/item/${id}`)
  }

  return (
      <div className="search-result-item" onClick={goToItemDetails}>
        <img src={picture} alt={title} />
        <div className="item-info">
          <div className="price">
            <span>{formatAmount(price)}</span>
            {free_shipping && <span className="shipping" />}
          </div>
          <h2 className="title">{title}</h2>
          <span className="location">{location}</span>
        </div>
        <hr/>
      </div>
  )
}

Item.propTypes = {
  free_shipping: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    decimals: PropTypes.number.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default Item
