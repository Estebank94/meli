import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'listings',
  initialState: {
    itemList: {
      categories: [],
      items: []
    },
    item: null
  },
  reducers: {
    getItemListSuccess: (state, action) => {
      state.itemList.categories = action.payload.categories
      state.itemList.items = action.payload.items
    },
    clearItemListSuccess: (state) => {
      state.itemList.categories = []
      state.itemList.items = []
    },
    getItemSuccess: (state,action) => {
      state.item = action.payload
    },
    clearItemSuccess: (state) => {
      state.item = null
    }
  }
})

export default slice.reducer

