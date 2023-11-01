import React, { useState } from "react";

import styles from "./styles.module.css";
import BarChart from "components/dashboard/charts/project-status-decentralized/BarChart";
import SelectOptions from "utils/SelectOptions";

function SWMProjectStatusDecentralized() {
  const [statusByConstruction, setStatusByConstruction] =
    useState("under-construction");

  const UnderConstructionData = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",

    title: {
      text: "Under Construction",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisX: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      labelWrap: true,
      titleFontWeight: 500,
      title: "Category",
    },
    axisY: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      labelWrap: true,
      titleFontWeight: 500,
    },
    data: [
      {
        type: "column",
        name: "No. of Projects",
        showInLegend: false,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        dataPoints: [
          { label: "No. of Projects", y: 123 },
          { label: "Designed Capacity (in TPD)", y: 194 },
        ],
        color: "#46AAC8",
      },
    ],
  };

  const CompletedConstructionData = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    title: {
      text: "Completed Construction",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisX: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      labelWrap: true,
      titleFontWeight: 500,
      title: "Category",
    },
    axisY: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      labelWrap: true,
      titleFontWeight: 500,
      title: "Value",
    },
    data: [
      {
        type: "column",
        name: "No. of Projects",
        showInLegend: false,
        indexLabelFontFamily: "Poppins",
        dataPoints: [
          { label: "No. of Projects", y: 123 },
          { label: "Designed Capacity (in TPD)", y: 194 },
        ],
        color: "#46AAC8",
      },
    ],
  };

  const handleChange = (e) => {
    setStatusByConstruction(e.target.value);
  };

  const options = [
    {
      value: "under-construction",
      label: "Under Construction",
    },
    {
      value: "constructed",
      label: "Constructed",
    },
  ];

  return (
    <div className={styles.container}>
      <style type="text/css" media="print">
        {`
          @page {
            size: portrait;
            margin: 0;
            padding:0 !important;
            width: 100% !important;
            height: 100vh !important;
          }
          .canvasjs-chart-canvas {
            position: relative !important;
            width: 100% !important;
          }
          `}
      </style>
      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>
            SWM Projects Construction Status
          </div>

          <SelectOptions
            options={options}
            onValueChange={handleChange}
            value={statusByConstruction}
          />

          {statusByConstruction === "under-construction" ? (
            <div className={styles.cardBody}>
              <BarChart data={UnderConstructionData} />
            </div>
          ) : (
            <div className={styles.cardBody}>
              <BarChart data={CompletedConstructionData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SWMProjectStatusDecentralized;
