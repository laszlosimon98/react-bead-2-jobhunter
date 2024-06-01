import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  GetExperiencesType,
  ParamExperienceType,
  ReturnedExperienceType,
} from "../../types/experiencesType";

const baseUrl = "http://localhost:3030";

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
      ReturnedExperienceType,
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
      ReturnedExperienceType[],
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
    modifyExperience: builder.mutation<
      ReturnedExperienceType,
      { id: number; token: string } & ParamExperienceType
    >({
      query: ({ id, token, ...patch }) => ({
        url: `experiences/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: patch,
      }),
      invalidatesTags: ["Experiences"],
    }),
    deleteExperience: builder.mutation<
      ReturnedExperienceType,
      { id: number; token: string }
    >({
      query: ({ id, token }) => ({
        url: `experiences/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Experiences"],
    }),
    deleteAllExperiences: builder.mutation<ReturnedExperienceType, string>({
      query: (token) => ({
        url: `experiences`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Experiences"],
    }),
  }),
});

export const {
  useGetExperiencesQuery,
  useAddExperienceMutation,
  useAddExperiencesMutation,
  useModifyExperienceMutation,
  useDeleteExperienceMutation,
  useDeleteAllExperiencesMutation,
} = experiencesApi;
