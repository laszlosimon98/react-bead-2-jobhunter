import { ReactElement } from "react";
import { useCookies } from "react-cookie";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  useGetExperiencesQuery,
  useDeleteExperienceMutation,
} from "../../../../services/experiences/experiencesApi";
import {
  modifyingOff,
  setValue,
} from "../../../../services/experiences/experiencesSlice";
import type { ExperienceType } from "../../../../types/experiencesType";
import Loading from "../../../components/Loading";
import { experienceModalOn } from "../../../../services/utils/visibilitySlice";

const JobseekerExperience = (): ReactElement => {
  const [cookie] = useCookies(["access_token"]);
  const token = cookie.access_token.token;

  const dispatch = useAppDispatch();
  const { isModifying } = useAppSelector((state) => state.experiences);
  const { data: experiences, isLoading } = useGetExperiencesQuery(token);
  const [deleteExperience] = useDeleteExperienceMutation();

  const handleModify = (experience: ExperienceType) => {
    const { id, company, title, interval } = experience;
    dispatch(setValue({ id, company, title, interval }));
    dispatch(experienceModalOn());
  };

  return (
    <>
      {isLoading && <Loading />}
      <table className="w-full mx-auto table-auto">
        <tbody className="text-center">
          {experiences?.data.map((experience) => (
            <tr key={experience.id}>
              <td className=" py-2 font-semibold opacity-80">
                {experience.company}
              </td>
              <td className="py-2">{experience.interval}</td>
              <td>{experience.title}</td>
              {isModifying && (
                <td className="flex flex-col md:flex-row justify-end sm:mr-3">
                  <button
                    onClick={() => handleModify(experience)}
                    className="border bg-emerald-500 cursor-pointer w-24 h-10 rounded-lg hover:bg-emerald-600 transition-all text-white shadow-lg sm:mr-2"
                  >
                    Szerkesztés
                  </button>
                  <button
                    onClick={() => {
                      {
                        deleteExperience({ id: experience.id, token });

                        if (experiences?.data.length === 1) {
                          dispatch(modifyingOff());
                        }
                      }
                    }}
                    className="border bg-red-500 cursor-pointer w-24 h-10 rounded-lg hover:bg-red-600 transition-all text-white shadow-lg md:w-16"
                  >
                    Törlés
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default JobseekerExperience;
