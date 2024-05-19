import { ReactElement } from "react";
import CompanyProfile from "./CompanyProfile";
import JobseekerProfile from "./JobseekerProfile";
import { tempUser } from "../temp/exampledata";

const Profile = (): ReactElement => {
  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">Profilom</h2>
      </div>
      {tempUser.role === "company" ? <CompanyProfile /> : <JobseekerProfile />}
    </>
  );
};

export default Profile;
