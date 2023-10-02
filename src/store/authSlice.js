import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
