import { ReactElement } from "react";
import PageTitle from "../home/PageTitle";
import { tempUser } from "../../temp/exampledata";
import CompanyProfile from "./Company/CompanyProfile";
import JobseekerProfile from "./Jobseeker/JobseekerProfile";

const Profile = (): ReactElement => {
  return (
    <>
      <PageTitle>Profilom</PageTitle>
      {tempUser.role === "company" ? <CompanyProfile /> : <JobseekerProfile />}
    </>
  );
};

export default Profile;
