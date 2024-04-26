import "./notification.scss";
import React from "react";
import TransactionHistoryListItem from "../../components/transactionHistoryList/TransactionHistoryListItem";

const NotificationPage = () => {
  return (
    <div className="notificationPage">
      <div className="section-title">
        <h3>Transaction</h3>
      </div>
      <div className="transactionHistory-list">
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
        <TransactionHistoryListItem
          amount={200}
          transaction={"taxi"}
          date={"2 days ago"}
          img={"./images/taxi-icon.svg"}
        />
      </div>
    </div>
  );
};

export default NotificationPage;
