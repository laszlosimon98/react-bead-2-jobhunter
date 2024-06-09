import { PropsWithChildren, ReactElement } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: PropsWithChildren): ReactElement => {
  const [cookies] = useCookies(["access_token"]);
  const isLoggedIn = cookies.access_token !== undefined;

  if (!isLoggedIn) return <Navigate to={"/"} />;

  return <>{children}</>;
};

export default ProtectedRoute;
