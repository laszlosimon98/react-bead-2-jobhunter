import { ReactElement } from "react";
import PageTitle from "../home/PageTitle";
import CompanyProfile from "./Company/CompanyProfile";
import JobseekerProfile from "./Jobseeker/JobseekerProfile";
import { useAppSelector } from "../../hooks/reduxHooks";
import { userType } from "../../services/authSlice";

const Profile = (): ReactElement => {
  const user = useAppSelector((state) => state.auth.data) as userType;

  return (
    <>
      <PageTitle>Profilom</PageTitle>
      {user.role === "company" ? <CompanyProfile /> : <JobseekerProfile />}
    </>
  );
};

export default Profile;
