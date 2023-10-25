import React from "react";
import styles from "./styleSheet.module.css";

import DoughnutHalfChart from "components/dashboard/charts/odf-gfc-status/DoughnutHalfChart";

function ODFGFCStatus() {
  const dataODF = {
    labels: [
      "No. of ULBs certified ODF & above",
      "No. of ULBs certified ODF+ & above",
      "No. of ULBs certified ODF ++",
      "No. of ULBs certified Water+",
    ],
    datasets: [
      {
        label: "No. of ULBs",
        data: [4355, 3547, 1191, 14],
        backgroundColor: ["#54CAEE", "#4BB5D5", "#398AA3", "#30758A"],
        borderColor: ["#f79c6f", "#46AAC8", "#3E95AF", "#2C6B7D"],
        borderWidth: 0.2,
      },
    ],
  };

  const dataGFC = {
    labels: [
      "GFC 1 Star Certified Cities",
      "GFC 3 Star Certified Cities",
      "GFC 5 Star Certified Cities",
      "GFC 7 Star Certified Cities",
    ],
    datasets: [
      {
        label: "No. of GFC Certified Cities",
        data: [234, 199, 11, 1],
        backgroundColor: ["#54CAEE", "#4BB5D5", "#398AA3", "#30758A"],
        borderColor: ["#f79c6f", "#46AAC8", "#3E95AF", "#2C6B7D"],
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
            width: 100vw !important;
            height: 100vh !important;
          }
          body {
            display: flex;
            flex: 1 !important;
            justify-content: center;
            align-items: center;
            width: 100vw !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          `}
      </style>
      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>ULBs declared ODF</div>
          <div className={styles.cardBody}>
            <DoughnutHalfChart data={dataODF} />
          </div>
          <div className={styles.helper}>ODF - Open Defecation Free</div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>ULBs declared GFC</div>
          <div className={styles.cardBody}>
            <DoughnutHalfChart data={dataGFC} />
          </div>

          <div className={styles.helper}>GFC - Garbage Free Cities</div>
        </div>
      </div>

      <div className={styles.cardContainer} style={{ width: "100vw" }}>
        <div className={styles.cardHeader}>Total Data</div>
        <div className={styles.cardBody} style={{ width: "100%" }}>
          <div className={styles.subCard}>
            <div className={styles.subCardHeading}>
              Total no of ULBs as per 2011 census
            </div>
            <div className={styles.subCardBody}>4041</div>
          </div>

          <div className={styles.subCard}>
            <div className={styles.subCardHeading}>
              Total no of ULBs as on date
            </div>
            <div className={styles.subCardBody}>4884</div>
          </div>

          <div className={styles.subCard}>
            <div className={styles.subCardHeading}>ULBs declared ODF</div>
            <div className={styles.subCardBody}>4884</div>
          </div>

          <div className={styles.subCard}>
            <div className={styles.subCardHeading}>
              ODF Declared States + UTs
            </div>
            <div className={styles.subCardBody}>35</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ODFGFCStatus;
