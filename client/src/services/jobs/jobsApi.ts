import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3030";

type JobType = {
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

type FilterType = {
  company: string;
  salaryFrom: number;
  salaryTo: number;
  type: "full-time" | "part-time" | "internship";
  city: string;
  homeOffice: boolean;
};

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getJobs: builder.query<GetJobsType, void>({
      query: () => `jobs`,
    }),
    getJobById: builder.query<JobType, number>({
      query: (id: number) => `jobs/${id}`,
    }),
    getJobByUserId: builder.query<GetJobsType, number>({
      query: (userId: number) => `jobs?userId=${userId}`,
    }),
    getJobByCompanyName: builder.query<GetJobsType, FilterType>({
      query: ({ company, salaryFrom, salaryTo, type, city, homeOffice }) =>
        `jobs?company[$like]=%${company}%&salaryFrom[$gt]=${salaryFrom}&salaryTo[$lt]=${salaryTo}&type=${type}&city=${city}&homeOffice=${homeOffice}`,
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useGetJobByUserIdQuery,
  useGetJobByCompanyNameQuery,
} = jobsApi;
