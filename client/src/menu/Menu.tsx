import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { tempUser } from "../temp/exampledata";
import LoggedOutMenu from "./LoggedOutMenu";
import JobSeekerMenu from "./JobseekerMenu";
import CompanyMenu from "./CompanyMenu";

const Menu = (): ReactElement => {
  return (
    <header className="bg-sky-700 flex items-center justify-between px-5 h-16 w-full">
      <h1 className="font-bold underline text-3xl text-stone-200 shadow-lg">
        <Link to="/">Jobhunter</Link>
      </h1>

      <nav>
        <ul className="flex justify-end items-center gap-6 pr-2">
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
