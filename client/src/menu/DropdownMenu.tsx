import { ReactElement } from "react";

const DropdownMenu = (): ReactElement => {
  return (
    <div className="w-8 h-[0.375rem] bg-stone-200 rounded-lg relative before:w-8 before:h-[0.375rem] before:bg-stone-200 before:rounded-lg before:absolute before:-top-[0.55rem] after:w-8 after:h-[0.375rem] after:bg-stone-200 after:rounded-lg after:absolute after:top-[0.55rem]"></div>
  );
};

export default DropdownMenu;
