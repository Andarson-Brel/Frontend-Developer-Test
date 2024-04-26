export const UserData = [
  { id: 1, month: "Jan", gain: 1000 },
  { id: 2, month: "Jan", gain: 1550 },
  { id: 3, month: "Jan", gain: 1003 },
  { id: 4, month: "Jan", gain: 1200 },
  { id: 5, month: "Jan", gain: 3400 },
  { id: 6, month: "Jan", gain: 1300 },
  { id: 7, month: "Jan", gain: 10500 },
  { id: 8, month: "Jan", gain: 1010 },
  { id: 9, month: "Jan", gain: 1056 },
  { id: 10, month: "Jan", gain: 1123 },
  { id: 11, month: "Jan", gain: 2452 },
  { id: 12, month: "Jan", gain: 7853 },
];
export const lineChartData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      showLine: false,
      fill: true,
      label: "Spent Time",
      data: [2500, 5300, 72, 9422, 4352, 8982, 4567],
      backgroundColor: "#F5F5FC",
      tension: 0.4,
      borderColor: "#FF392B",
      pointStyle: false,
    },
    {
      fill: false,

      data: [10, 1000, 7342, 3422, 4352, 8982, 4567],
      backgroundColor: "yellow",
      tension: 0.4,
      borderColor: "#FF392B",
      pointStyle: false,
    },
  ],
};
export const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "Users",
      data: [1000, 2300, 2342, 3422, 4352, 8982, 4567, 8973, 4578],
      borderColor: "#3326AE",
      borderRadius: 500,
      borderWidth: "none",
      width: "10px",
      backgroundColor: ["#3326AE"],
      barThickness: 10,
      hoverBackgroundColor: "#FF231A",
      borderSkipped: false,
      //   hoverBorderWidth: 100,
      //   hoverBorderColor: "#fff",
    },
  ],
};

export const dataSummary = [
  { title: "visitors", value: "10320", img: "/images/chart-1.svg" },
  { title: "visitors", value: "10320", img: "/images/chart-1.svg" },
  {
    title: "visitors",
    value: "10320",
    img: "/images/chart-1.svg",
    style: { backgroundColor: "#ff392b" },
  },
];
