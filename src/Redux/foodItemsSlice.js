import { createSlice } from '@reduxjs/toolkit'

export const foodItemsSlice = createSlice({
  name: 'foodItems',
  initialState: {
    value: [
      {
        id: "1",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg",
        title: "English Breakfast",
        description: "Bacon, sausages, eggs, tomatoes, mushrooms, toast, and beans all on one plate.",
        price: "₪65",
        type: {
          id: "dd730a41-0af7-4020-ac3a-992d5603f063",
          name: "Savory",
          selected: false
        },
      },
      {
        id: "2",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/04/small-batch-sourdough-1941w-scaled.jpg",
        title: "Sourdough Bread",
        description: "Sourdough is loose term that refers to bread that’s been made with a wild yeast starter rather than commercial yeast.",
        price: "₪35",
        type: {
          id: "dd730a41-0af7-4020-ac3a-992d5603f063",
          name: "Savory",
          selected: false
        },
      },
      {
        id: "3",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/01/tiktok-green-goddess-salad-0176w-1024x683.webp",
        title: "Green Salad",
        description: "The most satisfying vegan green goddess salad.",
        price: "₪35",
        type: {
          id: "dd730a41-0af7-4020-ac3a-992d5603f063",
          name: "Savory",
          selected: false
        },
      },
      // {
      //   id: "1",
      //   img: "http://www.easyrecipes.co.il/wp-content/uploads/2014/10/%D7%A2%D7%95%D7%92%D7%AA-%D7%91%D7%99%D7%A1%D7%A7%D7%95%D7%95%D7%99%D7%98%D7%99%D7%9D.jpg",
      //   title: "Nutella Cake",
      //   description: "A heart shaped cake with a biscuit base, frosting and kinder toppings. Extremely Delicious!",
      //   price: "₪250",
      //   type: {
      //     id: "4f13ac6e-99b7-496f-9015-f2b4dac0110e",
      //     name: "Sweet",
      //     selected: false
      //   },
      // },
      // {
      //   id: "2",
      //   img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg",
      //   title: "English Breakfast",
      //   description: "Bacon, sausages, eggs, tomatoes, mushrooms, toast, and beans all on one plate.",
      //   price: "₪65",
      //   type: {
      //     id: "dd730a41-0af7-4020-ac3a-992d5603f063",
      //     name: "Savory",
      //     selected: false
      //   },
      // },
      // {
      //   id: "3",
      //   img: "https://www.matkonimil.co.il/wp-content/uploads/2020/04/92319132_1082373325455744_6446888355136299457_n-1024x1024.jpg",
      //   title: "Jerusalm Bagel",
      //   description: "5/10 units of Jerusalem style bagel. super crusty, full of sesame seeds and really delicious! A great addition to your Israeli breakfast with the whole family.",
      //   price: "₪35/₪65",
      //   type: {
      //     id: "dd730a41-0af7-4020-ac3a-992d5603f063",
      //     name: "Savory",
      //     selected: false
      //   },
      // },
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