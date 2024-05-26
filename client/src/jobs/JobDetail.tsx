import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import HomeOffice from "./HomeOffice";
import { formatNumber, translateType } from "../utils/util";
import JobTable from "./JobTable";
import { tempData } from "../temp/exampledata";

const JobDetail = (): ReactElement => {
  const { jobId } = useParams();
  const job = tempData.find((data) => data.id === parseInt(jobId as string));

  return (
    <>
      <div className="w-full shadow-lg h-16 flex items-center justify-between fixed top-16">
        <div className="flex items-center">
          <h2 className="font-bold text-3xl px-7 text-sky-600">
            {job?.company}
          </h2>
          {job?.homeOffice ? <HomeOffice /> : ""}
        </div>

        <div className="mr-10">
          <p className="font-semibold">
            {formatNumber(job?.salaryFrom as number)}-
            {formatNumber(job?.salaryTo as number)} Ft
          </p>
          <p className="text-sm opacity-70">
            {translateType(job?.type as string)}
          </p>
        </div>
      </div>

      <div className="w-3/4 mx-auto pt-24">
        <div className="flex justify-between items-center p-3">
          <div>
            <h3 className="font-semibold text-lg">Cég részletei</h3>
            <p className="opacity-70">Megtetszett a lehetőség? Jelentkezz!</p>
          </div>
          <button className="bg-sky-600 w-32 h-12 text-xl rounded-lg text-white cursor-pointer hover:bg-sky-500 hover:w-[8.5rem] hover:h-14 transition-all ">
            Jelentkezés
          </button>
        </div>

        <JobTable job={job} />
      </div>
    </>
  );
};

export default JobDetail;
