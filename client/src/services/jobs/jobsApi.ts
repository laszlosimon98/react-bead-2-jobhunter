import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  JobType,
  GetJobsType,
  JobReturnedType,
} from "../../types/jobsTypes";
import type { AuthType } from "../../types/userTypes";

const baseUrl = "http://localhost:3030";

type FilterType = Partial<JobType>;

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Jobs"],
  endpoints: (builder) => ({
    getJobs: builder.query<GetJobsType, void>({
      query: () => `jobs`,
      providesTags: ["Jobs"],
    }),
    getJobById: builder.query<JobType, number>({
      query: (id: number) => `jobs/${id}`,
      providesTags: ["Jobs"],
    }),
    getJobByIdWithAuth: builder.query<JobType, AuthType>({
      query: ({ token, id }) => ({
        url: `jobs/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Jobs"],
    }),
    getJobByUserId: builder.query<GetJobsType, number>({
      query: (userId: number) => `jobs?userId=${userId}`,
      providesTags: ["Jobs"],
    }),
    getJobByCompanyName: builder.query<GetJobsType, string>({
      query: (company) => `jobs?company[$like]=%${company}%`,
      providesTags: ["Jobs"],
    }),
    getJobByFilter: builder.query<GetJobsType, FilterType>({
      query: ({ company, salaryFrom, salaryTo, type, city, homeOffice }) =>
        `jobs?company[$like]=%${company}%&salaryFrom[$gt]=${
          (salaryFrom as number) - 1
        }&salaryTo[$lt]=${
          (salaryTo as number) + 1
        }&type=${type}&city=${city}&homeOffice=${homeOffice}`,
      providesTags: ["Jobs"],
    }),
    createJob: builder.mutation<
      JobReturnedType,
      Omit<Omit<JobType, "id">, "userId"> & { token: string }
    >({
      query: ({ token, ...patch }) => ({
        url: "jobs",
        method: "POST",
        body: patch,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Jobs"],
    }),
    modifyJob: builder.mutation<
      JobReturnedType,
      Omit<Omit<JobType, "id">, "userId"> & { token: string; id: number }
    >({
      query: ({ id, token, ...patch }) => ({
        url: `jobs/${id}`,
        method: "PATCH",
        body: patch,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Jobs"],
    }),
    deleteJob: builder.mutation<JobReturnedType, AuthType>({
      query: ({ id, token }) => ({
        url: `jobs/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Jobs"],
    }),
    deleteAllJob: builder.mutation<JobReturnedType[], string>({
      query: (token) => ({
        url: "jobs",
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Jobs"],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useGetJobByIdWithAuthQuery,
  useGetJobByUserIdQuery,
  useGetJobByCompanyNameQuery,
  useGetJobByFilterQuery,
  useCreateJobMutation,
  useModifyJobMutation,
  useDeleteJobMutation,
  useDeleteAllJobMutation,
} = jobsApi;
