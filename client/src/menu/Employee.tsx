import { ReactElement } from "react";

const Employee = (): ReactElement => {
  const items = [
    {
      title: "Álláshirdetések",
      path: "",
    },
    {
      title: "Profilom",
      path: "",
    },
    {
      title: "Kijelentkezés",
      path: "",
    },
  ];

  return (
    <>
      {items.map((item, idx) => (
        <li
          key={idx}
          className="text-stone-200 text-xl font-bold cursor-pointer hover:text-stone-300 focus:text-stone-300"
        >
          {item.title}
        </li>
      ))}
    </>
  );
};

export default Employee;
