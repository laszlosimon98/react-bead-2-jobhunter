import { PropsWithChildren, ReactElement } from "react";
import Menu from "../menu/Menu";

const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default Layout;
