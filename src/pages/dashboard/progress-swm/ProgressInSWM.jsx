import React, { useState } from "react";

import styles from "./styles.module.css";

import GroupedBarChart from "components/dashboard/charts/progress-swm/GroupedBarChart";

import SelectOptions from "utils/SelectOptions";

function ProgressInSWM() {
  const [statusBy, setStatusBy] = useState("collection");

  const doorToDoorCollectionConfig = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    legend: {
      fontFamily: "Poppins",
    },
    axisY: {
      title: "Wards",
      titleFontFamily: "Poppins",
      labelFontFamily: "Poppins",
    },
    axisX: {
      labelFontFamily: "Poppins",
    },
    title: {
      fontSize: 16,
      text: "Door to Door Collection",
      fontFamily: "Poppins",
    },
    data: [
      {
        type: "column",
        name: "Total Wards",
        showInLegend: true,
        dataPoints: [{ label: "Collection Status", y: 94854 }],
        toolTipContent: "<b>{name}:</b> {y} (Wards)",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
      {
        type: "column",
        name: "Wards with 100% Collection",
        showInLegend: true,
        dataPoints: [{ label: "Collection Status", y: 90819 }],
        toolTipContent: "<b>{name}:</b> {y} (Wards)",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
      {
        type: "column",
        name: "Remaining Wards",
        showInLegend: true,
        dataPoints: [{ label: "Collection Status", y: 4015 }],
        toolTipContent: "<b>{name}:</b> {y} (Wards)",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
    ],
  };
  const sourceSegregationConfig = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    legend: { fontFamily: "Poppins", horizontalAlign: "center" },

    axisY: {
      title: "Wards",
      titleFontFamily: "Poppins",
      labelFontFamily: "Poppins",
    },
    axisX: {
      labelFontFamily: "Poppins",
    },
    title: {
      fontSize: 16,
      text: "Source Segregation",
      fontFamily: "Poppins",
    },
    toolTip: {
      fontFamily: "Poppins",
    },
    data: [
      {
        type: "column",
        showInLegend: true,
        name: "Total Wards",
        dataPoints: [{ label: "Segregation Status", y: 94854 }],
        toolTipContent: "<b>{name}:</b> {y} wards",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
      {
        type: "column",
        showInLegend: true,
        name: "Wards with 100% Segregation",
        dataPoints: [{ label: "Segregation Status", y: 84166 }],
        toolTipContent: "<b>{name}:</b> {y} wards",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
      {
        type: "column",
        showInLegend: true,
        name: "Remaining Wards",
        dataPoints: [{ label: "Segregation Status", y: 10688 }],
        toolTipContent: "<b>{name}:</b> {y} wards",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
    ],
  };

  const wasteProcessingStatusConfig = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    legend: {
      fontFamily: "Poppins",
    },
    axisY: {
      title: "in TPD",
      titleFontFamily: "Poppins",
      labelFontFamily: "Poppins",
    },
    axisX: {
      labelFontFamily: "Poppins",
    },
    title: {
      fontSize: 16,
      text: "Waste Processing Status",
      fontFamily: "Poppins",
    },
    data: [
      {
        type: "column",
        name: "Total Waste Generated (in TPD)",
        showInLegend: true,
        dataPoints: [{ label: "Waste Processing Status", y: 155928 }],
        toolTipContent: "<b>{name}:</b> {y}",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
      {
        type: "column",
        name: "Waste Being Processed (in TPD)",
        showInLegend: true,
        dataPoints: [{ label: "Waste Processing Status", y: 119094 }],
        toolTipContent: "<b>{name}:</b> {y}",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
      {
        type: "column",
        name: "Remaining Waste to be Processed (in TPD)",
        showInLegend: true,
        dataPoints: [{ label: "Waste Processing Status", y: 4015 }],
        toolTipContent: "<b>{name}:</b> {y}",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
    ],
  };

  const handleChange = (e) => {
    setStatusBy(e.target.value);
  };

  const options = [
    {
      value: "collection",
      label: "By Collection",
    },
    {
      value: "segregation",
      label: "By Segregation",
    },
    {
      value: "processing",
      label: "By Processing",
    },
  ];

  return (
    <div className={styles.container}>
      <style type="text/css" media="print">
        {`
          @page {
            size: landscape;
            margin: 0;
            flex: 1 !important;
            padding:0 !important;
            width: 100% !important;
            height: 100vh !important;
          }
          body {
            display: flex;
            flex: 1 !important;
            justify-content: center;
            align-items: center;
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          `}
      </style>
      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>Progress Status</div>

          <SelectOptions
            options={options}
            onValueChange={handleChange}
            value={statusBy}
          />

          {statusBy === "collection" ? (
            <div className={styles.cardBody}>
              <GroupedBarChart data={doorToDoorCollectionConfig} />
            </div>
          ) : statusBy === "segregation" ? (
            <div className={styles.cardBody}>
              <GroupedBarChart data={sourceSegregationConfig} />
            </div>
          ) : (
            <div className={styles.cardBody}>
              <GroupedBarChart data={wasteProcessingStatusConfig} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgressInSWM;
