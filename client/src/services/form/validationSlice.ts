import { createSlice } from "@reduxjs/toolkit";

export type FormType = {
  [key: string]: string;
  fullname: string;
  email: string;
  password: string;
  password_again: string;
  role: "jobseeker" | "company";
};

type ErrorType = {
  name: string;
  email: string;
  password: string;
};

const initialState: FormType = {
  fullname: "",
  email: "",
  password: "",
  password_again: "",
  role: "jobseeker",
};

const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {},
});
