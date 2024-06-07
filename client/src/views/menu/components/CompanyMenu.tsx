import { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setFormEmpty } from "../../../services/jobs/jobsSlice";
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
  ];

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [, , removeCookie] = useCookies(["access_token"]);

  const handleLogout = () => {
    removeCookie("access_token", { path: "/" });
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
        <Link to={"/create"} onClick={() => dispatch(setFormEmpty())}>
          Álláshirdetés hozzáadása
        </Link>
      </MenuItem>

      <MenuItem>
        <div onClick={handleLogout}>Kijelentkezés</div>
      </MenuItem>
    </>
  );
};

export default CompanyMenu;
