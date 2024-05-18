import { ReactElement } from "react";

type InputProps = {
  title: string;
};

const Input = ({ title }: InputProps): ReactElement => {
  return (
    <div className="flex flex-col">
      <label htmlFor={title} className="italic text-lg mb-1">
        {title}
      </label>
      <input
        id={title}
        type="text"
        className="border rounded-lg w-[18rem] h-[2rem] outline-none p-2"
      />
    </div>
  );
};

export default Input;
