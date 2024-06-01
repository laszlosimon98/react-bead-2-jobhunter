import { ReactElement } from "react";
import SearchBar from "../components/SearchBar";
import JobLists from "../jobs/JobLists";
import PageTitle from "./PageTitle";
import JobDetailModal from "../jobs/JobDetailModal";
import { useAppSelector } from "../../hooks/reduxHooks";

const Home = (): ReactElement => {
  const isModalVisible = useAppSelector(
    (state) => state.visibility.isModalVisible
  );

  return (
    <>
      <PageTitle>Álláshirdetések</PageTitle>

      <div className="w-full flex justify-center items-center flex-col">
        <SearchBar title="Böngéssz az állások között:" />
        <JobLists />
      </div>

      {isModalVisible && <JobDetailModal />}
    </>
  );
};

export default Home;
