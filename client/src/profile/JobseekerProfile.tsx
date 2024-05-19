import { ReactElement } from "react";
import JobseekerTable from "./Jobseeker/JobseekerTable";
import JobseekerExperience from "./Jobseeker/JobseekerExperience";

const JobseekerProfile = (): ReactElement => {
  return (
    <div className="h-fit w-[80rem] shadow-lg mx-auto mt-20 rounded-lg">
      <div className="flex justify-between items-center py-2 px-4 shadow-lg rounded-lg">
        <div>
          <h3 className="font-semibold text-xl p-1 pb-0">Személyes adatok</h3>
          <p className="px-1 text-sm opacity-70">
            Adataid és tapasztalataid egy helyen
          </p>
        </div>
        <button className="border bg-sky-400 cursor-pointer py-2 px-4 rounded-lg hover:bg-sky-500 hover:py-[0.7rem] hover:px-[1.2rem] transition-all text-white shadow-md">
          Tapasztalakok szerkesztése
        </button>
      </div>

      <JobseekerTable />

      <hr />
      <div className="flex justify-between items-center py-2 px-4 mt-5">
        <h3 className="font-semibold text-xl p-1 pb-0">
          Korábbi Tapasztalatok
        </h3>
      </div>

      <JobseekerExperience />
    </div>
  );
};

export default JobseekerProfile;
