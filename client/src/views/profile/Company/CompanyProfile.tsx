import { ReactElement } from "react";
import { formatNumber, translateType } from "../../../utils/util";
import { Link } from "react-router-dom";
import {
  useDeleteJobMutation,
  useGetJobByUserIdQuery,
} from "../../../services/jobs/jobsApi";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setEmpty } from "../../../services/jobs/jobsSlice";

const CompanyProfile = (): ReactElement => {
  const [cookies] = useCookies(["access_token"]);
  const token = cookies?.access_token?.token;
  const userId = cookies?.access_token?.userId;

  const dispatch = useAppDispatch();

  const { data: jobs, isLoading } = useGetJobByUserIdQuery(userId);
  const [deleteJob] = useDeleteJobMutation();

  const handleDelete = (id: number) => {
    deleteJob({ id, token });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-5 lg:mx-10 ">
      <div className="flex flex-col justify-around items-center mb-5 gap-3 sm:gap-0 sm:mb-10 sm:flex-row">
        <h3 className="font-semibold text-2xl">A te hirdetéseid:</h3>
        <button
          onClick={() => dispatch(setEmpty())}
          className="border bg-sky-500 cursor-pointer w-52 h-12 rounded-lg hover:bg-sky-600 text-lg transition-all text-white shadow-md"
        >
          <Link to="/create">Hirdetés hozzáadása</Link>
        </button>
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
              <button className="border bg-emerald-500 cursor-pointer w-28 h-12 rounded-lg hover:bg-emerald-600 transition-all text-white shadow-md">
                <Link to={`/modify/${job.id}`}>Szerkesztés</Link>
              </button>
              <button className="border bg-sky-500 cursor-pointer w-28 h-12 rounded-lg hover:bg-sky-600 transition-all text-white shadow-md">
                Megtekintés
              </button>
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
    </div>
  );
};

export default CompanyProfile;
