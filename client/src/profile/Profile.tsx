import { ReactElement } from "react";
import CompanyProfile from "./Company/CompanyProfile";
import JobseekerProfile from "./Jobseeker/JobseekerProfile";
import { tempUser } from "../temp/exampledata";
import PageTitle from "../home/PageTitle";

const Profile = (): ReactElement => {
  return (
    <>
      <PageTitle>Profilom</PageTitle>
      {tempUser.role === "company" ? <CompanyProfile /> : <JobseekerProfile />}
    </>
  );
};

export default Profile;
