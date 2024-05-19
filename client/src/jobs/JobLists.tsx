import { ReactElement } from "react";
import Job from "./Job";
import { tempData } from "../temp/exampledata";

const JobLists = (): ReactElement => {
  return (
    <div className="flex flex-col w-[60rem] h-fit py-2">
      <h3 className="uppercase text-sky-600 self-start">Állás neve</h3>
      {tempData.map((data) => (
        <Job key={data.id} data={data} />
      ))}
    </div>
  );
};

export default JobLists;
