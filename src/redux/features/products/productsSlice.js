import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk("productsfetch", async () => {
  const res = await axios.get("https://admin.refabry.com/api/all/product/get");
  return res.data;
});

const productSlicer = createSlice({
  name: "product",
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // console.log(action.payload.data.data);
        state.isLoading = false;
        state.items = action.payload.data.data;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export default productSlicer.reducer;
