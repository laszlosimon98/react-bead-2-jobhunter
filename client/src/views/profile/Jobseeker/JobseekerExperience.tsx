import { ReactElement } from "react";

const JobseekerExperience = (): ReactElement => {
  return (
    <table className="w-full mx-auto mt-6 table-auto">
      <tbody>
        <tr>
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            Anonymus Kft.
          </td>
          <td className="px-10 py-6">2020-2024 Full Time Back end Developer</td>
        </tr>
        <tr>
          <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
            Halo Haven
          </td>
          <td className="px-10 py-6">2024-2029 Sales Assistant</td>
        </tr>
      </tbody>
    </table>
  );
};

export default JobseekerExperience;
