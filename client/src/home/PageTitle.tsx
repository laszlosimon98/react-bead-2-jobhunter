import { PropsWithChildren, ReactElement } from "react";

const PageTitle = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className="w-full shadow-lg h-16 flex justify-center items-center">
      <h2 className="font-bold text-3xl px-7 text-sky-600">{children}</h2>
    </div>
  );
};

export default PageTitle;
