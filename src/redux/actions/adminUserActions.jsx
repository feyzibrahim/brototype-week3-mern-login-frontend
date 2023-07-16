import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const adminGetAllUser = createAsyncThunk(
  "adminUser/adminGetAllUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/admin/users`,
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

export const deleteUser = createAsyncThunk(
  "adminUser/deleteUser",
  async ({ userId }, { rejectWithValue }) => {
    // console.log(userCredentials);

    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/admin/user/${userId}`,
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

export const updateUser = createAsyncThunk(
  "adminUser/updateUser",
  async ({ userId, email, userName, userType }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:4000/api/admin/user/${userId}`,
        JSON.stringify({
          email: email,
          userName: userName,
          userType: userType,
        }),
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
