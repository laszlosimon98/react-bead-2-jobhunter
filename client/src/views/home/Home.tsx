import { ReactElement } from "react";
import JobLists from "../jobs/JobLists";
import PageTitle from "./components/PageTitle";
import SearchBar from "./components/SearchBar";

const Home = (): ReactElement => {
  return (
    <>
      <PageTitle>Álláshirdetések</PageTitle>

      <div className="w-full flex justify-center items-center flex-col">
        <SearchBar title="Böngéssz az állások között:" />
        <JobLists />
      </div>
    </>
  );
};

export default Home;
