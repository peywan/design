import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user object
const initialState = {
  username: "",
  password: "",
  email: "",
  phone: "",
  liked: [],
  createdAds: [],
};

// Create a userSlice to manage user-related actions and state
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Define a createUser reducer that accepts an action with the user data
    createUser: (state, action) => {
      // Add logic here to create a new user and update the state
    },
  },
});

// Selector to get the liked products from the state
export const selectLiked = (state) => {
  // Add logic here to return liked products
};

// Selector to get the user's created ads from the state
export const selectUserProducts = (state) => {
  // Add logic here to return user's created ads
};

// Export the createUser action for usage in components
export const { createUser } = userSlice.actions;

// Export the userSlice reducer as the default export
export default userSlice.reducer;
