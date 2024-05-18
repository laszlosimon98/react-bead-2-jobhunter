import { ReactElement } from "react";
import { formatNumber, translateType } from "../utils/util";

const JobTable = ({ job }): ReactElement => {
  return (
    <table className="w-full mx-auto mt-6 table-auto">
      <tbody>
        <tr className="bg-sky-50">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">Név</td>
          <td className="px-10 py-6">{job?.company}</td>
        </tr>
        <tr className="shadow-sm">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            Pozíció
          </td>
          <td className="px-10 py-6">{job?.position}</td>
        </tr>
        <tr className="bg-sky-50">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            Leírás
          </td>
          <td className="px-10 py-6">{job?.description}</td>
        </tr>
        <tr className="shadow-sm">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            Fizetési sáv
          </td>
          <td className="px-10 py-6">
            Bruttó {formatNumber(job?.salaryFrom as number)} -{" "}
            {formatNumber(job?.salaryTo as number)} Ft
          </td>
        </tr>
        <tr className="bg-sky-50">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            Foglalkoztatás típusa
          </td>
          <td className="px-10 py-6">{translateType(job?.type as string)}</td>
        </tr>
        <tr className="shadow-sm">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            Település
          </td>
          <td className="px-10 py-6">{job?.city}</td>
        </tr>
        <tr className="bg-sky-50">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            Home Office
          </td>
          <td className="px-10 py-6">{job?.homeOffice ? "Van" : "Nincs"}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default JobTable;
