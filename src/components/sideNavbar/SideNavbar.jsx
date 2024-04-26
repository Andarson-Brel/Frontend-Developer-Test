import React, { useState } from "react";
import "./sideNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faChartPie,
  faChartSimple,
  faHouse,
  faMessage,
  faPieChart,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SideNavbar = () => {
  const [active, setActive] = useState("home");

  const handleClick = (page) => {
    setActive(page);
  };
  return (
    <div className="side-navbar">
      <div className="logo-cont">
        <img src="images/logo-colored-bg.svg" alt="logo" />
        {/* <img src="images/logo-white-bg.svg" alt="logo" /> */}
      </div>
      <ul>
        <Link to={"/"} onClick={() => handleClick("home")}>
          <FontAwesomeIcon
            icon={faHouse}
            color={"#8880CF"}
            size="1.5x"
            className={`nav-link ${active === "home" ? "active" : ""}`}
          />
        </Link>
        <Link to={"/chart"} onClick={() => handleClick("chart")}>
          <FontAwesomeIcon
            icon={faChartPie}
            color={"#8880CF"}
            className={`nav-link ${active === "chart" ? "active" : ""}`}
          />
        </Link>

        <Link to={"/notification"} onClick={() => handleClick("notification")}>
          <FontAwesomeIcon
            icon={faMessage}
            color={"#8880CF"}
            className={`nav-link ${active === "notification" ? "active" : ""}`}
          />
        </Link>
        <Link to={"/wallet"} onClick={() => handleClick("wallet")}>
          <FontAwesomeIcon
            icon={faWallet}
            color={"#8880CF"}
            className={`nav-link ${active === "wallet" ? "active" : ""}`}
          />
        </Link>
      </ul>
    </div>
  );
};

export default SideNavbar;
