import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userType } from "./authSlice";

const baseUrl: string = "http://localhost:3030";

type LoginType = {
  email: string;
  password: string;
  strategy: "local" | "jwt";
};

type ResultType = {
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

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<ResultType, LoginType>({
      query: (body) => ({
        url: "authentication",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
