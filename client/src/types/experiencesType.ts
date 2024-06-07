import type { UserType } from "./userTypes";

export type ReturnedExperienceType = {
  id: number;
  company: string;
  title: string;
  interval: string;
  userId: number;
  user: UserType;
};

export type GetExperiencesType = {
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

export type ExperienceType = {
  id: number;
  title: string;
  company: string;
  interval: string;
};

export type ExperienceState = {
  [key: string]: string | boolean | ExperienceType;
  isModifying: boolean;
  isCreating: boolean;
  value: ExperienceType;
};
