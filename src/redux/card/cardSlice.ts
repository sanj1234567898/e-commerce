import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance as axios } from "../../utils/axios";

const fetchProductData = createAsyncThunk("card/fetchProductData", async () => {
  const { data } = await axios.get("/product");
  return data;
});

const cardState = {
  data: [],
  loading: "pending",
};

export const cardSlice = createSlice({
  name: "card",
  cardState,
  reducers: {},
  extraReducers: {
    [fetchProductData.pending]: (action) => {
      state.loading = "pending";
    },

    [fetchProductData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = "loaded";
    },

    [fetchProductData.rejected]: (state, action) => {
      state.loading = "error";
    },
  },
});

export default cardSlice.reducer;
