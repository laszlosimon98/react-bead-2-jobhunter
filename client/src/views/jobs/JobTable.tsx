import { ReactElement } from "react";
import { formatNumber, translateType } from "../../utils/util";
import { JobType } from "../../services/jobs/jobsApi";

type JobTableProps = {
  job: JobType;
};

const JobTable = ({ job }: JobTableProps): ReactElement => {
  return (
    <table className="w-table mx-auto mt-1 table-auto shadow-lg">
      <tbody>
        <tr className="bg-sky-50">
          <td className="pl-8 py-2 font-semibold opacity-80">Név</td>
          <td className="py-2">{job?.company}</td>
        </tr>
        <tr className="shadow-sm">
          <td className="pl-8 py-2 font-semibold opacity-80">Pozíció</td>
          <td className="py-2">{job?.position}</td>
        </tr>
        <tr className="bg-sky-50">
          <td className="pl-8 py-2 font-semibold opacity-80">Leírás</td>
          <td className="py-2">{job?.description}</td>
        </tr>
        <tr className="shadow-sm">
          <td className="pl-8 py-2 font-semibold opacity-80">Fizetési sáv</td>
          <td className="py-2">
            Bruttó {formatNumber(job?.salaryFrom as number)} -{" "}
            {formatNumber(job?.salaryTo as number)} Ft
          </td>
        </tr>
        <tr className="bg-sky-50">
          <td className="pl-8 py-2 font-semibold opacity-80">
            Foglalkoztatás típusa
          </td>
          <td className="py-2">{translateType(job?.type as string)}</td>
        </tr>
        <tr className="shadow-sm">
          <td className="pl-8 py-2 font-semibold opacity-80">Település</td>
          <td className="py-2">{job?.city}</td>
        </tr>
        <tr className="bg-sky-50">
          <td className="pl-8 py-2 font-semibold opacity-80">Home Office</td>
          <td className="py-2">{job?.homeOffice ? "Van" : "Nincs"}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default JobTable;
