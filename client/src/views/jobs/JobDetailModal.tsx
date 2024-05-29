import { ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tempData } from "../../temp/exampledata";
import { formatNumber, translateType } from "../../utils/util";
import HomeOffice from "./HomeOffice";
import JobTable from "./JobTable";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { modalOff } from "../../services/utils/visibilitySlice";

const JobDetailModal = (): ReactElement => {
  const { jobId } = useParams();
  const job = tempData.find((data) => data.id === parseInt(jobId as string));

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(modalOff());
    navigate("/");
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div className="absolute top-16 left-1/2 -translate-x-1/2 pb-4">
        <div className="border w-jobModal h-[29rem] py-3 shadow-lg bg-white rounded-lg overflow-y-scroll">
          <div className="shadow-lg flex flex-col items-center justify-between gap-1 sm:h-16 sm:flex-row sm:gap-0">
            <div className="flex items-center justify-around flex-col md:flex-row">
              <h2 className="font-bold text-jobtitle px-7 text-sky-600 text-center sm:text-left">
                {job?.company}
              </h2>
              {job?.homeOffice ? <HomeOffice /> : ""}
            </div>

            <div className="mr-2 text-center sm:text-left md:mr-10">
              <p className="font-semibold text-price">
                {formatNumber(job?.salaryFrom as number)}-
                {formatNumber(job?.salaryTo as number)} Ft
              </p>
              <p className="opacity-70 text-price">
                {translateType(job?.type as string)}
              </p>
            </div>
          </div>

          <div className="min-w-[20vw] w-[75vw] max-w-[900px] mx-auto">
            <div className="flex flex-col justify-center items-center gap-2 p-3 text-center sm:text-left sm:flex-row sm:justify-between sm:gap-0">
              <div>
                <h3 className="font-semibold text-lg">Cég részletei</h3>
                <p className="opacity-70">
                  Megtetszett a lehetőség? Jelentkezz!
                </p>
              </div>
              <button className="bg-sky-600 w-32 h-12 text-xl rounded-lg text-white cursor-pointer hover:bg-sky-500 hover:w-[8.5rem] hover:h-14 transition-all ">
                Jelentkezés
              </button>
            </div>

            <JobTable job={job} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailModal;
