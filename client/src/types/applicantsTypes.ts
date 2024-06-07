import { JobType } from "./jobsTypes";
import { UserType } from "./userTypes";

export type ReturnedApplicantsType = {
  userId: number;
  jobId: number;
  user: UserType;
  job: JobType;
};

export type ParamApplicantsType = {
  token: string;
  jobId?: number;
  userId?: number;
};
