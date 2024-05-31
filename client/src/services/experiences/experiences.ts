import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserType } from "../users/usersApi";

const baseUrl = "http://localhost:3030";

type ExperienceType = {
  id: number;
  company: string;
  title: string;
  interval: string;
  userId: number;
  user: UserType;
};

type GetExperiencesType = {
  total: number;
  skip: number;
  limit: number;
  data: ExperienceType[];
};

export type ParamExperienceType = {
  company: string;
  title: string;
  interval: string;
};

export const experiencesApi = createApi({
  reducerPath: "experiencesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Experiences"],
  endpoints: (builder) => ({
    getExperiences: builder.query<GetExperiencesType, string>({
      query: (token) => ({
        url: "experiences",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Experiences"],
    }),
    addExperience: builder.mutation<
      ExperienceType,
      ParamExperienceType & { token: string }
    >({
      query: ({ token, ...patch }) => ({
        url: "experiences",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: patch,
      }),
      invalidatesTags: ["Experiences"],
    }),
    addExperiences: builder.mutation<
      ExperienceType[],
      { body: ParamExperienceType[] } & { token: string }
    >({
      query: ({ token, body }) => ({
        url: "experiences",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body,
      }),
      invalidatesTags: ["Experiences"],
    }),
  }),
});

export const {
  useGetExperiencesQuery,
  useAddExperienceMutation,
  useAddExperiencesMutation,
} = experiencesApi;
