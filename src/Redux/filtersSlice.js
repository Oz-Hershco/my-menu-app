import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    value: [
      {
        id:"52200b61-34eb-4c4b-803c-7017707495ef",
        name:"All",
        selected:true
      },
      {
        id:"4f13ac6e-99b7-496f-h015-f2b3dac01856",
        name:"Starters",
        selected:false
      },
      {
        id:"4f13ac6e-99b7-496f-9015-f2b3dac01102",
        name:"Mains",
        selected:false
      },
      {
        id:"4f13ac6e-99b7-496f-9015-f2b2dac0110f",
        name:"Dessert",
        selected:false
      },
      {
        id:"4f13ac6e-99b7-496f-9015-f2b4dac0110e",
        name:"Drinks",
        selected:false
      },
    ],
  },
  reducers: {
    updateFilter: (state, action) => {
      const id = action.payload.id;
      const selectedVal = action.payload.selected;
      const selectedFilterIndex = state.value.findIndex((filter)=>filter.id === id);
      state.value[selectedFilterIndex].selected = selectedVal;
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
export const { updateFilter, addFilter, removeFilterById } = filtersSlice.actions

export default filtersSlice.reducer