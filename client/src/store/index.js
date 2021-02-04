import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import listings from './reducer'

const reducer = combineReducers({
  listings
})

const store = configureStore({
  reducer,
})

export default store;
