import React from "react";
import "./virtualCard.scss";
const VirtualCard = () => {
  return (
    <div className="virtualCard">
      <img src="./images/virtual-card.svg" alt="virtual card" loading="lazy" />
      <div className="card-details">
        <p className="card-number">
          <span>****</span> <span>****</span> <span>****</span>{" "}
          <span>1234</span>
        </p>
        <div className="nameAndDate">
          <p className="name">Alex Smith</p>
          <p className="date">07/10</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualCard;
