import { ReactElement } from "react";
import HomeOffice from "./components/HomeOffice";
import { Link } from "react-router-dom";
import { formatNumber, translateType } from "../../utils/util";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { jobModalOn } from "../../services/utils/visibilitySlice";

import type { JobType } from "../../types/jobsTypes";

type JobTableProps = {
  job: JobType;
};

const Job = ({ job }: JobTableProps): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <Link to={`jobs/${job.id}`} onClick={() => dispatch(jobModalOn())}>
      <div className="flex flex-col sm:flex-row justify-between items-center p-2 shadow-md my-2 cursor-pointer rounded-lg hover:p-3 hover:mb-1 hover:-mx-2 hover:bg-sky-200 transition-all">
        <div className="ml-2">
          <p className="font-semibold">{job.company}</p>
          <p className="text-sm opacity-70 text-center sm:text-left">
            {job.city}
          </p>
        </div>

        <div
          className={`flex items-center gap-10 ${
            job.homeOffice ? "justify-between" : "justify-end"
          }`}
        >
          {job.homeOffice ? <HomeOffice /> : ""}

          <div className="flex flex-col justify-end items-end mr-2 w-[12rem]">
            <p className="font-semibold">
              {formatNumber(job.salaryFrom)} Ft - {formatNumber(job.salaryTo)}{" "}
              Ft
            </p>
            <p className="text-sm opacity-70 self-center sm:self-end">
              {translateType(job.type)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Job;
