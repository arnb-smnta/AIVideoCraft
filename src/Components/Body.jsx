import React from "react";
import SideBarMenu from "./SideBarMenu";
import SidebarCollapse from "./SidebarCollapse";

import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const toggle = useSelector((appstore) => appstore.app.isMenuOpen);
  return (
    <div className="grid grid-flow-col">
      {toggle ? (
        <div className="col-span-1">
          <SideBarMenu />
        </div>
      ) : (
        <SidebarCollapse />
      )}
      <div className="col-span-11">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
