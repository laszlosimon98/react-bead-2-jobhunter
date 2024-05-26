import { ReactElement, useState } from "react";
import FilterDropdown from "../home/FilterDropdown";

type SearchBarType = {
  title: string;
};

const SearchBar = ({ title }: SearchBarType): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className=" w-[60rem] p-3 pr-0 relative h-32 ">
      <h3 className="text-xl font-semibold mb-2 ml-2">{title}</h3>
      <div className="flex justify-between">
        <input
          type="search"
          className="border rounded-lg w-3/4 h-10 outline-none p-2"
        />
        <button className="bg-sky-500 w-12 hover:w-14 sm:w-28 sm:hover:w-[7.5rem] h-10 hover:h-12 text-xl rounded-lg text-white cursor-pointer hover:bg-sky-600 transition-all">
          <span className="sm:hidden">🔍</span>
          <span className="hidden sm:block">Keresés</span>
        </button>

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-stone-200 w-12 hover:w-14 sm:w-28 sm:hover:w-[7.5rem] h-10 hover:h-12 text-xl rounded-lg cursor-pointer hover:bg-stone-300 transition-all"
        >
          <span className="sm:hidden">🖋️</span>
          <span className="hidden sm:block">Szűrés</span>
        </button>
        {isVisible && <FilterDropdown />}
      </div>
    </div>
  );
};

export default SearchBar;
