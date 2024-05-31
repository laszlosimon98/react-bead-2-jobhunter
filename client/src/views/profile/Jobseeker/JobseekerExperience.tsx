import { ReactElement } from "react";
import { useGetExperiencesQuery } from "../../../services/experiences/experiences";
import { useCookies } from "react-cookie";

const JobseekerExperience = (): ReactElement => {
  const [cookie] = useCookies(["access_token"]);
  const token = cookie.access_token.token;

  const { data: experiences, isLoading } = useGetExperiencesQuery(token);

  if (isLoading) return <div>Loading...</div>;

  return (
    <table className="w-full mx-auto mt-6 table-auto">
      <tbody>
        {experiences?.data.map((experience) => (
          <tr key={experience.id}>
            <td className="px-10 py-6 w-[15rem] font-semibold opacity-80">
              {experience.company}
            </td>
            <td className="px-10 py-6">
              {experience.interval} {experience.title}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JobseekerExperience;
