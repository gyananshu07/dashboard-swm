import React from "react";

import styles from "./styles.module.css";

import AppScreenshot from "assets/SwachttaApp.jpg";
import AppScreenshot2 from "assets/SwachttaApp_2.jpg";

import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import DoughnutHalfChart from "components/dashboard/charts/app-update/DoughnutHalfChart";

function AppStatus() {
  const AppComplaintData = {
    labels: ["Total Complaints Posted", "Total Complaints Resolved"],
    datasets: [
      {
        label: "in Crores",
        data: [2.55, 2.39],
        backgroundColor: ["#f5854d", "#f26721"],
        borderColor: ["#f79c6f", "#3d1a08"],
        borderWidth: 0.2,
      },
    ],
  };
  return (
    <>
      <DashboardLayout>
        <div className={styles.container}>
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
      </DashboardLayout>
    </>
  );
}

export default AppStatus;
