import React from "react";
import styles from "./styleSheet.module.css";

import DashboardLayout from "components/dashboard/layout/DashboardLayout";
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
        backgroundColor: ["#f9b390", "#f58d59", "#f26721", "#793411"],
        borderColor: ["#f79c6f", "#f58d59", "#f47e42", "#3d1a08"],
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
        backgroundColor: ["#f9b390", "#f58d59", "#f26721", "#793411"],
        borderColor: ["#f79c6f", "#f58d59", "#f47e42", "#3d1a08"],
        borderWidth: 0.2,
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>ULBs declared ODF</div>
            <div className={styles.cardBody}>
              <DoughnutHalfChart data={dataODF} />
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>ULBs declared GFC</div>
            <div className={styles.cardBody}>
              <DoughnutHalfChart data={dataGFC} />
            </div>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>Total Data</div>
          <div className={styles.cardBody}>
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
    </DashboardLayout>
  );
}

export default ODFGFCStatus;
