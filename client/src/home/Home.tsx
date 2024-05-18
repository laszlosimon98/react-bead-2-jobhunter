import { ReactElement } from "react";
import SearchBar from "./SearchBar";
import JobLists from "../jobs/JobLists";

const Home = (): ReactElement => {
  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">Főoldal</h2>
      </div>

      <div className="w-full flex justify-center items-center mt-16 flex-col">
        <SearchBar title="Böngéssz az állások között:" />
        <JobLists />
      </div>
    </>
  );
};

export default Home;
