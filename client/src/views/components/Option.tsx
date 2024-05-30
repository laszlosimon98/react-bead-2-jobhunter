import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setFilter } from "../../services/utils/form/formSlice";

const Option = (): ReactElement => {
  const type = useAppSelector((state) => state.form.data.filter.type);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col w-text">
      <label htmlFor="type" className="mb-1">
        Foglalkoztatás típusa
      </label>
      <select
        name="type"
        id="type"
        className="border px-2 rounded-lg h-9 outline-none"
        value={type}
        onChange={(e) =>
          dispatch(setFilter({ name: e.target.name, value: e.target.value }))
        }
      >
        <option value="full-time">Teljes állás</option>
        <option value="part-time">Részmunkaidős</option>
        <option value="internship">Gyakornoki</option>
      </select>
    </div>
  );
};

export default Option;
