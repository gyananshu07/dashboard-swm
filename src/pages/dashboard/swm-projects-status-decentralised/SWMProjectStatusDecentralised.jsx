import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import React from "react";

import styles from "./styles.module.css";
import DoughnutHalfChart from "components/dashboard/charts/project-status-decentralized/DoughnutHalfChart";

function SWMProjectStatusDecentralized() {
  const UnderConstructionData = {
    labels: ["No. of Projects", "Designed Capacity (in TPD)"],
    datasets: [
      {
        label: "Value",
        data: [123, 194],
        backgroundColor: ["#f5854d", "#f26721"],
        borderColor: ["#f79c6f", "#3d1a08"],
        borderWidth: 0.2,
      },
    ],
  };

  const CompletedConstructionData = {
    labels: ["No. of Projects", "Designed Capacity (in TPD)"],
    datasets: [
      {
        label: "Value",
        data: [123, 194],
        backgroundColor: ["#f5854d", "#f26721"],
        borderColor: ["#f79c6f", "#3d1a08"],
        borderWidth: 0.2,
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              Under Construction SWM Projects
            </div>
            <div className={styles.cardBody}>
              <DoughnutHalfChart
                data={UnderConstructionData}
                titleText="No. of Projects Under Construction"
              />
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>Completed SWM Projects</div>
            <div className={styles.cardBody}>
              <DoughnutHalfChart
                data={CompletedConstructionData}
                titleText="No. of Projects Constructed"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SWMProjectStatusDecentralized;
