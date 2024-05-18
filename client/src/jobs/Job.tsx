import { ReactElement } from "react";
import HomeOffice from "./HomeOffice";

const Job = ({ data }): ReactElement => {
  const translateType = (type: string) => {
    switch (type) {
      case "full-time":
        return "Teljes munkaidős";
      case "part-time":
        return "Részmunkaidős";
      case "internship":
        return "Gyakornoki";
      default:
        return "";
    }
  };

  const formatNumber = (num: number) => {
    if (num.toString().length < 7) {
      return num
        .toString()
        .slice(0, num.toString().length - 3)
        .concat(".")
        .concat(num.toString().slice(num.toString().length - 3));
    } else {
      return num
        .toString()
        .slice(0, 1)
        .concat(".")
        .concat(num.toString().slice(1, 2))
        .concat(" M");
    }
  };

  return (
    <div className="flex justify-between items-center p-2 shadow-md my-2 hover:bg-stone-200 cursor-pointer rounded-lg hover:p-3 hover:mb-1 hover:-mx-2 transition-all">
      <div className="">
        <p className="font-semibold">{data.company}</p>
        <p className="text-sm opacity-70">{data.city}</p>
      </div>

      <div
        className={`flex items-center w-[20rem] ${
          data.homeOffice ? "justify-between" : "justify-end"
        }`}
      >
        {data.homeOffice ? <HomeOffice /> : ""}

        <div className="flex flex-col justify-end items-end">
          <p className="font-semibold">
            {formatNumber(data.salaryFrom)}-{formatNumber(data.salaryTo)} Ft
          </p>
          <p className="text-sm opacity-70">{translateType(data.type)}</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
