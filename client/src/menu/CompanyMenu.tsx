import { ReactElement } from "react";
import { Link } from "react-router-dom";

const CompanyMenu = (): ReactElement => {
  const items = [
    {
      title: "Álláshirdetések",
      path: "/",
    },
    {
      title: "Profilom",
      path: "profile",
    },
    {
      title: "Álláshirdetés hozzáadása",
      path: "create",
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
          className="text-stone-200 text-xl font-bold cursor-pointer hover:text-stone-300 focus:text-stone-300 hover:text-2xl transition-all"
        >
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </>
  );
};

export default CompanyMenu;
