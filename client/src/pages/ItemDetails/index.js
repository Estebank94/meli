import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Helmet } from 'react-helmet'
import {getItemDetails, cleanItemDetails} from 'store/actions'
import {formatAmount} from 'utils';
import './styles.scss'

export default function ProductDetails() {

  const {item} = useSelector(state => state.listings)
  const dispatch = useDispatch()

  const {id} = useParams();

  useEffect(() => {
    dispatch(getItemDetails(id))
    return function cleanup() {
      dispatch(cleanItemDetails())
    }
  }, [id, dispatch])


  if(!item) {
    return <section className="container" id="product-details"/>
  }

  if(item) {
    const { title, picture, condition, sold_quantity, price, description } = item;

    return(
        <>
          <Helmet>
            <title>{title} | Mercado Libre Argentina</title>
          </Helmet>
          <section className="container" id="product-details">
            <div className="details">
              <img src={picture} alt={title} />
              <div className="summary">
                <span className="condition">{condition === 'new' ? 'Nuevo' : 'Usado'} - {sold_quantity} {sold_quantity === 1 ? 'vendido' : 'vendidos'}</span>
                <h2>{title}</h2>
                <span className="price">
                  {formatAmount(price)}
                  <sup>{(price.decimals).toLocaleString('es-AR', {minimumIntegerDigits: 2, useGrouping:false})}</sup>
                </span>
                <button>Comprar</button>
              </div>
              <div className="description">
                <h2>Descripción del producto</h2>
                <p>{description}</p>
              </div>
            </div>
          </section>
        </>
    )
  }
}
