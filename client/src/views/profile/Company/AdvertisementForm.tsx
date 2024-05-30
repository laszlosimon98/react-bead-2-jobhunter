import { ReactElement } from "react";
import TextArea from "../../components/TextArea";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import AdvertisementInput from "../../components/AdvertisementInput";
import { setAdvertisement } from "../../../services/jobs/jobsSlice";
import AdvertisementOption from "../../components/AdvertisementOption";

const AdvertisementForm = (): ReactElement => {
  const advertisement = useAppSelector(
    (state) => state.jobs.data.advertisement
  );
  const dispatch = useAppDispatch();

  return (
    <div className="h-[750px] w-advertisement shadow-lg mx-auto rounded-lg p-5 lg:h-[400px]">
      <form>
        <div className="flex flex-col justify-center items-center lg:justify-around lg:flex-row">
          <div className="flex flex-col gap-5">
            <AdvertisementInput title="Cégnév" type="text" name="company" />
            <AdvertisementOption />
            <AdvertisementInput title="Település" type="text" name="city" />
          </div>

          <div className="flex flex-col gap-5">
            <AdvertisementInput
              title="Pozíció neve"
              type="text"
              name="position"
            />
            <TextArea title="Leírás" name="description" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-6 lg:justify-around lg:flex-row">
          <div>
            <input
              type="checkbox"
              id="homeoffice"
              name="homeOffice"
              checked={advertisement.homeOffice}
              onChange={() =>
                dispatch(
                  setAdvertisement({
                    name: "homeOffice",
                    value: !advertisement.homeOffice,
                  })
                )
              }
            />
            <label htmlFor="homeoffice" className="ml-3">
              Home Office Lehetőség
            </label>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 sm:flex-row sm:justify-around">
            <AdvertisementInput
              title="Fizetési sáv alja"
              type="number"
              name="salaryFrom"
            />
            <AdvertisementInput
              title="Fizetési sáv teteje"
              type="number"
              name="salaryTo"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdvertisementForm;
