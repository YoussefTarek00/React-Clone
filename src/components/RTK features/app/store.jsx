import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Slices/posts/postSlice'

export const store = configureStore({
  reducer: {
   post: postReducer,
  },
});
