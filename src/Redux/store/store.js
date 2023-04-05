// Import required modules
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";

// Configure the Redux store with the product reducer
export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
})
