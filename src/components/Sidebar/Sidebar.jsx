import React from "react";
import "./Sidebar.css";
import Logo from "../../images/logo.png";

import { sidebarData } from "../../data/data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          D<span>A</span>SH
        </span>
      </div>
      {/* Menu */}
      <div className="menu">
        {sidebarData.map((item, index) => {
          return (
            <div className="menuItem">
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
