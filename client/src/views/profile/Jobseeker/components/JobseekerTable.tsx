import { ReactElement } from "react";
import { useCookies } from "react-cookie";
import { useGetUserByIdQuery } from "../../../../services/users/usersApi";

const JobseekerTable = (): ReactElement => {
  const [cookies] = useCookies(["access_token"]);

  const token = cookies?.access_token?.token;
  const userId = cookies?.access_token?.userId;

  const { data: user } = useGetUserByIdQuery(
    { id: userId, token },
    { skip: !userId }
  );

  return (
    <table className="w-table mx-auto mt-6 table-auto">
      <tbody>
        <tr className="bg-sky-50">
          <td className="pl-8 py-6 font-semibold opacity-80">Név</td>
          <td className="pl-8 py-6">{user?.fullname}</td>
        </tr>
        <tr className="shadow-sm">
          <td className="pl-8 py-6 font-semibold opacity-80">E-mail</td>
          <td className="pl-8 py-6">{user?.email}</td>
        </tr>
        <tr className="bg-sky-50">
          <td className="pl-8 py-6 font-semibold opacity-80">Státusz</td>
          <td className="pl-8 py-6">Munkakereső</td>
        </tr>
      </tbody>
    </table>
  );
};

export default JobseekerTable;
