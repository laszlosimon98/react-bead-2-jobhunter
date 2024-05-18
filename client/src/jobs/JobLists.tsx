import { ReactElement } from "react";
import Job from "./Job";
const tempData = [
  {
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
  },
  {
    id: 2,
    company: "Regional Paradigm Technician",
    position: "Front-end developer",
    description: "Lorem ipsum...",
    salaryFrom: 500000,
    salaryTo: 1000000,
    type: "internship",
    city: "Budapest",
    homeOffice: 1,
    userId: 1,
    createdBy: {
      id: 1,
      email: "user1@jobhunter.hu",
      fullname: "Jake Peralta",
      role: "company",
    },
  },
  {
    id: 3,
    company: "Dunder Mifflin",
    position: "Front-end developer",
    description: "Lorem ipsum...",
    salaryFrom: 300000,
    salaryTo: 1400000,
    type: "part-time",
    city: "Budapest",
    homeOffice: 1,
    userId: 1,
    createdBy: {
      id: 1,
      email: "user1@jobhunter.hu",
      fullname: "Jake Peralta",
      role: "company",
    },
  },
];

const JobLists = (): ReactElement => {
  return (
    <div className="flex flex-col w-[60rem] h-fit py-2">
      <h3 className="uppercase text-sky-600 self-start">Állás neve</h3>
      {tempData.map((data) => (
        <Job key={data.id} data={data} />
      ))}
    </div>
  );
};

export default JobLists;
