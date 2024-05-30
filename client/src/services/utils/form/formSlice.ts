import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UpdateType = {
  name: string;
  value: number | string;
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
    search: {
      company: string;
      salaryFrom: number;
      salaryTo: number;
      type: "full-time" | "part-time" | "internship";
      city: string;
      homeOffice: boolean;
    };
    filter: {
      [key: string]: string | number | boolean;
      isFiltered: boolean;
      company: string;
      salaryFrom: number;
      salaryTo: number;
      type: "full-time" | "part-time" | "internship";
      city: string;
      homeOffice: boolean;
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
    search: {
      company: "",
      salaryFrom: 0,
      salaryTo: 0,
      type: "full-time",
      city: "",
      homeOffice: false,
    },
    filter: {
      isFiltered: false,
      company: "",
      salaryFrom: 0,
      salaryTo: 2000000,
      type: "full-time",
      city: "Budapest",
      homeOffice: false,
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
    setFilter: (state, action: PayloadAction<UpdateType>) => {
      state.data.filter = {
        ...state.data.filter,
        [action.payload.name]: action.payload.value,
      };
    },
    setSearch: (state) => {
      state.data.search = {
        ...state.data.filter,
      };
    },
    setFiltered: (state) => {
      state.data.filter = {
        ...state.data.filter,
        isFiltered: true,
      };
    },
    removeFilter: (state) => {
      state.data.filter = {
        ...state.data.filter,
        isFiltered: false,
      };
    },
    toggleHomeOffice: (state) => {
      state.data.filter = {
        ...state.data.filter,
        homeOffice: !state.data.filter.homeOffice,
      };
    },
  },
});

export const {
  setLoginForm,
  setRegisterForm,
  setFormEmpty,
  setError,
  setFilter,
  setFiltered,
  setSearch,
  removeFilter,
  toggleHomeOffice,
} = formSlice.actions;

export default formSlice.reducer;
