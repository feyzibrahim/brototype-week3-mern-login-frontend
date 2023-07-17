import { createSlice } from "@reduxjs/toolkit";
import {
  adminGetAllUser,
  deleteUser,
  updateUser,
  createUser,
} from "../actions/adminUserActions";

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
        state.adminUser = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(adminGetAllUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.adminUser = null;
        state.error = payload;
      })
      // Deleting Users
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.adminUser = state.adminUser.filter(
          (us) => us._id !== payload._id
        );
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Updating user details
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        const index = state.adminUser.findIndex(
          (user) => user._id === payload._id
        );

        if (index !== -1) {
          state.adminUser[index] = payload;
        }
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Creating new users
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.adminUser.push(payload);
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default adminUserSlice.reducer;
