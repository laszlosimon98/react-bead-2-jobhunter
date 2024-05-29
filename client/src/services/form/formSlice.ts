import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UpdateType = {
  name: string;
  value: string;
};

export type FormState = {
  data: {
    login: {
      email: string;
      password: string;
    };
    register: {
      [key: string]: string;
      fullname: string;
      email: string;
      password: string;
      password_again: string;
      role: "jobseeker" | "company";
    };
    errors: {
      [key: string]: string | undefined;
      email?: string;
      password?: string;
      fullname?: string;
      passwordMatch?: string;
    };
  };
};

const initialState: FormState = {
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
    },
    errors: {
      email: "",
      password: "",
      fullname: "",
      passwordMatch: "",
    },
  },
};

const formSlice = createSlice({
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
        [action.payload.name]: action.payload.value,
      };
    },
    setFormEmpty: (state) => {
      state.data = {
        login: initialState.data.login,
        register: initialState.data.register,
        errors: initialState.data.errors,
      };
    },
    setError: (state, action: PayloadAction<UpdateType>) => {
      state.data.errors = {
        ...state.data.errors,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const { setLoginForm, setRegisterForm, setFormEmpty, setError } =
  formSlice.actions;

export default formSlice.reducer;
