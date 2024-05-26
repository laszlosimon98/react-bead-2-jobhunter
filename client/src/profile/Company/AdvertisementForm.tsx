import { ReactElement } from "react";
import Input from "../../components/Input";
import Option from "../../components/Option";
import TextArea from "../../components/TextArea";

const AdvertisementForm = (): ReactElement => {
  return (
    <div className="h-fit w-[60rem] shadow-lg mx-auto  rounded-lg p-5">
      <form>
        <div className="flex justify-around">
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
        <div className="flex justify-around items-center mt-6">
          <div>
            <input type="checkbox" id="homeoffice" />
            <label htmlFor="homeoffice" className="ml-3">
              Home Office Lehetőség
            </label>
          </div>

          <div className="flex justify-around w-[36rem]">
            <Input title="Fizetési sáv alja" type="number" />
            <Input title="Fizetési sáv teteje" type="number" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdvertisementForm;
