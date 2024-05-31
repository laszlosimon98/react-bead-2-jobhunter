import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setAdvertisement } from "../../services/jobs/jobsSlice";

const AdvertisementOption = (): ReactElement => {
  const type = useAppSelector((state) => state.jobs.data.advertisement.type);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col w-text">
      <label htmlFor="type" className="mb-1">
        Foglalkoztatás típusa
      </label>
      <select
        name="type"
        id="type"
        className="border border-sky-700 border-opacity-80 px-2 rounded-lg h-9 outline-none"
        value={type}
        onChange={(e) =>
          dispatch(setAdvertisement({ name: "type", value: e.target.value }))
        }
      >
        <option value="full-time">Teljes állás</option>
        <option value="part-time">Részmunkaidős</option>
        <option value="internship">Gyakornoki</option>
      </select>
    </div>
  );
};

export default AdvertisementOption;
