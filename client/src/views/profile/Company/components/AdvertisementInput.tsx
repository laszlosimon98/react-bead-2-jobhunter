import { ChangeEvent, ReactElement } from "react";
import { useAppSelector, useAppDispatch } from "../../../../hooks/reduxHooks";
import { setAdvertisement } from "../../../../services/jobs/jobsSlice";

type InputProps = {
  title: string;
  type: string;
  name: string;
};

const AdvertisementInput = ({
  title,
  type,
  name,
}: InputProps): ReactElement => {
  const advertisement = useAppSelector(
    (state) => state.jobs.data.advertisement
  );
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col">
      <label htmlFor={title} className="italic text-lg mb-1">
        {title}
      </label>
      <input
        id={title}
        type={type}
        name={name}
        min={0}
        className={`border border-sky-700 border-opacity-80 rounded-lg ${
          type === "text" ? "w-text" : "w-number"
        } h-9 outline-none p-2`}
        value={advertisement[name] as string}
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(
            setAdvertisement({
              name: e.target.name,
              value: `${
                type === "text" ? e.target.value : parseInt(e.target.value)
              }`,
            })
          )
        }
      />
    </div>
  );
};

export default AdvertisementInput;
