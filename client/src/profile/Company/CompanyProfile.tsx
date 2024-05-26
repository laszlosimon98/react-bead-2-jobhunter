import { ReactElement } from "react";
import { formatNumber, translateType } from "../../utils/util";
import { tempData } from "../../temp/exampledata";
import { Link } from "react-router-dom";

const CompanyProfile = (): ReactElement => {
  return (
    <div className="my-5 mx-10">
      <h3 className="font-semibold text-2xl mb-10">A te hirdetéseid:</h3>
      <div className="ml-5 flex flex-col gap-5 w-full">
        {tempData.map((data) => (
          <div className="flex justify-around items-center my-5">
            <div key={data.id}>
              <h4 className="font-semibold text-xl">{data.position}</h4>
              <div className="flex w-[25rem] gap-6">
                <p>{translateType(data.type as string)}</p>
                <p>{data.homeOffice ? "Home Office" : data.city}</p>
                <p>
                  {formatNumber(data.salaryFrom as number)} -{" "}
                  {formatNumber(data.salaryTo as number)}{" "}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center w-[22rem]">
              <button className="border bg-emerald-500 cursor-pointer py-2 px-4 rounded-lg hover:bg-emerald-600 hover:py-[0.7rem] hover:px-[1.2rem] transition-all text-white shadow-md">
                Szerkesztés
              </button>
              <button className="border bg-sky-500 cursor-pointer py-2 px-4 rounded-lg hover:bg-sky-600 hover:py-[0.7rem] hover:px-[1.2rem]  transition-all text-white shadow-md">
                Megtekintés
              </button>
              <button className="border bg-red-500 cursor-pointer py-2 px-4 rounded-lg hover:bg-red-600 hover:py-[0.7rem] hover:px-[1.2rem]  transition-all text-white shadow-md">
                Törlés
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="border bg-sky-500 cursor-pointer py-3 px-5 rounded-lg hover:bg-sky-600 hover:py-4 hover:px-6 text-lg transition-all text-white shadow-md">
          <Link to="/create">Hirdetés hozzáadása</Link>
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;
