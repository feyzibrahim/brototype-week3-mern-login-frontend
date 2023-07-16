import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const adminGetAllUser = createAsyncThunk(
  "adminUser/adminGetAllUser",
  async (userCredentials, { rejectWithValue }) => {
    const uc = userCredentials;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `http://localhost:4000/api/user/admin/allUser`,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        console.log(error.response.data.error);

        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
