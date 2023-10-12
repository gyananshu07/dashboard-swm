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
            size: 16,
          },
        },
        stacked: true,
      },
      y: {
        title: {
          display: true,
          text: titleText,
          font: {
            weight: 600,
            size: 16,
          },
        },
        stacked: true,
      },
    },
  };

  return (
    <div className="chart">
      <Bar options={options} data={data} />
    </div>
  );
}
