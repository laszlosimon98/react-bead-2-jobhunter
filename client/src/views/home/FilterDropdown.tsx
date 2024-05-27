import { ReactElement } from "react";
import Input from "../components/Input";
import Option from "../components/Option";

const FilterDropdown = (): ReactElement => {
  return (
    <div className="bg-white absolute w-filter right-0 top-24 h-[29rem] shadow-xl rounded-lg p-5 z-10 lg:h-[20rem]">
      <h3 className="font-bold text-3xl text-center lg:text-left">Szűrők</h3>
      <div className="flex flex-col justify-around items-center mt-5 gap-3 lg:gap-0 lg:flex-row">
        <Input title="Fizetési sáv alja" type="text" />
        <Input title="Fizetési sáv teteje" type="text" />
      </div>

      <div className="flex flex-col justify-around items-center mt-8 gap-3 lg:gap-0 lg:flex-row">
        <Option />
        <Input title="Fizetési sáv teteje" type="text" />
      </div>

      <div className="mt-6 text-center">
        <input type="checkbox" id="homeoffice" />
        <label htmlFor="homeoffice" className="ml-3">
          Home Office Lehetőség
        </label>
      </div>
    </div>
  );
};

export default FilterDropdown;
