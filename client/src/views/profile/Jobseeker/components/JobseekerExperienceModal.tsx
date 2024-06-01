import { ReactElement } from "react";
import ExperienceInput from "../../../components/ExperienceInput";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { useCookies } from "react-cookie";
import {
  useAddExperienceMutation,
  useModifyExperienceMutation,
} from "../../../../services/experiences/experiencesApi";
import Loading from "../../../components/Loading";
import {
  closeModal,
  creatingOff,
  setFormEmpty,
} from "../../../../services/experiences/experiencesSlice";

const JobseekerExperienceModal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { value, isCreating } = useAppSelector((state) => state.experiences);
  const [modifyExperience] = useModifyExperienceMutation();
  const [addExperience] = useAddExperienceMutation();

  const [cookie] = useCookies(["access_token"]);
  const token = cookie.access_token.token;

  const handleModify = () => {
    modifyExperience({ token, ...value });

    dispatch(closeModal());
    dispatch(setFormEmpty());
  };

  const handleCreate = () => {
    const { company, title, interval } = value;
    addExperience({ token, company, title, interval });

    dispatch(closeModal());
    dispatch(setFormEmpty());
    dispatch(creatingOff());
  };

  const isLoading = false;
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 pb-4">
        <div className="border w-jobModal h-[17rem] py-3 shadow-lg bg-white rounded-lg">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="flex items-center flex-col h-full gap-5">
              <h3 className="text-2xl text-sky-600">
                {isCreating
                  ? "Tapasztalat létrehozása"
                  : `${value?.company} módosítása`}
              </h3>
              <ExperienceInput title="Név" _for="company" />
              <ExperienceInput title="Pozíció" _for="title" />
              <ExperienceInput title="Év" _for="interval" />
              <div className="w-1/2 flex justify-evenly items-center">
                <button
                  onClick={isCreating ? handleCreate : handleModify}
                  className="border bg-emerald-500 cursor-pointer w-20 h-10 rounded-lg hover:bg-emerald-600 transition-all text-white shadow-lg"
                >
                  Mentés
                </button>
                <button
                  onClick={() => {
                    dispatch(closeModal());
                    dispatch(creatingOff());
                    dispatch(setFormEmpty());
                  }}
                  className="border bg-sky-500 cursor-pointer w-20 h-10 rounded-lg hover:bg-sky-600 transition-all text-white shadow-lg"
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
