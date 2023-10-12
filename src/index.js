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
  ArcElement
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
