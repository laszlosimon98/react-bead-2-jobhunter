import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userType } from "./authSlice";

const baseUrl: string = "http://localhost:3030";

type LoginType = {
  email: string;
  password: string;
  strategy: "local" | "jwt";
};

type LoginResultType = {
  accessToken: string;
  authentication: {
    payload: {
      aud: string;
      exp: number;
      iat: number;
      jti: string;
      sub: string;
    };
    strategy: "local" | "jwt";
  };
  user: userType;
};

type RegisterType = {
  email: string;
  password: string;
  fullname: string;
  role: "jobseeker" | "company";
};

type RegisterResultType = {
  id: number;
  email: string;
  fullname: string;
  role: "jobseeker" | "company";
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResultType, LoginType>({
      query: (body) => ({
        url: "authentication",
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation<RegisterResultType, RegisterType>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
