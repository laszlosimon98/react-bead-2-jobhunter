import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthType } from "../users/usersApi";

const baseUrl = "http://localhost:3030";

export type JobType = {
  id: number;
  company: string;
  position: string;
  description: string;
  salaryFrom: number;
  salaryTo: number;
  type: "full-time" | "part-time" | "internship";
  city: string;
  homeOffice: boolean;
  userId: number;
};

type GetJobsType = {
  total: number;
  skip: number;
  limit: number;
  data: JobType[];
};

type CreatedType = {
  id: number;
  email: string;
  fullname: string;
  role: string;
};

type JobCreatedType = JobType & {
  createdBy: CreatedType;
};

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
    getJobByCompanyName: builder.query<GetJobsType, FilterType>({
      query: ({ company, salaryFrom, salaryTo, type, city, homeOffice }) =>
        `jobs?company[$like]=%${company}%&salaryFrom[$gt]=${salaryFrom}&salaryTo[$lt]=${salaryTo}&type=${type}&city=${city}&homeOffice=${homeOffice}`,
      providesTags: ["Jobs"],
    }),
    createJob: builder.mutation<
      JobCreatedType,
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
      JobCreatedType,
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
    deleteJob: builder.mutation<JobCreatedType, AuthType>({
      query: ({ id, token }) => ({
        url: `jobs/${id}`,
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
  useCreateJobMutation,
  useModifyJobMutation,
  useDeleteJobMutation,
} = jobsApi;
