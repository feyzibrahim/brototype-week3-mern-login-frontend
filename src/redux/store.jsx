import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducers/counterSlice";
import userReducer from "./reducers/userSlice";
import adminUserReducer from "./reducers/adminUserSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer,
    adminUser: adminUserReducer,
  },
});
