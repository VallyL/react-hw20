import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slisers/userSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
