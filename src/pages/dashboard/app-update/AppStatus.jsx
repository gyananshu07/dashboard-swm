import React from "react";

import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AppScreenshot from "assets/SwachttaApp.jpg";
import AppScreenshot2 from "assets/SwachttaApp_2.jpg";

import DoughnutHalfChart from "components/dashboard/charts/app-update/DoughnutHalfChart";

function AppStatus() {
  const AppComplaintData = {
    animationEnabled: true,
    theme: "light2",
    exportEnabled: true,
    colorSet: "blueShades",
    legend: {
      fontFamily: "Poppins",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",

        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
        indexLabelFontColor: "white",
        indexLabelPlacement: "inside",
        toolTipContent: "{label}: <strong>{y} Crores</strong>",
        startAngle: 90,
        endAngle: -90,
        dataPoints: [
          { y: 2.55, label: "Complaints Posted" },
          { y: 2.39, label: "Complaints Resolved" },
        ],
      },
    ],
  };
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
      <div className={styles.card}>
        <div className={styles.cardHeader}>Swachhata App Update</div>
        <div className={styles.cardBody}>
          <div className={styles.imageContainer}>
            <img
              src={AppScreenshot}
              alt="Swachhta App - Screenshot"
              className={styles.image}
            />
          </div>

          <DoughnutHalfChart data={AppComplaintData} />

          <div className={styles.imageContainer}>
            <img
              src={AppScreenshot2}
              alt="Swachhta App - Screenshot"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppStatus;
