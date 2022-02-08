import { createSlice } from '@reduxjs/toolkit'
import { Filter } from '../Models/Filter';
import { Item } from '../Models/Item';

export const foodItemsSlice = createSlice({
  name: 'foodItems',
  initialState: {
    value: [
      new Item(
        "1d0f147f-5e6e-4502-9e4a-13c93fb779ca",
        "http://www.easyrecipes.co.il/wp-content/uploads/2014/10/%D7%A2%D7%95%D7%92%D7%AA-%D7%91%D7%99%D7%A1%D7%A7%D7%95%D7%95%D7%99%D7%98%D7%99%D7%9D.jpg",
        "Nutella Cake",
        "A heart shaped cake with a biscuit base, frosting and kinder toppings. Extremely Delicious!",
        "₪250",
        new Filter("4f13ac6e-99b7-496f-9015-f2b4dac0110e", "Sweet")
      ),
      new Item(
        "56f1b5b2-9b61-4d1f-a857-c2678527f43b",
        "https://www.matkonimil.co.il/wp-content/uploads/2020/04/92319132_1082373325455744_6446888355136299457_n-1024x1024.jpg",
        "Jerusalm Bagel",
        "A Jerusalem style bagel, super crusty, full of sesame seeds and really delicious! A great addition to your Israeli breakfast.",
        "₪35",
        new Filter("dd730a41-0af7-4020-ac3a-992d5603f063", "Savory")
      ),
    ],
  },
  reducers: {
    updateList: (state, action) => {
      state.value = action.payload
    },
    addItem: (state, action) => {
      state.value.unshift(action.payload);
    },
    removeItemById: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((item) => item.id !== id);
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateList, addItem, removeItemById } = foodItemsSlice.actions

export default foodItemsSlice.reducer