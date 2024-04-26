import React, { useState } from "react";
import "./sideNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faHouse,
  faMessage,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const SideNavbar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const [active, setActive] = useState(pathName);

  const handleClick = (page) => {
    setActive(page);
  };
  return (
    <div className="side-navbar">
      <div className="logo-cont">
        <img src="images/logo-colored-bg.svg" alt="logo" loading="lazy" />
      </div>
      <ul>
        <Link to={"/"} onClick={() => handleClick("/dashboard")}>
          <FontAwesomeIcon
            icon={faHouse}
            color={"#8880CF"}
            size="1.5x"
            className={`nav-link ${
              active === "/dashboard" || active === "/" ? "active" : ""
            }`}
          />
        </Link>
        <Link to={"/chart"} onClick={() => handleClick("/chart")}>
          <FontAwesomeIcon
            icon={faChartPie}
            color={"#8880CF"}
            className={`nav-link ${active === "/chart" ? "active" : ""}`}
          />
        </Link>

        <Link to={"/notification"} onClick={() => handleClick("/notification")}>
          <FontAwesomeIcon
            icon={faMessage}
            color={"#8880CF"}
            className={`nav-link ${active === "/notification" ? "active" : ""}`}
          />
        </Link>
        <Link to={"/wallet"} onClick={() => handleClick("/wallet")}>
          <FontAwesomeIcon
            icon={faWallet}
            color={"#8880CF"}
            className={`nav-link ${active === "/wallet" ? "active" : ""}`}
          />
        </Link>
      </ul>
    </div>
  );
};

export default SideNavbar;
