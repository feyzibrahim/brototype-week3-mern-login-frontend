import { createSlice } from "@reduxjs/toolkit";
import { adminGetAllUser } from "../actions/adminUserActions";

const adminUserSlice = createSlice({
  name: "adminUser",
  initialState: {
    adminUser: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminGetAllUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminGetAllUser.fulfilled, (state, { payload }) => {
        console.log("extra reducer: " + payload);
        state.adminUser = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(adminGetAllUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.adminUser = null;
        state.error = payload;
      });
  },
});

export default adminUserSlice.reducer;
