import React from "react";

import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AppScreenshot from "assets/SwachttaApp.jpg";
import AppScreenshot2 from "assets/SwachttaApp_2.jpg";

import DashboardLayout from "components/dashboard/layout/DashboardLayout";
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
      </DashboardLayout>
    </>
  );
}

export default AppStatus;
