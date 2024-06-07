import { PropsWithChildren, ReactElement } from "react";

const MenuItem = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <li className="text-stone-200 md:text-lg lg:text-xl md:font-bold cursor-pointer hover:text-stone-300 focus:text-stone-300 lg:hover:text-2xl transition-all">
      {children}
    </li>
  );
};

export default MenuItem;
