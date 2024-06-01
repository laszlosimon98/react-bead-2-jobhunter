/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LoginResultType } from "../types/userTypes";

type ResponseType = {
  data: LoginResultType;
};

export const translateType = (type: string) => {
  switch (type) {
    case "full-time":
      return "Teljes munkaidős";
    case "part-time":
      return "Részmunkaidős";
    case "internship":
      return "Gyakornoki";
    default:
      return "";
  }
};

export const formatNumber = (num: number) => {
  if (num.toString().length <= 3) {
    return num;
  }

  if (num.toString().length < 7) {
    return num
      .toString()
      .slice(0, num.toString().length - 3)
      .concat(".")
      .concat(num.toString().slice(num.toString().length - 3));
  } else {
    return num
      .toString()
      .slice(0, 1)
      .concat(".")
      .concat(num.toString().slice(1, 2))
      .concat(" M");
  }
};

export const saveCookie = (response: ResponseType, setCookie: any) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + response.data.authentication.payload.exp);

  setCookie(
    "access_token",
    {
      token: response.data.accessToken,
      userId: response.data.user.id,
    },
    {
      path: "/",
      expires,
    }
  );
};
