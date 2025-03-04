import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params) => {
    console.log("get products called");
    
    const { limit, skip } = params;
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    console.log(response.data,"response from products");
    
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "users",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.loading = false), (state.products = action.payload.products);
      })
      .addCase(fetchProducts.rejected,(state,action)=>{
        state.loading = false,
        state.error = action.error.message
      })
  },
});

export default productsSlice.reducer;