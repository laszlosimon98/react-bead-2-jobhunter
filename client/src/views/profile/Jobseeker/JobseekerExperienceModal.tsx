import { ReactElement } from "react";
import ExperienceInput from "../../components/ExperienceInput";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { toggleSelected } from "../../../services/experiences/experiencesSlice";
import { useCookies } from "react-cookie";
import { useModifyExperienceMutation } from "../../../services/experiences/experiencesApi";

const JobseekerExperienceModal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.experiences);
  const [modifyExperience] = useModifyExperienceMutation();

  const [cookie] = useCookies(["access_token"]);
  const token = cookie.access_token.token;

  const handleSave = () => {
    modifyExperience({ token, ...value });
    dispatch(toggleSelected());
  };

  const isLoading = false;
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 pb-4">
        <div className="border w-jobModal h-[17rem] py-3 shadow-lg bg-white rounded-lg">
          {isLoading ? (
            <div className="text-3xl flex justify-center items-center h-full opacity-65">
              Loading...
            </div>
          ) : (
            <div className="flex items-center flex-col h-full gap-5">
              <h3 className="text-2xl text-sky-600">
                {value?.company} módosítása
              </h3>
              <ExperienceInput title="Név" _for="company" />
              <ExperienceInput title="Pozíció" _for="title" />
              <ExperienceInput title="Év" _for="interval" />
              <div className="flex gap-5">
                <button
                  onClick={handleSave}
                  className="border bg-emerald-500 cursor-pointer w-32 h-10 rounded-lg hover:bg-emerald-600 transition-all text-white shadow-lg"
                >
                  Mentés
                </button>
                <button
                  onClick={() => dispatch(toggleSelected())}
                  className="border bg-sky-500 cursor-pointer w-32 h-10 rounded-lg hover:bg-sky-600 transition-all text-white shadow-lg"
                >
                  Vissza
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobseekerExperienceModal;
