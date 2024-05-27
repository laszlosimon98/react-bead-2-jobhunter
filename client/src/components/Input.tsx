import { ReactElement } from "react";

type InputProps = {
  title: string;
  type: string;
};

const Input = ({ title, type }: InputProps): ReactElement => {
  return (
    <div className="flex flex-col">
      <label htmlFor={title} className="italic text-lg mb-1">
        {title}
      </label>
      <input
        id={title}
        type={type}
        className={`border rounded-lg ${
          type === "text" ? "w-text" : "w-number"
        } h-9 outline-none p-2`}
        min={100000}
        max={2000000}
      />
    </div>
  );
};

export default Input;
