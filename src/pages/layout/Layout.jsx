import React, { useState } from "react";
import "./layout.scss";

import SideNavbar from "../../components/sideNavbar/SideNavbar";
import MobileNavbar from "../../components/mobileNavbar/MobileNavbar";
import DashboardHead from "../../components/dashBoardHead/DashboardHead";

import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="layout">
      <div className="side-navbar-container">
        <SideNavbar />
      </div>
      <div className="mobile-navbar-container">
        <MobileNavbar />
      </div>

      <main>
        <DashboardHead />

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
