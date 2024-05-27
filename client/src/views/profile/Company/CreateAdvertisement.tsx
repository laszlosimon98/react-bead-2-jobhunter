import { ReactElement } from "react";
import AdvertisementForm from "./AdvertisementForm";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../home/PageTitle";

const CreateAdvertisement = (): ReactElement => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/profile");
  };

  return (
    <>
      <PageTitle>Hirdetés Létrehozása</PageTitle>

      <div className="pt-10">
        <AdvertisementForm />
      </div>

      <div className="flex justify-evenly items-center mt-10">
        <button
          onClick={handleSave}
          className="border bg-sky-500 cursor-pointer w-52 h-12 rounded-lg hover:bg-sky-600 hover:w-[13.5rem] hover:h-14 text-lg transition-all text-white shadow-md"
        >
          Hirdetés hozzáadása
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="border bg-red-500 cursor-pointer w-24 h-12 rounded-lg hover:bg-red-600 hover:w-[6.5rem] hover:h-14 text-lg transition-all text-white shadow-md"
        >
          Mégsem
        </button>
      </div>
    </>
  );
};

export default CreateAdvertisement;
