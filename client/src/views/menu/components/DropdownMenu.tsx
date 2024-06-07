import { ReactElement } from "react";
import LoggedOutMenu from "./LoggedOutMenu";
import JobSeekerMenu from "./JobseekerMenu";
import CompanyMenu from "./CompanyMenu";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useCookies } from "react-cookie";
import { useGetUserByIdQuery } from "../../../services/users/usersApi";

const DropdownMenu = (): ReactElement => {
  const isDropdownVisible = useAppSelector(
    (state) => state.visibility.isDropdownVisible
  );

  const [cookies] = useCookies(["access_token"]);

  const token = cookies?.access_token?.token;
  const userId = cookies?.access_token?.userId;

  const { data: user } = useGetUserByIdQuery(
    { id: userId, token },
    { skip: !userId }
  );

  return (
    <>
      <div className="w-8 h-[0.375rem] bg-stone-200 rounded-lg relative before:w-8 before:h-[0.375rem] before:bg-stone-200 before:rounded-lg before:absolute before:-top-[0.55rem] after:w-8 after:h-[0.375rem] after:bg-stone-200 after:rounded-lg after:absolute after:top-[0.55rem]"></div>
      <div
        className={`bg-sky-700 ${
          isDropdownVisible ? `translate-y-10` : "translate-y-0"
        } w-60 absolute top-0 -right-5 transition-all ease-in-out`}
      >
        {isDropdownVisible && (
          <ul className="flex flex-col justify-end items-center gap-2">
            {user === null && <LoggedOutMenu />}
            {user?.role === "jobseeker" ? <JobSeekerMenu /> : <CompanyMenu />}
          </ul>
        )}
      </div>
    </>
  );
};

export default DropdownMenu;
