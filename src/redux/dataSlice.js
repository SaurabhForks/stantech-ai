import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: "idle", // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
