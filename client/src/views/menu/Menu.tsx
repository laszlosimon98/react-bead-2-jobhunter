import { ReactElement } from "react";
import { Link } from "react-router-dom";
import LoggedOutMenu from "./LoggedOutMenu";
import JobSeekerMenu from "./JobseekerMenu";
import CompanyMenu from "./CompanyMenu";
import DropdownMenu from "./DropdownMenu";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { dropDownToggle } from "../../services/utils/visibilitySlice";

const Menu = (): ReactElement => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.data);

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
          {user === null && <LoggedOutMenu />}
          {user?.role === "jobseeker" && <JobSeekerMenu />}
          {user?.role === "company" && <CompanyMenu />}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
