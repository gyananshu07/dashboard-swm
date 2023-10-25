import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  LinearScale,
  CategoryScale,
  PointElement,
  LineController,
  LineElement,
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  Filler,
  ArcElement,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

import AppRouter from "AppRouter";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineController,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  Filler,
  ArcElement,
  ChartDataLabels
);

ChartJS.defaults.set("plugins.datalabels", {
  color: "#1A404B",
  anchor: "end",
  align: "end",
  font: {
    weight: 600,
  },
  backgroundColor: null,
  borderWidth: 0,
});

ChartJS.defaults.elements.bar.hoverBackgroundColor = "#1a404b";
ChartJS.defaults.elements.bar.borderColor = "#fff";
ChartJS.defaults.elements.bar.borderWidth = 2;
// ChartJS.defaults.barThickness = 60;

ChartJS.defaults.elements.arc.hoverBackgroundColor = "#1a404b";
ChartJS.defaults.elements.arc.hoverBorderColor = "#0D2026";
ChartJS.defaults.elements.arc.hoverBorderWidth = 2;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
