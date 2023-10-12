import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GroupedBarChart({ data, titleText }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: titleText,
        font: {
          size: 16,
        },
      },
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: true,
    },

    scales: {
      x: {
        ticks: {
          font: {
            weight: 600,
          },
        },
      },
      y: {},
    },
  };

  return (
    <div className="chart">
      <Bar options={options} data={data} />
    </div>
  );
}
