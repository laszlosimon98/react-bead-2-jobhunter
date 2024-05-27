import { ReactElement } from "react";

const Option = (): ReactElement => {
  return (
    <div className="flex flex-col w-text">
      <label htmlFor="options" className="mb-1">
        Foglalkoztatás típusa
      </label>
      <select
        name="options"
        id="options"
        className="border px-2 rounded-lg h-9 outline-none"
      >
        <option value="full-time">Teljes állás</option>
        <option value="part-time">Részmunkaidős</option>
        <option value="internship">Gyakornoki</option>
      </select>
    </div>
  );
};

export default Option;
