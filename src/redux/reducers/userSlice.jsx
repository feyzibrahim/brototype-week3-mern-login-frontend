import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Login api calling and returning data to redux state
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:4000/api/user/login`,
        JSON.stringify(userCredentials),
        config
      );

      localStorage.setItem("user", JSON.stringify(data));

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

// Signup api calling and returning data to redux state
export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Axios Post
      const { data } = await axios.post(
        `http://localhost:4000/api/user/signup`,
        JSON.stringify(userCredentials),
        config
      );

      localStorage.setItem("user", JSON.stringify(data));

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

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.loading = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login States
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })
      // Signup States
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
