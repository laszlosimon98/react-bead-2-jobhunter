import { ReactElement } from "react";
import Input from "../formComponents/Input";
import Option from "../formComponents/Option";

const FilterDropdown = (): ReactElement => {
  return (
    <div className="bg-white absolute w-[54rem] right-0 top-24 h-[19rem] shadow-xl rounded-lg p-5 z-10">
      <h3 className="font-bold text-3xl">Szűrők</h3>
      <div className="flex justify-around items-center mt-5">
        <Input title="Fizetési sáv alja" type="text" />
        <Input title="Fizetési sáv teteje" type="text" />
      </div>

      <div className="flex justify-around items-center mt-8">
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
