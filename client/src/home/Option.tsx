import { ReactElement } from "react";

const Option = (): ReactElement => {
  return (
    <div className="flex flex-col w-[18rem]">
      <label htmlFor="options" className="mb-1">
        Foglalkoztatás típusa
      </label>
      <select
        name="options"
        id="options"
        className="border px-2 rounded-lg h-8"
      >
        <option value="full-time">Teljes állás</option>
        <option value="part-time">Részmunkaidős</option>
        <option value="internship">Gyakornoki</option>
      </select>
    </div>
  );
};

export default Option;
