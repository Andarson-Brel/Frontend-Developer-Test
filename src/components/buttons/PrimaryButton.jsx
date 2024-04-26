import React from "react";
import "./button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const PrimaryButton = () => {
  return (
    <div className="primary-btn">
      Contact{" "}
      <FontAwesomeIcon
        icon={faChevronRight}
        color={"#fff"}
        className="arrow-right"
      />
    </div>
  );
};

export default PrimaryButton;
