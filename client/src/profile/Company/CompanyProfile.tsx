import { ReactElement } from "react";
import { formatNumber, translateType } from "../../utils/util";
import { tempData } from "../../temp/exampledata";
import { Link } from "react-router-dom";

const CompanyProfile = (): ReactElement => {
  return (
    <div className="pt-44 mx-10">
      <div className="flex justify-around items-center mb-10">
        <h3 className="font-semibold text-2xl">A te hirdetéseid:</h3>
        <button className="border bg-sky-500 cursor-pointer w-52 h-12 rounded-lg hover:bg-sky-600 hover:w-[13.5rem] hover:h-14 text-lg transition-all text-white shadow-md">
          <Link to="/create">Hirdetés hozzáadása</Link>
        </button>
      </div>
      <div className="ml-5 flex flex-col gap-5 w-full">
        {tempData.map((data) => (
          <div key={data.id} className="flex justify-around items-center my-5">
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
              <button className="border bg-emerald-500 cursor-pointer w-28 h-12 rounded-lg hover:bg-emerald-600 hover:w-[7.5rem] hover:h-14 transition-all text-white shadow-md">
                <Link to={`/modify/${data.id}`}>Szerkesztés</Link>
              </button>
              <button className="border bg-sky-500 cursor-pointer w-28 h-12 rounded-lg hover:bg-sky-600 hover:w-[7.5rem] hover:h-14  transition-all text-white shadow-md">
                Megtekintés
              </button>
              <button className="border bg-red-500 cursor-pointer w-28 h-12 rounded-lg hover:bg-red-600 hover:w-[7.5rem] hover:h-14  transition-all text-white shadow-md">
                Törlés
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProfile;
