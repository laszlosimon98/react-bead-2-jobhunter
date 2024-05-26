import { ReactElement } from "react";
import AdvertisementForm from "./AdvertisementForm";
import { useNavigate } from "react-router-dom";

const CreateAdvertisement = (): ReactElement => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/");
  };
  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">
          Hirdetés Létrehozása
        </h2>
      </div>

      <AdvertisementForm />
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handleSave}
          className="border bg-sky-500 cursor-pointer py-3 px-5 rounded-lg hover:bg-sky-600 hover:py-4 hover:px-6 text-lg transition-all text-white shadow-md"
        >
          Hirdetés hozzáadása
        </button>
      </div>
    </>
  );
};

export default CreateAdvertisement;
