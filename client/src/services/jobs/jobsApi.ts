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

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getJobs: builder.query<GetJobsType, void>({
      query: () => `jobs`,
    }),
    getJobByID: builder.query<JobType, number>({
      query: (id: number) => `jobs/${id}`,
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIDQuery } = jobsApi;
