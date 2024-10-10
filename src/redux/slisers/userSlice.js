import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Peter Pan", email: "peter@example.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
