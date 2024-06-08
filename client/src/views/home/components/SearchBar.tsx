import { ChangeEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  setFilter,
  setSearch,
  setFiltered,
  removeFilter,
} from "../../../services/jobs/jobsSlice";
import {
  filterClose,
  filterToggle,
} from "../../../services/utils/visibilitySlice";
import FilterDropdown from "./FilterDropdown";

type SearchBarType = {
  title: string;
};

const SearchBar = ({ title }: SearchBarType): ReactElement => {
  const dispatch = useAppDispatch();
  const isFilterVisible = useAppSelector(
    (state) => state.visibility.isFilterVisible
  );

  const { company, isFiltered } = useAppSelector(
    (state) => state.jobs.data.filter
  );

  return (
    <div className="min-w-[340px] w-[90vw] max-w-[1000px] p-3 pr-0 relative h-32 ">
      <h3 className="text-xl font-semibold mb-2 ml-2">{title}</h3>
      <div className="flex justify-between gap-2">
        <input
          type="search"
          className="border border-sky-700 border-opacity-80 rounded-lg w-full h-10 outline-none p-2"
          value={company}
          onInput={(e: ChangeEvent<HTMLInputElement>) => {
            {
              dispatch(
                setFilter({
                  name: "company",
                  value: e.target.value,
                })
              );
              dispatch(setSearch({ name: "company", value: e.target.value }));
            }
          }}
        />
        <button
          onClick={() => {
            dispatch(filterClose());
            dispatch(setFiltered());
          }}
          className="bg-sky-500 w-12 h-10 text-xl rounded-lg text-white cursor-pointer hover:bg-sky-600 transition-all md:w-28"
        >
          <span className="md:hidden">🔍</span>
          <span className="hidden md:block">Keresés</span>
        </button>

        <button
          onClick={() => dispatch(filterToggle())}
          className="bg-stone-200 w-12  h-10 text-xl rounded-lg cursor-pointer hover:bg-stone-300 transition-all md:w-28"
        >
          <span className="md:hidden">🖋️</span>
          <span className="hidden md:block">Szűrés</span>
        </button>

        {isFiltered && (
          <button
            onClick={() => dispatch(removeFilter())}
            className="bg-red-400 w-12 h-10 text-xl rounded-lg cursor-pointer hover:bg-red-500 transition-all md:w-44"
          >
            <span className="md:hidden">X️</span>
            <span className="hidden md:block">Szűrő törlése</span>
          </button>
        )}
        {isFilterVisible && <FilterDropdown />}
      </div>
    </div>
  );
};

export default SearchBar;
