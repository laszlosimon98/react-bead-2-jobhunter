import { ReactElement } from "react";
import FilterDropdown from "../home/FilterDropdown";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { filterToggle } from "../../services/filterSlice";

type SearchBarType = {
  title: string;
};

const SearchBar = ({ title }: SearchBarType): ReactElement => {
  const dispatch = useAppDispatch();
  const isFilterVisible = useAppSelector(
    (state) => state.filter.isFilterVisible
  );

  return (
    <div className="min-w-[340px] w-[90vw] max-w-[1000px] p-3 pr-0 relative h-32 ">
      <h3 className="text-xl font-semibold mb-2 ml-2">{title}</h3>
      <div className="flex justify-between gap-2">
        <input
          type="search"
          className="border rounded-lg w-full h-10 outline-none p-2"
        />
        <button className="bg-sky-500 w-12 hover:w-14 h-10 hover:h-12 text-xl rounded-lg text-white cursor-pointer hover:bg-sky-600 transition-all md:w-28 md:hover:w-[7.5rem]">
          <span className="md:hidden">🔍</span>
          <span className="hidden md:block">Keresés</span>
        </button>

        <button
          onClick={() => dispatch(filterToggle())}
          className="bg-stone-200 w-12 hover:w-14 h-10 hover:h-12 text-xl rounded-lg cursor-pointer hover:bg-stone-300 transition-all md:w-28 md:hover:w-[7.5rem]"
        >
          <span className="md:hidden">🖋️</span>
          <span className="hidden md:block">Szűrés</span>
        </button>
        {isFilterVisible && <FilterDropdown />}
      </div>
    </div>
  );
};

export default SearchBar;
