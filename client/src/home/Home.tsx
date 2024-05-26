import { ReactElement } from "react";
import SearchBar from "../components/SearchBar";
import JobLists from "../jobs/JobLists";
import PageTitle from "./PageTitle";

const Home = (): ReactElement => {
  return (
    <>
      <PageTitle>Álláshirdetések</PageTitle>

      <div className="w-full flex justify-center items-center flex-col pt-10 ">
        <SearchBar title="Böngéssz az állások között:" />
        <JobLists />
      </div>
    </>
  );
};

export default Home;
