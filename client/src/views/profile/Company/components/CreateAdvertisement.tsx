import { ReactElement } from "react";
import AdvertisementForm from "./AdvertisementForm";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { useCreateJobMutation } from "../../../../services/jobs/jobsApi";
import PageTitle from "../../../home/components/PageTitle";

const CreateAdvertisement = (): ReactElement => {
  const navigate = useNavigate();
  const {
    company,
    position,
    type,
    description,
    city,
    homeOffice,
    salaryFrom,
    salaryTo,
  } = useAppSelector((state) => state.jobs.data.advertisement);

  const [createJob] = useCreateJobMutation();

  const [cookies] = useCookies(["access_token"]);
  const token = cookies?.access_token?.token;

  const handleSave = () => {
    if (
      company &&
      position &&
      type &&
      description &&
      city &&
      homeOffice !== undefined &&
      salaryFrom &&
      salaryTo
    ) {
      createJob({
        token,
        company,
        position,
        type,
        description,
        city,
        homeOffice,
        salaryFrom: parseInt(salaryFrom.toString()),
        salaryTo: parseInt(salaryTo.toString()),
      });
    }

    navigate("/profile");
  };

  return (
    <>
      <PageTitle>Hirdetés Létrehozása</PageTitle>

      <div className="pt-10">
        <AdvertisementForm />
      </div>

      <div className="flex justify-evenly items-center mt-10 pb-10">
        <button
          onClick={handleSave}
          className="border bg-sky-500 cursor-pointer w-52 h-12 rounded-lg hover:bg-sky-600 text-lg transition-all text-white shadow-md"
        >
          Hirdetés hozzáadása
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="border bg-red-500 cursor-pointer w-24 h-12 rounded-lg hover:bg-red-600 text-lg transition-all text-white shadow-md"
        >
          Mégsem
        </button>
      </div>
    </>
  );
};

export default CreateAdvertisement;
