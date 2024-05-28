import { createSlice } from "@reduxjs/toolkit";

export type userType = {
  id: number;
  email: string;
  fullname: string;
  role: "jobseeker" | "company";
};

type AuthState = {
  data: userType | null;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  data: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.data = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
