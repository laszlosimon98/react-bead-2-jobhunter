import { ReactElement } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import {
  creatingOn,
  modifyingOff,
  modifyingOn,
  openModal,
} from "../../../services/experiences/experiencesSlice";
import JobseekerExperienceModal from "./components/JobseekerExperienceModal";
import {
  useDeleteAllExperiencesMutation,
  useGetExperiencesQuery,
} from "../../../services/experiences/experiencesApi";
import { useCookies } from "react-cookie";
import JobseekerButton from "./components/JobseekerInput";
import JobseekerTable from "./components/JobseekerTable";
import JobseekerExperience from "./components/JobseekerExperience";

const JobseekerProfile = (): ReactElement => {
  const { isModifying, isModalOpen } = useAppSelector(
    (state) => state.experiences
  );

  const [cookie] = useCookies(["access_token"]);
  const token = cookie.access_token.token;

  const { data: experiences } = useGetExperiencesQuery(token);
  const [deleteAllExperiences] = useDeleteAllExperiencesMutation();

  return (
    <div className="pt-10">
      <div className="h-fit w-table mx-auto rounded-lg shadow-lg shadow-sky-400 pb-3">
        <div className="flex flex-col justify-between items-center py-2 px-4  rounded-lg gap-3 md:flex-row md:gap-0">
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
              {experiences?.data.length === 0 ? (
                <JobseekerButton
                  title="Tapasztalat hozzáadása"
                  w="w-52"
                  h="h-12"
                  color="bg-emerald-500"
                  hoverColor="bg-emerald-600"
                  func={openModal}
                  func2={creatingOn}
                  mdw="md:w-52"
                />
              ) : (
                <JobseekerButton
                  title="Tapasztalatok szerkesztése"
                  w="w-52"
                  h="h-12"
                  color="bg-sky-500"
                  hoverColor="bg-sky-600"
                  func={modifyingOn}
                  mdw="md:w-52"
                />
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 justify-center md:flex-row md:gap-1">
              <JobseekerButton
                title="Tapasztalat hozzáadása"
                w="w-52"
                h="h-12"
                color="bg-emerald-500"
                hoverColor="bg-emerald-600"
                func={openModal}
                func2={creatingOn}
                mdw="md:w-32"
              />
              <JobseekerButton
                title="Tapasztalatok törlése"
                w="w-52"
                h="h-12"
                color="bg-red-500"
                hoverColor="bg-red-600"
                func={modifyingOff}
                func3={() => deleteAllExperiences(token)}
                mdw="md:w-32"
              />
              <JobseekerButton
                title="Vissza"
                w="w-32"
                h="h-12"
                color="bg-sky-500"
                hoverColor="bg-sky-600"
                func={modifyingOff}
                mdw="md:w-20"
              />
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

        {isModalOpen && <JobseekerExperienceModal />}
      </div>
    </div>
  );
};

export default JobseekerProfile;
