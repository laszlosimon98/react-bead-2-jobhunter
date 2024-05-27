import { ReactElement } from "react";
import HomeOffice from "./HomeOffice";
import { Link } from "react-router-dom";
import { formatNumber, translateType } from "../utils/util";

const Job = ({ data }): ReactElement => {
  return (
    <Link to={`jobs/${data.id}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center p-2 shadow-md my-2 hover:bg-stone-200 cursor-pointer rounded-lg hover:p-3 hover:mb-1 hover:-mx-2 transition-all">
        <div className="">
          <p className="font-semibold">{data.company}</p>
          <p className="text-sm opacity-70 text-center sm:text-left">
            {data.city}
          </p>
        </div>

        <div
          className={`flex items-center gap-10 ${
            data.homeOffice ? "justify-between" : "justify-end"
          }`}
        >
          {data.homeOffice ? <HomeOffice /> : ""}

          <div className="flex flex-col justify-end items-end">
            <p className="font-semibold">
              {formatNumber(data.salaryFrom)}-{formatNumber(data.salaryTo)} Ft
            </p>
            <p className="text-sm opacity-70 self-center sm:self-end">
              {translateType(data.type)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Job;
