import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../posts/postSlice";
import usersReducer from "../user/userSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    users: usersReducer,
  },
});
