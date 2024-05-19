import { ReactElement } from "react";
import { tempUser } from "../../temp/exampledata";

const JobseekerTable = (): ReactElement => {
  return (
    <table className="w-full mx-auto mt-6 table-auto">
      <tbody>
        <tr className="bg-sky-50">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">Név</td>
          <td className="px-10 py-6">{tempUser.fullname}</td>
        </tr>
        <tr className="shadow-sm">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            E-mail
          </td>
          <td className="px-10 py-6">{tempUser.email}</td>
        </tr>
        <tr className="bg-sky-50">
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            Státusz
          </td>
          <td className="px-10 py-6">Munkakereső</td>
        </tr>
      </tbody>
    </table>
  );
};

export default JobseekerTable;
