import React from "react";
import "./transactionHistoryList.scss";
const TransactionHistoryListItem = ({ img, transaction, date, amount }) => {
  return (
    <div className="transactionLst">
      <div className="iconAndDate">
        <div className="icon-cont">
          <img src={img} alt="" loading="lazy" />
        </div>
        <div className="transactionAnddate">
          <h4 className="title">{transaction}</h4>
          <p className="date">{date}</p>
        </div>
      </div>
      <div className="amount">${amount}</div>
    </div>
  );
};

export default TransactionHistoryListItem;
