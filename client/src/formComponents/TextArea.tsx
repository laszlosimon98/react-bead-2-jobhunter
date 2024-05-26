import { ReactElement } from "react";

type TextAreaProps = {
  title: string;
};

const TextArea = ({ title }: TextAreaProps): ReactElement => {
  return (
    <div className="flex flex-col">
      <label htmlFor={title} className="italic text-lg mb-1">
        {title}
      </label>
      <textarea
        id={title}
        className="border rounded-lg w-[24rem] h-[7.5rem] outline-none p-2 resize-none"
      />
    </div>
  );
};

export default TextArea;
