import React from "react";
import "./dataCard.scss";
const DataCard = ({ img, title, value, style }) => {
  return (
    <div className="data-card" style={style}>
      <img src={img} alt="data icon" loading="lazy" />
      <div className="data-cont">
        <h2 className="title">{title}</h2>
        <p className="value">{value}</p>
      </div>
    </div>
  );
};

export default DataCard;
