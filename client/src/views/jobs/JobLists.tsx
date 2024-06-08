import { ReactElement } from "react";
import Job from "./Job";
import {
  useGetJobByCompanyNameQuery,
  useGetJobByFilterQuery,
  useGetJobsQuery,
} from "../../services/jobs/jobsApi";
import { useAppSelector } from "../../hooks/reduxHooks";
import JobDetailModal from "./components/JobDetailModal";

const JobLists = (): ReactElement => {
  const { search, filter } = useAppSelector((state) => state.jobs.data);

  const { data: allJobs } = useGetJobsQuery();

  const { data: searchedJobs } = useGetJobByCompanyNameQuery(
    search.company as string,
    {
      skip: search.company === undefined,
    }
  );

  const { data: filteredJobs } = useGetJobByFilterQuery(filter, {
    skip: !filter.isFiltered,
  });

  const isJobModalOpen = useAppSelector(
    (state) => state.visibility.isJobModalOpen
  );

  return (
    <>
      <div className="flex flex-col min-w-[300px] w-[85vw] max-w-[950px] h-fit py-2">
        <h3 className="uppercase text-sky-600 self-start">Állás neve</h3>
        {search.company === undefined ? (
          <>
            {allJobs?.data.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </>
        ) : (
          <>
            {filter.isFiltered ? (
              <>
                {filteredJobs?.data.map((job) => (
                  <Job key={job.id} job={job} />
                ))}
              </>
            ) : (
              <>
                {searchedJobs?.data.map((job) => (
                  <Job key={job.id} job={job} />
                ))}
              </>
            )}
          </>
        )}
      </div>
      {isJobModalOpen && <JobDetailModal />}
    </>
  );
};

export default JobLists;
