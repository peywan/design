import { createSlice } from "@reduxjs/toolkit";
import products from "../../assets/data/products/productsData";

// Get 'liked' items from local storage and parse it
const likedLocalStorage = JSON.parse(localStorage.getItem("liked"));

// Define initial state for the product slice
const initialState = {
  entities: products,
  filter: {},
  liked: likedLocalStorage,
};

// Create product slice with reducers
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Set filter reducer
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    // Set liked reducer
    setLiked: (state, action) => {
      // Even if we have set localStorage to be parsed, the payload comes back like a string,
      // so we parse it again. Wonder if this is Immer that is causing the issue.
      state.liked = JSON.parse(action.payload);
      console.log(action.payload);
    },
  },
});

// Selector for product by ID
export const selectProductById = (state, productID) => {
  return state.products.entities.find((product) => product.id === productID);
};

// Selector for liked products
export const selectLikedProducts = (state) => state.products.liked;

// Selector for all products
export const selectProducts = (state) => state.products.entities;

// Export actions from product slice
export const { setFilter, setLiked } = productSlice.actions;

// Export product slice reducer
export default productSlice.reducer;
