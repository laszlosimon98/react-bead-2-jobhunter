import { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { logout } from "../../services/authSlice";

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
  ];

  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispath(logout());
    navigate("/");
  };

  return (
    <>
      {items.map((item, idx) => (
        <MenuItem key={idx}>
          <Link to={item.path}>{item.title}</Link>
        </MenuItem>
      ))}
      <MenuItem>
        <div onClick={handleLogout}>Kijelentkezés</div>
      </MenuItem>
    </>
  );
};

export default CompanyMenu;
