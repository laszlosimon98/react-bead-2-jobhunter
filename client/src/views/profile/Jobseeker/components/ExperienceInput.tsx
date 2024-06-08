import { ChangeEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { updateValue } from "../../../../services/experiences/experiencesSlice";

type ExperienceInputProps = {
  title: string;
  _for: string;
};

const ExperienceInput = ({
  title,
  _for,
}: ExperienceInputProps): ReactElement => {
  const dispatch = useAppDispatch();

  const experience = useAppSelector((state) => state.experiences.value);

  return (
    <div className="flex flex-row gap-3">
      <label htmlFor={_for} className="w-12">
        {title}
      </label>
      <input
        name={_for}
        id={_for}
        type="text"
        value={experience[_for]}
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(updateValue({ name: e.target.name, value: e.target.value }))
        }
        className="px-2 w-64 h-8 border border-sky-700 border-opacity-80 rounded-lg"
      />
    </div>
  );
};

export default ExperienceInput;
