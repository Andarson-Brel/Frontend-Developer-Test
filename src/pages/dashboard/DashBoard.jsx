import React, { useState } from "react";
import DataCard from "../../components/dataCard/DataCard";
import "./dashboard.scss";
import FeedCard from "../../components/feedCard/FeedCard";
import TransactionHistoryListItem from "../../components/transactionHistoryList/TransactionHistoryListItem";
import VirtualCard from "../../components/virtualCard/VirtualCard";
import ProgressCard from "../../components/progressCard/ProgressCard";
import Chart from "../../components/chart/Chart";
import LineChart from "../../components/lineChart/LineChart";
import { faCreditCard, faSignal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataSummary } from "../../utils/data";

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState("signal");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="dashboard">
      <div className="tab-btn">
        <span
          className={`signal ${activeTab === "signal" ? "active" : ""}`}
          onClick={() => handleTabClick("signal")}
        >
          <FontAwesomeIcon
            icon={faSignal}
            color={"#8880CF"}
            size="1.5x"
            className="tab-icon "
          />
        </span>
        <span
          className={`credit-card ${
            activeTab === "creditCard" ? "active" : ""
          }`}
          onClick={() => handleTabClick("creditCard")}
        >
          <FontAwesomeIcon
            icon={faCreditCard}
            color={"#8880CF"}
            size="1.5x"
            className="tab-icon"
          />
        </span>
      </div>

      <div className="content-container">
        <section
          className={`firstContainer ${activeTab === "signal" ? "active" : ""}`}
        >
          <div className="data-cards">
            {dataSummary.map((data, i) => (
              <DataCard
                title={data?.title}
                value={data?.value}
                img={data?.img}
                style={data?.style}
                key={i}
              />
            ))}
          </div>
          <Chart />
          <section className="cards-section">
            <LineChart />
            <FeedCard />
          </section>
        </section>
        <section
          className={`secondContainer ${
            activeTab === "creditCard" ? "active" : ""
          }`}
        >
          <ProgressCard />
          <div className="section-title">
            <h3>My Card</h3>
            <p>...</p>
          </div>
          <VirtualCard />
          <div className="section-title">
            <h3>Transaction</h3>
            <img src="./images/plus-fill.svg" alt="" />
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
        </section>
      </div>
    </div>
  );
};

export default DashBoard;
