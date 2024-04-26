import React from "react";
import "./lineChart.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { lineChartData } from "../../utils/data";
ChartJS.register(
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const LineChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Spent time",
        // position: "end",
      },
    },
    scales: {
      y: {
        display: false,
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
    <div className="lineChart">
      <Line options={options} data={lineChartData} />
    </div>
  );
};

export default LineChart;
