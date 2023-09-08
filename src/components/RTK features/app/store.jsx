import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Slices/posts/postSlice'
import usersReducer from '../Slices/user/userSlice'

export const store = configureStore({
  reducer: {
   post: postReducer,
   users: usersReducer

  },
});
