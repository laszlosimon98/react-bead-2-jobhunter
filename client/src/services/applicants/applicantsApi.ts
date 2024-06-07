import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ParamApplicantsType,
  ReturnedApplicantsType,
} from "../../types/applicantsTypes";

const baseUrl = "http://localhost:3030/";

export const applicantsApi = createApi({
  reducerPath: "applicantsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Applicants"],
  endpoints: (builder) => ({
    applyJob: builder.mutation<
      ReturnedApplicantsType[],
      { token: string; body: { jobId: number } }
    >({
      query: ({ token, body }) => ({
        url: "applicants",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body,
      }),
      invalidatesTags: ["Applicants"],
    }),
    removeApplication: builder.mutation<
      { userId: number; jobId: number },
      ParamApplicantsType
    >({
      query: ({ token, jobId }) => ({
        url: `applicants?jobId=${jobId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      }),
      invalidatesTags: ["Applicants"],
    }),
    getApplicantsForAJob: builder.query<
      ReturnedApplicantsType[],
      ParamApplicantsType
    >({
      query: ({ token, jobId }) => ({
        url: `applicants?jobId=${jobId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Applicants"],
    }),
    getJobsForAnApplicant: builder.query<
      ReturnedApplicantsType[],
      ParamApplicantsType
    >({
      query: ({ token, userId }) => ({
        url: `applicants?userId=${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Applicants"],
    }),
  }),
});

export const {
  useApplyJobMutation,
  useRemoveApplicationMutation,
  useGetApplicantsForAJobQuery,
  useGetJobsForAnApplicantQuery,
} = applicantsApi;
