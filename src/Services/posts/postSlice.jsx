import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchData = createAsyncThunk("post/fetchData", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});



const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        (state.loading = false),
          (state.data = action.payload),
          (state.error = "");
      }),
      builder.addCase(fetchData.rejected, (state, action) => {
        (state.loading = false),
          (state.data = []),
          (state.error = action.error.message);
      });
  },
});

export default postSlice.reducer;
