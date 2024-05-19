import { ReactElement } from "react";
import CompanyProfile from "./CompanyProfile";
import EmployeeProfile from "./EmployeeProfile";

const user = {
  id: 1,
  email: "user1@jobhunter.hu",
  fullname: "Jake Peralta",
  role: "company",
};

const Profile = (): ReactElement => {
  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">Profilom</h2>
      </div>
      {user.role === "company" ? <CompanyProfile /> : <EmployeeProfile />}
    </>
  );
};

export default Profile;
