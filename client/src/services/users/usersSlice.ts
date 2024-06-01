import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../../types/userTypes";
import type { UpdateType } from "../../types/updateType";

const initialState: AuthState = {
  data: {
    login: {
      email: "",
      password: "",
    },
    register: {
      fullname: "",
      email: "",
      password: "",
      password_again: "",
      role: "jobseeker",
      experiences: "",
    },
    errors: {
      email: "",
      password: "",
      fullname: "",
      passwordMatch: "",
    },
  },
};

const usersSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setLoginForm: (state, action: PayloadAction<UpdateType>) => {
      state.data.login = {
        ...state.data.login,
        [action.payload.name]: action.payload.value,
      };
    },
    setRegisterForm: (state, action: PayloadAction<UpdateType>) => {
      state.data.register = {
        ...state.data.register,
        [action.payload.name]: action.payload.value as string,
      };
    },
    setFormEmpty: (state) => {
      state.data = {
        ...initialState.data,
      };
    },
    setError: (state, action: PayloadAction<UpdateType>) => {
      state.data.errors = {
        ...state.data.errors,
        [action.payload.name]: action.payload.value as string,
      };
    },
  },
});

export const { setLoginForm, setRegisterForm, setFormEmpty, setError } =
  usersSlice.actions;

export default usersSlice.reducer;
