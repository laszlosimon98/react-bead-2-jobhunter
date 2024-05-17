import { ReactElement, useState } from "react";
import Logout from "./Logout";
import Employee from "./Employee";
import Company from "./Company";
import { Link } from "react-router-dom";

type userStatus = "logout" | "employee" | "company";

const Menu = (): ReactElement => {
  const [status, setStatus] = useState<userStatus>("logout");

  return (
    <header className="bg-sky-700 flex items-center justify-between px-5 h-16 w-full">
      <h1 className="font-bold underline text-3xl text-stone-200 shadow-lg">
        <Link to="/">Jobhunter</Link>
      </h1>

      <nav>
        <ul className="flex justify-end items-center gap-6 pr-2">
          {status === "logout" ? (
            <Logout />
          ) : status === "employee" ? (
            <Employee />
          ) : (
            <Company />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
