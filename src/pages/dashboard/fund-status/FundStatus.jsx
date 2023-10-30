import React, { useState } from "react";

import styles from "./styles.module.css";
import GroupedBarChart from "components/dashboard/charts/fund-status/GroupedBarChart";
import SelectOptions from "utils/SelectOptions";

function FundStatus() {
  const [statusBy, setStatusBy] = useState("sbm-1");

  const FundReleaseDataSBM1 = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    legend: {
      fontFamily: "Poppins",
    },
    colorSet: "blueShades",
    title: {
      text: "Fund Release Data SBM-1",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisX: {
      labelFontFamily: "Poppins",
      labelWrap: true,
    },
    axisY: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      titleFontWeight: 500,
      title: "in Crores (₹)",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "column",
        name: "MoHUA",
        showInLegend: true,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        toolTipContent: "<b>{name}:</b> {y} (in Crores (₹))",
        dataPoints: [
          { label: "Allocated", y: 609.27 },
          { label: "Released", y: 565.07 },
        ],
      },
      {
        type: "column",
        name: "States/UTs",
        showInLegend: true,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        toolTipContent: "<b>{name}:</b> {y} (in Crores (₹))",
        dataPoints: [
          { label: "Allocated", y: 14013.46 },
          { label: "Released", y: 11905.57 },
        ],
      },
      {
        type: "column",
        name: "Total",
        showInLegend: true,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        toolTipContent: "<b>{name}:</b> {y} (in Crores (₹))",
        dataPoints: [
          { label: "Allocated", y: 14622.73 },
          { label: "Released", y: 12470.64 },
        ],
      },
    ],
  };

  // Fund Release Data SBMU2
  const FundReleaseDataSBMU2 = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    legend: {
      fontFamily: "Poppins",
    },
    colorSet: "blueShades",
    title: {
      text: "Fund Release Data SBM U-2.0",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisX: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      labelWrap: true,
    },
    axisY: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      titleFontWeight: 500,
      title: "in Crores (₹)",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "column",
        name: "MoHUA",
        showInLegend: true,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        toolTipContent: "<b>{name}:</b> {y} (in Crores (₹))",
        dataPoints: [
          { label: "Allocated", y: 1172.6 },
          { label: "Released", y: 62.36 },
        ],
      },
      {
        type: "column",
        name: "States/UTs",
        showInLegend: true,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        toolTipContent: "<b>{name}:</b> {y} (in Crores (₹))",
        dataPoints: [
          { label: "Allocated", y: 32821.0 },
          { label: "Released", y: 3456.78 },
        ],
      },
      {
        type: "column",
        name: "Total",
        showInLegend: true,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        toolTipContent: "<b>{name}:</b> {y} (in Crores (₹))",
        dataPoints: [
          { label: "Allocated", y: 33993.6 },
          { label: "Released", y: 3519.15 },
        ],
      },
    ],
  };

  // Fund Utilization Data
  const FundUtilizationData = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    legend: {
      fontFamily: "Poppins",
    },
    colorSet: "blueShades",
    title: {
      text: "Fund Utilization Data",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisX: {
      labelFontFamily: "Poppins",
      labelWrap: true,
    },
    axisY: {
      titleFontFamily: "Poppins",
      titleFontSize: 16,
      labelFontFamily: "Poppins",
      titleFontWeight: 500,
      title: "in Crores (₹)",
    },
    data: [
      {
        type: "column",
        name: "UC Pending",
        showInLegend: false,
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        toolTipContent: "<b>{name}:</b> {y} (in Crores (₹))",
        dataPoints: [
          { label: "2014-2015", y: 0.94 },
          { label: "2015-2016", y: 11.81 },
          { label: "2016-2017", y: 2 },
          { label: "2017-2018", y: 26.23 },
          { label: "2019-2020", y: 194 },
          { label: "2020-2021", y: 420 },
          { label: "2021-2022", y: 574.65 },
          { label: "2022-2023", y: 716.5 },
          { label: "Total", y: 1946.84 },
        ],
      },
    ],
  };

  const handleChange = (e) => {
    setStatusBy(e.target.value);
  };

  const options = [
    {
      value: "sbm-1",
      label: "SBM 1.0",
    },
    {
      value: "sbm-2",
      label: "SBM U-2.0",
    },
  ];

  return (
    <div className={styles.container}>
      <style type="text/css" media="print">
        {`
          @page {
            size: portrait;
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
          <div className={styles.cardHeader}>Fund Release (in Crores)</div>

          <SelectOptions
            options={options}
            onValueChange={handleChange}
            value={statusBy}
          />

          {statusBy === "sbm-1" ? (
            <div className={styles.cardBody}>
              <GroupedBarChart data={FundReleaseDataSBM1} />
            </div>
          ) : (
            <div className={styles.cardBody}>
              <GroupedBarChart data={FundReleaseDataSBMU2} />
            </div>
          )}
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>Fund Utilization (in Crores)</div>
          <div className={styles.cardBody}>
            <GroupedBarChart data={FundUtilizationData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundStatus;
