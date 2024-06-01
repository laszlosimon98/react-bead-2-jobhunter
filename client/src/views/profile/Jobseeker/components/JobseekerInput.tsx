/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";
import { useAppDispatch } from "../../../../hooks/reduxHooks";

type JobseekerButtonProps = {
  w: string;
  h: string;
  color: string;
  mdw: string;
  hoverColor: string;
  title: string;
  token?: string;
  func: any;
  func2?: any;
  func3?: any;
};

const JobseekerButton = ({
  w,
  h,
  mdw,
  color,
  hoverColor,
  title,
  func,
  func2,
  func3,
}: JobseekerButtonProps): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(func());

        if (func2) dispatch(func2());
        if (func3) func3();
      }}
      className={`border ${color} cursor-pointer ${w} ${h} rounded-lg hover:${hoverColor} transition-all text-white shadow-lg ${mdw}`}
    >
      {title}
    </button>
  );
};

export default JobseekerButton;
