import { ReactElement } from "react";
import Job from "./Job";
import { useGetJobsQuery } from "../../services/jobs/jobsApi";

const JobLists = (): ReactElement => {
  const { data: jobs, isLoading } = useGetJobsQuery();

  if (isLoading) return <div></div>;

  return (
    <>
      <div className="flex flex-col min-w-[300px] w-[85vw] max-w-[950px] h-fit py-2">
        <h3 className="uppercase text-sky-600 self-start">Állás neve</h3>
        {jobs && jobs.data.map((job) => <Job key={job.id} data={job} />)}
      </div>
    </>
  );
};

export default JobLists;
