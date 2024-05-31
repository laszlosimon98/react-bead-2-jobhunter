import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl: string = "http://localhost:3030";

type LoginType = {
  email: string;
  password: string;
  strategy: "local" | "jwt";
};

export type LoginResultType = {
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
  user: UserType;
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

export type UserType = {
  id: number;
  email: string;
  fullname: string;
  role: "jobseeker" | "company";
};

export type AuthType = {
  id: number;
  token: string;
};

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserById: builder.query<UserType, AuthType>({
      query: ({ id, token }) => ({
        url: `users/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),
    loginUser: builder.mutation<LoginResultType, LoginType>({
      query: (body) => ({
        url: "authentication",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    registerUser: builder.mutation<RegisterResultType, RegisterType>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = usersApi;
