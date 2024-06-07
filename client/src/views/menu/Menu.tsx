import { ReactElement, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoggedOutMenu from "./LoggedOutMenu";
import JobSeekerMenu from "./JobseekerMenu";
import CompanyMenu from "./CompanyMenu";
import DropdownMenu from "./DropdownMenu";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { dropDownToggle } from "../../services/utils/visibilitySlice";
import { useCookies } from "react-cookie";
import { useGetUserByIdQuery } from "../../services/users/usersApi";

const Menu = (): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["access_token"]);

  const [cookies] = useCookies(["access_token"]);

  const token = cookies?.access_token?.token;
  const userId = cookies?.access_token?.userId;

  const { data: user, error } = useGetUserByIdQuery(
    { id: userId, token },
    { skip: !userId }
  );

  const message = error?.data.data.name;

  useEffect(() => {
    if (message === "TokenExpiredError") {
      removeCookie("access_token", { path: "/" });
      navigate("/");
    }
  }, [message]);

  return (
    <header className="bg-sky-700 flex items-center justify-between px-5 h-16 w-full">
      <h1 className="font-bold underline text-3xl text-stone-200 shadow-lg">
        <Link to="/">Jobhunter</Link>
      </h1>

      <div
        className="h-7 flex items-center cursor-pointer md:hidden relative"
        onClick={() => dispatch(dropDownToggle())}
      >
        <DropdownMenu />
      </div>

      <nav className="hidden md:block">
        <ul className="flex justify-end items-center gap-1 md:gap-3 lg:gap-5">
          {!token && !userId ? (
            <LoggedOutMenu />
          ) : (
            <>
              {user?.role === "jobseeker" && <JobSeekerMenu />}
              {user?.role === "company" && <CompanyMenu />}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
