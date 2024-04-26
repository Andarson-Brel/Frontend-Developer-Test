import React from "react";
import "./chart.scss";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js";
import { barChartData } from "../../utils/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales
);
const Chart = () => {
  const opitions = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Statistics",
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        border: { display: false },
        stacked: true,
      },
      x: {
        grid: {
          display: false,
        },
        border: { display: false },
        stacked: true,
      },
    },
  };
  return (
    <div className="chartBox">
      <Bar options={opitions} data={barChartData} />
    </div>
  );
};

export default Chart;
