import "./chartPage.scss";
import React from "react";
import { dataSummary } from "../../utils/data";
import DataCard from "../../components/dataCard/DataCard";
import ProgressCard from "../../components/progressCard/ProgressCard";
import Chart from "../../components/chart/Chart";
import LineChart from "../../components/lineChart/LineChart";

const ChartPage = () => {
  return (
    <div className="chartPage">
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
      <ProgressCard />
      <Chart />
      <LineChart />
    </div>
  );
};

export default ChartPage;
