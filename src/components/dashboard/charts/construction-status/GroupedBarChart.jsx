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

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  interaction: {
    mode: "index",
    intersect: false,
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
        text: "in Lacs",
        font: {
          weight: 600,
          size: 16,
        },
      },
      stacked: true,
    },
  },
};

const labels = ["IHHL", "CT/PT"];
export const data = {
  labels,
  datasets: [
    {
      label: "Targeted Construction (in Lacs)",
      data: [58.99, 5.07],
      backgroundColor: "#f9b390",
      stack: "Stack 0",
    },
    {
      label: "Total Construction (Under Construction + Completed) (in Lacs)",
      data: [67.31, 6.52],
      backgroundColor: "#f58d59",
      stack: "Stack 1",
    },
    {
      label: "Total Constructed (in Lacs)",
      data: [63.03, 6.36],
      backgroundColor: "#f26721",
      stack: "Stack 2",
    },
    {
      label: "Under Construction (in Lacs)",
      data: [4.09, 0.15],
      backgroundColor: "#793411",
      stack: "Stack 3",
    },
  ],
};

export default function GroupedBarChart() {
  return (
    <div className="chart">
      <Bar options={options} data={data} />
    </div>
  );
}
