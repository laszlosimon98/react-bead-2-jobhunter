import { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useCookies } from "react-cookie";

const JobSeekerMenu = (): ReactElement => {
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

  const [cookie, setCookie, removeCookie] = useCookies(["access_token"]);

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
        <div onClick={handleLogout}>Kijelentkezés</div>
      </MenuItem>
    </>
  );
};

export default JobSeekerMenu;
