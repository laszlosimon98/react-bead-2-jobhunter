/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LoginResultType } from "../types/userTypes";

type ResponseType = {
  data: LoginResultType;
};

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

export const translateType = (type: string): string => {
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

export const formatNumber = (num: number): string => {
  let result = "";
  const reversed = reverseString(num.toString());
  const loop = Math.floor(num.toString().length / 3);

  for (let i = 0; i < loop; ++i) {
    result += reversed.slice(i * 3, i * 3 + 3).concat(".");
  }
  result += reversed.slice(loop * 3, loop * 3 + 3);
  result = reverseString(result).replace(/^\./, "");

  if (result.length > 7) {
    const dotIndex = result.indexOf(".");
    result = result.slice(0, dotIndex + 2).concat("M");
  }

  return result;
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
