import { ReactElement } from "react";
import HomeOffice from "./HomeOffice";
import SearchBar from "./SearchBar";

const tempData = {
  id: 1,
  company: "Dunder Mifflin",
  position: "Front-end developer",
  description: "Lorem ipsum...",
  salaryFrom: 300000,
  salaryTo: 400000,
  type: "full-time",
  city: "Budapest",
  homeOffice: 0,
  userId: 1,
  createdBy: {
    id: 1,
    email: "user1@jobhunter.hu",
    fullname: "Jake Peralta",
    role: "company",
  },
};

const Home = (): ReactElement => {
  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">Főoldal</h2>
      </div>

      <div className="flex justify-center items-center mt-16">
        <SearchBar title="Böngéssz az állások között:" />
      </div>

      {/* <HomeOffice /> */}
    </>
  );
};

export default Home;
