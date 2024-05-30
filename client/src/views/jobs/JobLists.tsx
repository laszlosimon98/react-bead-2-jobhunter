import { ReactElement } from "react";
import Job from "./Job";
import {
  useGetJobByCompanyNameQuery,
  useGetJobsQuery,
} from "../../services/jobs/jobsApi";
import { useAppSelector } from "../../hooks/reduxHooks";

const JobLists = (): ReactElement => {
  const search = useAppSelector((state) => state.jobs.data.search);

  const { data: allJobs } = useGetJobsQuery();

  const { data: filteredJobs } = useGetJobByCompanyNameQuery(search);
  const isFiltered = useAppSelector(
    (state) => state.jobs.data.filter.isFiltered
  );

  return (
    <>
      <div className="flex flex-col min-w-[300px] w-[85vw] max-w-[950px] h-fit py-2">
        <h3 className="uppercase text-sky-600 self-start">Állás neve</h3>
        {isFiltered ? (
          <>
            {filteredJobs?.data.map((job) => (
              <Job key={job.id} job={job} />
            ))}{" "}
          </>
        ) : (
          <>
            {allJobs?.data.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default JobLists;
