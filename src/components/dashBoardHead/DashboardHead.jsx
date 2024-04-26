import React from "react";
import "./dashboardHead.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const DashboardHead = () => {
  return (
    <div className="dashboardHead">
      <img src="./images/logo-white-bg.svg" alt="logo" className="logo" />
      <div className="searchbarAndLInk">
        <div className="searchContainer">
          <FontAwesomeIcon icon={faSearch} color={"#8880CF"} />
          <input type="text" placeholder="Search" />
        </div>
        <div className="headerLink">
          <Link>Feedback</Link>
          <Link>Contacts</Link>
          <Link>Help</Link>
        </div>
      </div>
      <div className="profileLink">
        <Link to={"/notification"}>
          <FontAwesomeIcon icon={faBell} color={"#8880CF"} />
        </Link>
        <div className="profile-icon-cont">
          <img src="/images/avatar.jpg" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHead;
