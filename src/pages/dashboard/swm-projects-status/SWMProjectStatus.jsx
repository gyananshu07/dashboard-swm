import React, { useState } from "react";

import styles from "./styles.module.css";

import BarChart from "components/dashboard/charts/project-status/BarChart";

import SelectOptions from "utils/SelectOptions";

function SWMProjectStatus() {
  const [statusByUnderConstruction, setStatusByUnderConstruction] =
    useState("no-of-projects");
  const [statusByConstructed, setStatusByConstructed] =
    useState("designed-capacity");

  const noOfProjectsDataUC = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    title: {
      text: "No. of Projects (Under Construction)",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisX: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      labelWrap: true,
      titleFontWeight: 500,
      title: "Project Type ➜",
    },
    axisY: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      titleFontWeight: 500,
      title: "No. of Projects",
    },
    data: [
      {
        type: "column",
        name: "No. of Projects",
        showInLegend: false,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        dataPoints: [
          { label: "Waste to Compost", y: 39 },
          { label: "Waste to Electricity", y: 11 },
          { label: "Bio-Meth.", y: 7 },
          { label: "MRF", y: 49 },
          { label: "C&D", y: 19 },
          { label: "RDF", y: 3 },
          { label: "Total", y: 106 },
        ],
      },
    ],
  };

  const designedCapacityDataUC = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    legend: {
      fontFamily: "Poppins",
    },
    title: {
      text: "Designed Capacity (Under Construction)",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisX: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      labelWrap: true,
      titleFontWeight: 500,
      title: "Project Type ➜",
    },
    axisY: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      titleFontWeight: 500,
      title: "Designed Capacity (in TPD)",
    },
    data: [
      {
        type: "column",
        name: "Designed Capacity (in TPD)",
        showInLegend: false,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        dataPoints: [
          { label: "Waste to Compost", y: 4511 },
          { label: "Waste to Electricity", y: 10250 },
          { label: "Bio-Meth.", y: 375 },
          { label: "MRF", y: 11030 },
          { label: "C&D", y: 5555 },
          { label: "RDF", y: 40 },
          { label: "Total", y: 26166 },
        ],
      },
    ],
  };

  const noOfProjectsDataC = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    legend: {
      fontFamily: "Poppins",
    },
    title: {
      text: "No. of Projects (Completed)",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisX: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      labelWrap: true,
      titleFontWeight: 500,
      title: "Project Type ➜",
    },
    axisY: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      titleFontWeight: 500,
      title: "No. of Projects",
    },
    data: [
      {
        type: "column",
        name: "No. of Projects",
        showInLegend: false,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        dataPoints: [
          { label: "Waste to Compost", y: 2173 },
          { label: "Waste to Electricity", y: 9 },
          { label: "Bio-Meth.", y: 102 },
          { label: "MRF", y: 2050 },
          { label: "SRLM", y: 331 },
          { label: "C&D", y: 868 },
          { label: "RDF", y: 40 },
          { label: "Total", y: 4334 },
        ],
      },
    ],
  };

  const designedCapacityDataC = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    legend: {
      fontFamily: "Poppins",
    },
    title: {
      text: "Designed Capacity (Completed)",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisX: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      labelWrap: true,
      titleFontWeight: 500,
      title: "Project Type ➜",
    },
    axisY: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      titleFontWeight: 500,
      title: "Designed Capacity (in TPD)",
    },
    data: [
      {
        type: "column",
        name: "Designed Capacity (in TPD)",
        showInLegend: false,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        dataPoints: [
          { label: "Waste to Compost", y: 98544 },
          { label: "Waste to Electricity", y: 13400 },
          { label: "Bio-Meth.", y: 3135 },
          { label: "MRF", y: 74830 },
          { label: "SRLM", y: 13335 },
          { label: "C&D", y: 35626 },
          { label: "RDF", y: 6221 },
          { label: "Total", y: 189909 },
        ],
      },
    ],
  };

  const handleChangeUnderConstruction = (e) => {
    setStatusByUnderConstruction(e.target.value);
  };

  const handleChangeConstructed = (e) => {
    setStatusByConstructed(e.target.value);
  };

  const options = [
    {
      value: "no-of-projects",
      label: "No. of Projects",
    },
    {
      value: "designed-capacity",
      label: "Designed Capacity",
    },
  ];

  return (
    <div className={styles.container}>
      <style type="text/css" media="print">
        {`
          @page {
            size: landscape;
            margin: 0;
            padding:0 !important;
            width: 100% !important;
            height: 100vh !important;
          }
          .cardContainer{
            height: 100% !important;
          }
          .canvasjs-chart-canvas {
            position: relative !important;
            width: 90% !important;
          }
          `}
      </style>
      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>
            Under Construction SWM Projects
          </div>

          <SelectOptions
            options={options}
            onValueChange={handleChangeUnderConstruction}
            value={statusByUnderConstruction}
          />

          {statusByUnderConstruction === "no-of-projects" ? (
            <div className={styles.cardBody}>
              <BarChart data={noOfProjectsDataUC} />
            </div>
          ) : (
            <div className={styles.cardBody}>
              <BarChart data={designedCapacityDataUC} />
            </div>
          )}
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>Completed SWM Projects</div>

          <SelectOptions
            options={options}
            onValueChange={handleChangeConstructed}
            value={statusByConstructed}
          />

          {statusByConstructed === "no-of-projects" ? (
            <div className={styles.cardBody}>
              <BarChart data={noOfProjectsDataC} />
            </div>
          ) : (
            <div className={styles.cardBody}>
              <BarChart data={designedCapacityDataC} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SWMProjectStatus;
