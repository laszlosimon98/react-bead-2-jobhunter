import { ReactElement } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import {
  useApplyJobMutation,
  useGetJobsForAnApplicantQuery,
  useRemoveApplicationMutation,
} from "../../../services/applicants/applicantsApi";

const AppliedJobs = (): ReactElement => {
  const [cookies] = useCookies(["access_token"]);

  const token = cookies?.access_token?.token;
  const userId = cookies?.access_token?.userId;

  const { jobId } = useParams();

  const { data: appliedJobs } = useGetJobsForAnApplicantQuery({
    token,
    userId,
  });

  const [applyJob] = useApplyJobMutation();
  const [removeApplication] = useRemoveApplicationMutation();

  const isApplied = appliedJobs?.find(
    (application) =>
      application.userId === userId &&
      application.jobId === parseInt(jobId as string)
  );

  const handleApply = () => {
    const id = parseInt(jobId as string);
    applyJob({ token, body: { jobId: id } });
  };

  const handleRemoveApplication = () => {
    const id = parseInt(jobId as string);
    removeApplication({ token, jobId: id });
  };

  return (
    <>
      {isApplied ? (
        <div className="flex justify-between items-center gap-4">
          <p className="text-emerald-700 text-xl opacity-80">
            Erre az állásra már jelentkeztél
          </p>
          <button
            onClick={handleRemoveApplication}
            className="bg-red-600 w-42 h-12 px-2 text-xl rounded-lg text-white cursor-pointer hover:bg-red-500 transition-all "
          >
            Jelentkezés visszavonása
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={handleApply}
            className="bg-sky-600 w-32 h-12 text-xl rounded-lg text-white cursor-pointer hover:bg-sky-500 transition-all "
          >
            Jelentkezés
          </button>
        </div>
      )}
    </>
  );
};

export default AppliedJobs;
