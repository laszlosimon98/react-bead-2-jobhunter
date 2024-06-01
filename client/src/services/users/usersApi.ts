import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  UserType,
  AuthType,
  LoginResultType,
  LoginType,
  RegisterResultType,
  RegisterType,
} from "../../types/userTypes";

const baseUrl: string = "http://localhost:3030";

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
