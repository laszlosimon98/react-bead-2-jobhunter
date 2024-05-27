import { ReactElement } from "react";
import Input from "../../components/Input";
import Option from "../../components/Option";
import TextArea from "../../components/TextArea";

const AdvertisementForm = (): ReactElement => {
  return (
    <div className="h-[750px] w-advertisement shadow-lg mx-auto rounded-lg p-5 lg:h-[400px]">
      <form>
        <div className="flex flex-col justify-center items-center lg:justify-around lg:flex-row">
          <div className="flex flex-col gap-5">
            <Input title="Cégnév" type="text" />
            <Option />
            <Input title="Település" type="text" />
          </div>

          <div className="flex flex-col gap-5">
            <Input title="Pozíció neve" type="text" />
            <TextArea title="Leírás" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-6 lg:justify-around lg:flex-row">
          <div>
            <input type="checkbox" id="homeoffice" />
            <label htmlFor="homeoffice" className="ml-3">
              Home Office Lehetőség
            </label>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 sm:flex-row sm:justify-around">
            <Input title="Fizetési sáv alja" type="number" />
            <Input title="Fizetési sáv teteje" type="number" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdvertisementForm;
