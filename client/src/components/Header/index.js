import React, { useState }from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {cleanSearchItems} from 'store/actions'
import CategoriesBreadcrumb from 'components/CategoriesBreadcrumb';
import './styles.scss';

const SearchBar = ({ searchItems }) => {
  const [value, setValue] = useState('')
  let history = useHistory()
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.listings.itemList)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(cleanSearchItems())
    history.push(`/items?search=${value}`)
  }

  return(
      <>
        <header>
          <div className="container">
            <a href="/">Mercadolibre, nunca dejes de buscar</a>
            <form onSubmit={(e) => submitHandler(e)}>
              <input
                  type="text"
                  placeholder="Nunca dejes de buscar"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
              />
              <button/>
            </form>
          </div>
        </header>
        <div className="container">
          <CategoriesBreadcrumb categories={categories} />
        </div>
      </>
  );
}



export default SearchBar
