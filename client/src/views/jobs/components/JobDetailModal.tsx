import { ReactElement, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { formatNumber, translateType } from "../../../utils/util";
import HomeOffice from "./HomeOffice";
import JobTable from "./JobTable";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { useGetJobByIdQuery } from "../../../services/jobs/jobsApi";
import { useCookies } from "react-cookie";
import { useGetUserByIdQuery } from "../../../services/users/usersApi";
import Loading from "../../components/Loading";
import { jobModalOff } from "../../../services/utils/visibilitySlice";
import AppliedJobs from "./AppliedJobs";

const JobDetailModal = (): ReactElement => {
  const location = useLocation();
  const { jobId } = useParams();
  const [cookies] = useCookies(["access_token"]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCloseAble, setIsCloseAble] = useState<boolean>(true);

  const token = cookies?.access_token?.token;
  const userId = cookies?.access_token?.userId;

  const { data: job, isLoading: isJobsLoading } = useGetJobByIdQuery(
    parseInt(jobId as string),
    { skip: jobId === undefined }
  );

  const { data: user } = useGetUserByIdQuery(
    { id: userId, token },
    { skip: !userId }
  );

  const handleClose = () => {
    let path = "/";
    if (location.pathname.includes("profile")) {
      path = "/profile";
    }

    if (isCloseAble) {
      dispatch(jobModalOff());
      navigate(path);
    }
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div className="absolute top-16 left-1/2 -translate-x-1/2 pb-4 ">
        <div
          onMouseEnter={() => setIsCloseAble(false)}
          onMouseLeave={() => setIsCloseAble(true)}
          className="border w-jobModal h-[29rem] py-3 shadow-lg bg-white rounded-lg overflow-y-scroll"
        >
          {isJobsLoading ? (
            <Loading />
          ) : (
            <>
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

                  {user && user.role === "jobseeker" && <AppliedJobs />}
                </div>

                <JobTable job={job} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetailModal;
