import { ReactElement } from "react";
import PageTitle from "../home/components/PageTitle";
import CompanyProfile from "./Company/CompanyProfile";
import JobseekerProfile from "./Jobseeker/JobseekerProfile";
import { useCookies } from "react-cookie";
import { useGetUserByIdQuery } from "../../services/users/usersApi";

const Profile = (): ReactElement => {
  const [cookies] = useCookies(["access_token"]);

  const token = cookies?.access_token?.token;
  const userId = cookies?.access_token?.userId;

  const { data: user } = useGetUserByIdQuery(
    { id: userId, token },
    { skip: !userId }
  );

  return (
    <>
      <PageTitle>Profilom</PageTitle>
      {token && userId && user?.role === "company" ? (
        <CompanyProfile />
      ) : (
        <JobseekerProfile />
      )}
    </>
  );
};

export default Profile;
