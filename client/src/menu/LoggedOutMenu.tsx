import { ReactElement } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

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
        <MenuItem key={idx}>
          <Link to={item.path}>{item.title}</Link>
        </MenuItem>
      ))}
    </>
  );
};

export default LoggedOutMenu;
