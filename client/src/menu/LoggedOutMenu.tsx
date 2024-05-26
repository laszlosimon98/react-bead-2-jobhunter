import { ReactElement } from "react";
import { Link } from "react-router-dom";

const LoggedOutMenu = (): ReactElement => {
  const items = [
    {
      title: "Bejelentkezés",
      path: "/login",
    },
    {
      title: "Regisztráció",
      path: "/register",
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

export default LoggedOutMenu;
