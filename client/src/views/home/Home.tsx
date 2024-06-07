import { ReactElement } from "react";
import SearchBar from "../components/SearchBar";
import JobLists from "../jobs/JobLists";
import PageTitle from "./components/PageTitle";

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
