import { createSlice } from '@reduxjs/toolkit'

export const foodItemsSlice = createSlice({
  name: 'foodItems',
  initialState: {
    value: [
      {
        id: "1d0f147f-5e6e-4502-9e4a-13c93fb779ca",
        img: "http://www.easyrecipes.co.il/wp-content/uploads/2014/10/%D7%A2%D7%95%D7%92%D7%AA-%D7%91%D7%99%D7%A1%D7%A7%D7%95%D7%95%D7%99%D7%98%D7%99%D7%9D.jpg",
        title: "Nutella Cake",
        description: "A heart shaped cake with a biscuit base, frosting and kinder toppings. Extremely Delicious!",
        price: "₪250",
        type: {
          id: "4f13ac6e-99b7-496f-9015-f2b4dac0110e",
          name: "Sweet",
          selected: false
        },
      },
      {
        id: "56f1b5b2-9b61-4d1f-a857-c2678527f43b",
        img: "https://www.matkonimil.co.il/wp-content/uploads/2020/04/92319132_1082373325455744_6446888355136299457_n-1024x1024.jpg",
        title: "Jerusalm Bagel",
        description: "5/10 units of Jerusalem style bagel. super crusty, full of sesame seeds and really delicious! A great addition to your Israeli breakfast with the whole family.",
        price: "₪35/₪65",
        type: {
          id: "dd730a41-0af7-4020-ac3a-992d5603f063",
          name: "Savory",
          selected: false
        },
      },
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