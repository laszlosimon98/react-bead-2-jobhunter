import { ReactElement } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

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
        <MenuItem key={idx}>
          <Link to={item.path}>{item.title}</Link>
        </MenuItem>
      ))}
    </>
  );
};

export default CompanyMenu;
