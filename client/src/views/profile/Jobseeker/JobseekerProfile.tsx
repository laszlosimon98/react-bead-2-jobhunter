import { ReactElement } from "react";
import JobseekerTable from "./JobseekerTable";
import JobseekerExperience from "./JobseekerExperience";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { toggleModifying } from "../../../services/experiences/experiencesSlice";
import JobseekerExperienceModal from "./JobseekerExperienceModal";
import { useDeleteAllExperiencesMutation } from "../../../services/experiences/experiencesApi";
import { useCookies } from "react-cookie";

const JobseekerProfile = (): ReactElement => {
  const { isModifying, isSelected } = useAppSelector(
    (state) => state.experiences
  );
  const dispatch = useAppDispatch();
  const [deleteAllExperiences] = useDeleteAllExperiencesMutation();

  const [cookie] = useCookies(["access_token"]);
  const token = cookie.access_token.token;

  return (
    <div className="pt-10">
      <div className="h-fit w-table mx-auto rounded-lg shadow-lg shadow-sky-400 pb-3">
        <div className="flex flex-col justify-between items-center py-2 px-4  rounded-lg gap-3 sm:flex-row sm:gap-0">
          <div>
            <h3 className="font-semibold text-xl p-1 pb-0 text-center sm:text-left">
              Személyes adatok
            </h3>
            <p className="px-1 text-sm opacity-70">
              Adataid és tapasztalataid egy helyen
            </p>
          </div>
          {!isModifying ? (
            <div className="flex flex-col items-center gap-2 justify-center sm:flex-row sm:gap-1">
              <button
                onClick={() => {
                  dispatch(toggleModifying());
                }}
                className="border bg-sky-500 cursor-pointer w-52 h-12 rounded-lg hover:bg-sky-600 transition-all text-white shadow-lg sm:w-36 md:w-52"
              >
                Tapasztalatok szerkesztése
              </button>
              <button
                onClick={() => {
                  deleteAllExperiences(token);
                }}
                className="border bg-red-500 cursor-pointer w-44 h-12 rounded-lg hover:bg-red-600 transition-all text-white shadow-lg sm:w-28 md:w-44"
              >
                Tapasztalatok törlése
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 justify-center sm:flex-row sm:gap-1">
              <button
                onClick={() => {
                  dispatch(toggleModifying());
                }}
                className="border bg-emerald-500 cursor-pointer w-32 h-12 rounded-lg hover:bg-emerald-600 transition-all text-white shadow-lg"
              >
                Új tapasztalat
              </button>
              <button
                onClick={() => {
                  dispatch(toggleModifying());
                }}
                className="border bg-sky-500 cursor-pointer w-32 h-12 rounded-lg hover:bg-sky-600 transition-all text-white shadow-lg"
              >
                Vissza
              </button>
            </div>
          )}
        </div>

        <JobseekerTable />

        <div className="flex justify-between items-center py-2 px-4 mt-5">
          <h3 className="font-semibold text-xl p-1 pb-0">
            Korábbi Tapasztalatok
          </h3>
        </div>

        <JobseekerExperience />

        {isSelected && <JobseekerExperienceModal />}
      </div>
    </div>
  );
};

export default JobseekerProfile;
