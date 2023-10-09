import { Outlet } from "react-router-dom";

import logo from "../../assets/titles/logo.svg";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={logo} alt="Logo - League of Legends" />
      <Outlet />
    </LayoutContainer>
  );
}
