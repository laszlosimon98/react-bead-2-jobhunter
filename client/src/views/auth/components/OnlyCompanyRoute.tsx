import { PropsWithChildren, ReactElement } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { useGetUserByIdQuery } from "../../../services/users/usersApi";

const OnlyCompanyRoute = ({ children }: PropsWithChildren): ReactElement => {
  const [cookies] = useCookies(["access_token"]);

  const userId = cookies?.access_token.userId;
  const token = cookies?.access_token.token;

  const { data: user } = useGetUserByIdQuery({ id: userId, token });

  if (user?.role === "jobseeker") return <Navigate to={"/"} />;
  return <>{children}</>;
};

export default OnlyCompanyRoute;
