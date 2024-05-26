import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { tempUser } from "../temp/exampledata";
import LoggedOutMenu from "./LoggedOutMenu";
import JobSeekerMenu from "./JobseekerMenu";
import CompanyMenu from "./CompanyMenu";
import DropdownMenu from "./DropdownMenu";

const Menu = (): ReactElement => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  return (
    <header className="bg-sky-700 flex items-center justify-between px-5 h-16 w-full fixed top-0">
      <h1 className="font-bold underline text-3xl text-stone-200 shadow-lg">
        <Link to="/">Jobhunter</Link>
      </h1>

      <div className="h-7 flex items-center cursor-pointer md:hidden relative">
        <DropdownMenu />
        <div className="w-10 h-10 bg-red-500 absolute top-5"></div>
      </div>

      <nav className="hidden md:block">
        <ul className="flex justify-end items-center gap-1 md:gap-3 lg:gap-5">
          {tempUser.role === "logout" ? (
            <LoggedOutMenu />
          ) : tempUser.role === "jobseeker" ? (
            <JobSeekerMenu />
          ) : (
            <CompanyMenu />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
