import { ChangeEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setFilter } from "../../services/jobs/jobsSlice";

type InputProps = {
  title: string;
  type: string;
  name: string;
};

const Input = ({ title, type, name }: InputProps): ReactElement => {
  const filter = useAppSelector((state) => state.jobs.data.filter);
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
        value={filter[name] as string}
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(
            setFilter({
              name: e.target.name,
              value: e.target.value,
            })
          )
        }
      />
    </div>
  );
};

export default Input;
