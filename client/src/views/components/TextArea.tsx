import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setAdvertisement } from "../../services/jobs/jobsSlice";

type TextAreaProps = {
  title: string;
  name: string;
};

const TextArea = ({ title, name }: TextAreaProps): ReactElement => {
  const desription = useAppSelector(
    (state) => state.jobs.data.advertisement.description
  );

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col">
      <label htmlFor={title} className="italic text-lg mb-1">
        {title}
      </label>
      <textarea
        id={title}
        name={name}
        className="border rounded-lg w-text h-[7.5rem] outline-none p-2 resize-none"
        value={desription}
        onChange={(e) =>
          dispatch(setAdvertisement({ name, value: e.target.value }))
        }
      />
    </div>
  );
};

export default TextArea;
