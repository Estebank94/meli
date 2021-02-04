import {slice} from 'store/reducer';

const { getItemListSuccess, getItemSuccess, clearItemListSuccess, clearItemSuccess } = slice.actions

export const searchItems = (query) => async dispatch => {
  try {
    const response = await fetch(`/api/items?q=${query}`).then(response => response.json())
    const { author, categories, items } = response
    dispatch(getItemListSuccess({author, categories, items}))
  } catch (e) {
    console.error(e)
  }
}

export const getItemDetails = (id) => async dispatch => {
  try {
    const response = await fetch(`/api/items/${id}`).then(response => response.json())
    dispatch(getItemSuccess(response.item))
  } catch (e) {
    console.error(e)
  }
}

export const cleanSearchItems = () => async dispatch => dispatch(clearItemListSuccess())

export const cleanItemDetails = () => async dispatch => dispatch(clearItemSuccess())
