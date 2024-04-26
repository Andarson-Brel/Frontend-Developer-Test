import React, { useEffect, useState } from "react";
import "./progressCard.scss";

const ProgressCard = () => {
  const [displayedValue, setDisplayedValue] = useState(0);
  const value = 88;

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedValue < value) {
        setDisplayedValue((prevValue) => {
          const nextValue = prevValue + 1;
          return nextValue <= value ? nextValue : value;
        });
      } else {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [value, displayedValue]);

  return (
    <div className="container">
      <div className="floating-value">$ 10,000</div>
      <div className="card">
        <div className="percentage" style={{ "--value": value }}>
          <div className="dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">{displayedValue}%</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
