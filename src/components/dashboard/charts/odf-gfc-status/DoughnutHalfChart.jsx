import React from "react";

import { Doughnut } from "react-chartjs-2";

import "./halfChart.css";

import { defaults } from "chart.js";
defaults.font.family = "Poppins";

const options = {
  plugins: {
    legend: {
      position: "bottom",
      align: "center",
      display: true,
      labels: {
        font: {
          size: 15,
          family: "Poppins",
        },
      },
    },
    pointStyle: "circle",
    tooltip: {
      enabled: true,
      font: {
        family: "Poppins",
      },
    },

    maintainAspectRatio: true,
    responsive: true,
  },
  rotation: -90,
  circumference: 180,
  cutout: "50%",
};

export default function DoughnutHalfChart({ data }) {
  return (
    <>
      <div className="chart">
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}
