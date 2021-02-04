import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { Helmet } from 'react-helmet';
import {searchItems, cleanSearchItems} from 'store/actions'
import './styles.scss'

import Item from './Item'


export default function SearchResults() {
  const dispatch = useDispatch()
  const { itemList } = useSelector(state => state.listings)

  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const param = searchParams.get('search')

  useEffect(() => {
    dispatch(searchItems(param))
  }, [param, dispatch])

  return (
      <>
        <Helmet>
          <title>{param} | Mercado Libre Argentina</title>
        </Helmet>
        <section className="container" id="search-results">
          {
            itemList.items && itemList.items.map(item => {
              const { condition, free_shipping, id, picture, price, title, location } = item
              return <Item key={id} condition={condition} free_shipping={free_shipping} id={id} picture={picture} price={price} title={title} location={location}/>
            })
          }
        </section>
      </>
  )
}
