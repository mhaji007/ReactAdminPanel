import React from "react";
import "./Sidebar.css";
import Logo from "../../images/logo.png";
import {UilEstate} from "@iconscout/react-unicons";

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
        <div className="menuItem">
            <div>
                <UilEstate/>
            </div>
            <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
