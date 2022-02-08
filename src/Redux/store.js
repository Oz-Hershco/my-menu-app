import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from './filtersSlice'
import foodItemsSlice from './foodItemsSlice'


export default configureStore({
  reducer: {
    items: foodItemsSlice,
    filters: filtersSlice,
  },
})