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

export type GetJobsType = {
  total: number;
  skip: number;
  limit: number;
  data: JobType[];
};

export type CreatedType = {
  id: number;
  email: string;
  fullname: string;
  role: string;
};

export type JobReturnedType = JobType & {
  createdBy: CreatedType;
};

export type KeyType = {
  [key: string]: string | boolean | number;
};

export type FilteredType = {
  isFiltered: boolean;
};

export type JobsState = {
  data: {
    search: Partial<JobType>;
    filter: Partial<JobType> & KeyType & FilteredType;
    advertisement: Partial<JobType> & KeyType;
  };
};
