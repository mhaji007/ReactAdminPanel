import React from 'react'
import "./Sidebar.css"
import Logo from "../../images/logo.png"
const Sidebar = () => {
  return (
    <div className="sidebar">
        {/* Logo */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>D<span>A</span>SH</span>
        </div>
    </div>
  )
}

export default Sidebar