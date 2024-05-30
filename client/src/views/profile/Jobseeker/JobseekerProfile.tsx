import { ReactElement } from "react";
import JobseekerTable from "./JobseekerTable";
import JobseekerExperience from "./JobseekerExperience";

const JobseekerProfile = (): ReactElement => {
  return (
    <div className="pt-10">
      <div className="h-fit w-table shadow-lg mx-auto rounded-lg">
        <div className="flex flex-col justify-between items-center py-2 px-4 shadow-lg rounded-lg gap-3 sm:flex-row sm:gap-0">
          <div>
            <h3 className="font-semibold text-xl p-1 pb-0 text-center sm:text-left">
              Személyes adatok
            </h3>
            <p className="px-1 text-sm opacity-70">
              Adataid és tapasztalataid egy helyen
            </p>
          </div>
          <button className="border bg-sky-400 cursor-pointer w-52 h-12 rounded-lg hover:bg-sky-500 transition-all text-white shadow-md">
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
    </div>
  );
};

export default JobseekerProfile;
