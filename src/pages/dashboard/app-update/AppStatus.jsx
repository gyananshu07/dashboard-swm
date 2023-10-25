import React from "react";

import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AppScreenshot from "assets/SwachttaApp.jpg";
import AppScreenshot2 from "assets/SwachttaApp_2.jpg";

import DoughnutHalfChart from "components/dashboard/charts/app-update/DoughnutHalfChart";

function AppStatus() {
  const AppComplaintData = {
    labels: ["Complaints Posted", "Complaints Resolved"],
    datasets: [
      {
        label: "in Crores",
        data: [2.55, 2.39],
        backgroundColor: ["#54CAEE", "#30758A"],
        borderColor: ["#42A0BC", "#286070"],
        borderWidth: 0.2,
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
          <div className={styles.cardContainer}>
            <div className="text-center" style={{ fontWeight: 600 }}>
              Values in Crores
            </div>
            <DoughnutHalfChart data={AppComplaintData} />
          </div>

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
