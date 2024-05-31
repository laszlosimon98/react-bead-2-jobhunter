import { ReactElement } from "react";
import Input from "../components/Input";
import Option from "../components/Option";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setFilter } from "../../services/jobs/jobsSlice";

const FilterDropdown = (): ReactElement => {
  const homeOffice = useAppSelector(
    (state) => state.jobs.data.filter.homeOffice
  );
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white absolute w-filter right-0 top-24 h-[29rem] shadow-lg shadow-sky-400 rounded-lg p-5 z-10 lg:h-[20rem]">
      <h3 className="font-bold text-3xl text-center lg:text-left">Szűrők</h3>
      <div className="flex flex-col justify-around items-center mt-5 gap-3 lg:gap-0 lg:flex-row">
        <Input title="Fizetési sáv alja" type="number" name="salaryFrom" />
        <Input title="Fizetési sáv teteje" type="number" name="salaryTo" />
      </div>

      <div className="flex flex-col justify-around items-center mt-8 gap-3 lg:gap-0 lg:flex-row">
        <Option />
        <Input title="Település" type="text" name="city" />
      </div>

      <div className="mt-6 text-center">
        <input
          type="checkbox"
          id="homeoffice"
          checked={homeOffice}
          onChange={() =>
            dispatch(setFilter({ name: "homeOffice", value: !homeOffice }))
          }
        />
        <label htmlFor="homeoffice" className="ml-3">
          Home Office Lehetőség
        </label>
      </div>
    </div>
  );
};

export default FilterDropdown;
