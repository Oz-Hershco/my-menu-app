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
          id: "4f13ac6e-99b7-496f-9015-f2b3dac01102",
          name: "Mains",
          selected: false
        },
      },
      {
        id: "2",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/04/small-batch-sourdough-1941w-scaled.jpg",
        title: "Sourdough Bread",
        description: "Sourdough is loose term that refers to bread that’s been made with a wild yeast starter rather than commercial yeast.",
        price: "₪18",
        type: {
          id: "4f13ac6e-99b7-496f-h015-f2b3dac01856",
          name: "Starters",
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
          id: "4f13ac6e-99b7-496f-h015-f2b3dac01856",
          name: "Starters",
          selected: false
        },
      },
      {
        id: "4",
        img: "https://images-gmi-pmc.edge-generalmills.com/fe558022-4544-458f-aaa0-eda0de1bcf99.jpg",
        title: "Chocolate Mousse",
        description: "Did you know that “mousse” means “to foam or froth” in French? And did you know that mousse is actually a simple dessert to create in a home kitchen?",
        price: "₪55",
        type: {
          id: "4f13ac6e-99b7-496f-9015-f2b2dac0110f",
          name: "Dessert",
          selected: false
        },
      },
      {
        id: "5",
        img: "https://www.iheartbrazil.com/wp-content/uploads/2020/02/traditional-brigadeiro-recipe-9.jpg",
        title: "Brigadeiro",
        description: "Brigadeiro is a classic Brazilian sweet you'll fall in love with.",
        price: "₪40",
        type: {
          id: "4f13ac6e-99b7-496f-9015-f2b2dac0110f",
          name: "Dessert",
          selected: false
        },
      },
      {
        id: "6",
        img: "https://www.thespruceeats.com/thmb/ZqDIVhYOtV_R19SQq2Kzl3aJ5Z8=/2000x1332/filters:fill(auto,1)/caipirinha-recipe-759290-hero-01-d599e690fbae40238c20a6137ebb52ef.jpg",
        title: "Caipirinha",
        description: "A popular and refreshing drink, the caipirinha features Brazil's cachaça.",
        price: "₪25",
        type: {
          id: "4f13ac6e-99b7-496f-9015-f2b4dac0110e",
          name: "Drinks",
          selected: false
        },
      },
      {
        id: "7",
        img: "https://www.liquor.com/thmb/F4UibVQr8U9E7Y2AkCag0njUC-E=/720x540/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__12__20073201__white-russian-720x720-article-cbe4b9a832c64f8da0bb09407caefa7f.jpg",
        title: "White Russian",
        description: "The White Russian is a classic three-ingredient cocktail that combines vodka, Kahlúa and cream.",
        price: "₪25",
        type: {
          id: "4f13ac6e-99b7-496f-9015-f2b4dac0110e",
          name: "Drinks",
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