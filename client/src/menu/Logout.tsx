import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Logout = (): ReactElement => {
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
          className="text-stone-200 text-xl font-bold cursor-pointer hover:text-stone-300 focus:text-stone-300"
        >
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Logout;
