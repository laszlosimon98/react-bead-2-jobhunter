import { ChangeEvent, ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setAdvertisement, setJob } from "../../services/jobs/jobsSlice";
import { useParams } from "react-router-dom";
import { useGetJobByIdWithAuthQuery } from "../../services/jobs/jobsApi";
import { useCookies } from "react-cookie";

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
        className={`border rounded-lg ${
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
