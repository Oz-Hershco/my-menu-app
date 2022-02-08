import { createSlice } from '@reduxjs/toolkit'
import { Filter } from '../Models/Filter';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    value: [
      new Filter("52200b61-34eb-4c4b-803c-7017707495ef", "All"),
      new Filter("dd730a41-0af7-4020-ac3a-992d5603f063", "Savory"),
      new Filter("4f13ac6e-99b7-496f-9015-f2b4dac0110e", "Sweet"),
    ],
  },
  reducers: {
    updateFilters: (state, action) => {
      state.value = action.payload
    },
    addFilter: (state, action) => {
      state.value.unshift(action.payload);
    },
    removeFilterById: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((filter) => filter.id !== id);
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateFilters, addFilter, removeFilterById } = filtersSlice.actions

export default filtersSlice.reducer