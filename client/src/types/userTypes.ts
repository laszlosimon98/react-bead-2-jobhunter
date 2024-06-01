export type LoginType = {
  email: string;
  password: string;
  strategy: "local" | "jwt";
};

export type LoginResultType = {
  accessToken: string;
  authentication: {
    payload: {
      aud: string;
      exp: number;
      iat: number;
      jti: string;
      sub: string;
    };
    strategy: "local" | "jwt";
  };
  user: UserType;
};

export type RegisterType = {
  email: string;
  password: string;
  fullname: string;
  role: "jobseeker" | "company";
};

export type RegisterResultType = {
  id: number;
  email: string;
  fullname: string;
  role: "jobseeker" | "company";
};

export type UserType = {
  id: number;
  email: string;
  fullname: string;
  role: "jobseeker" | "company";
};

export type AuthType = {
  id: number;
  token: string;
};

export type AuthState = {
  data: {
    login: {
      email: string;
      password: string;
    };
    register: {
      [key: string]: string | undefined;
      fullname: string;
      email: string;
      password: string;
      password_again: string;
      role: "jobseeker" | "company";
      experiences?: string;
    };
    errors: {
      [key: string]: string | undefined;
      email?: string;
      password?: string;
      fullname?: string;
      passwordMatch?: string;
    };
  };
};
