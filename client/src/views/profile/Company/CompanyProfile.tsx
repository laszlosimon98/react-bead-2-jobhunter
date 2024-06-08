import { ReactElement } from "react";
import { formatNumber, translateType } from "../../../utils/util";
import { Link } from "react-router-dom";
import {
  useDeleteAllJobMutation,
  useDeleteJobMutation,
  useGetJobByUserIdQuery,
} from "../../../services/jobs/jobsApi";
import { useCookies } from "react-cookie";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setEmpty } from "../../../services/jobs/jobsSlice";
import Loading from "../../components/Loading";
import ApplicantsModal from "./components/ApplicantsModal";
import { applicantsModalOn } from "../../../services/utils/visibilitySlice";

const CompanyProfile = (): ReactElement => {
  const [cookies] = useCookies(["access_token"]);
  const dispatch = useAppDispatch();

  const token = cookies?.access_token?.token;
  const userId = cookies?.access_token?.userId;

  const isApplicantsModalOpen = useAppSelector(
    (state) => state.visibility.isApplicantsModalOpen
  );

  const { data: jobs, isLoading } = useGetJobByUserIdQuery(userId);

  const [deleteJob] = useDeleteJobMutation();
  const [deleteAllJob] = useDeleteAllJobMutation();

  const handleDelete = (id: number) => {
    deleteJob({ id, token });
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="mt-5 ">
        <div className="flex flex-col justify-around items-center mb-5 gap-3 sm:gap-0 sm:mb-10 sm:flex-row">
          <h3 className="font-semibold text-2xl sm:ml-2">A te hirdetéseid:</h3>
          <div className="w-[14rem] flex flex-col gap-1 justify-center sm:items-center sm:flex-row sm:gap-0 sm:w-[28rem]">
            <button
              onClick={() => dispatch(setEmpty())}
              className="border bg-sky-500 cursor-pointer w-52 h-12 rounded-lg hover:bg-sky-600 text-lg transition-all text-white shadow-md"
            >
              <Link to="/create">Hirdetés hozzáadása</Link>
            </button>
            <button
              onClick={() => deleteAllJob(token)}
              className="border bg-red-500 cursor-pointer w-52 h-12 rounded-lg hover:bg-red-600 text-lg transition-all text-white shadow-md"
            >
              Összes állás törlése
            </button>
          </div>
        </div>
        <div className="ml-5 flex flex-col gap-5">
          {jobs?.data.map((job) => (
            <div
              key={job.id}
              className="flex flex-col justify-around items-center my-5 gap-3 lg:gap-0 lg:flex-row"
            >
              <div key={job.id}>
                <h4 className="font-semibold text-3xl text-center lg:text-left">
                  {job.position}
                </h4>
                <div className="flex w-[18rem] gap-6 text-lg lg:w-[32rem]">
                  <p>{translateType(job.type as string)}</p>
                  <p>{job.homeOffice ? "Home Office" : job.city}</p>
                  <p>
                    {formatNumber(job.salaryFrom as number)} -{" "}
                    {formatNumber(job.salaryTo as number)}{" "}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-2 items-center lg:w-[22rem] lg:justify-between lg:gap-0">
                <Link to={`/modify/${job.id}`}>
                  <button className="border bg-emerald-500 cursor-pointer w-28 h-12 rounded-lg hover:bg-emerald-600 transition-all text-white shadow-md">
                    Szerkesztés
                  </button>
                </Link>

                <Link to={`/profile/${job.id}`}>
                  <button
                    onClick={() => dispatch(applicantsModalOn())}
                    className="border bg-sky-500 cursor-pointer w-28 h-12 rounded-lg hover:bg-sky-600 transition-all text-white shadow-md"
                  >
                    Megtekintés
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(job.id)}
                  className="border bg-red-500 cursor-pointer w-28 h-12 rounded-lg hover:bg-red-600 transition-all text-white shadow-md"
                >
                  Törlés
                </button>
              </div>
            </div>
          ))}
        </div>
        {isApplicantsModalOpen && <ApplicantsModal />}
      </div>
    </>
  );
};

export default CompanyProfile;
