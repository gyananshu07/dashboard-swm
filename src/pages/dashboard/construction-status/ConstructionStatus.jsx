import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import React from "react";

import styles from "./styles.module.css";
import GroupedBarChart from "components/dashboard/charts/construction-status/GroupedBarChart";

function ConstructionStatus() {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              Construction Status of IHHL & CT/PT
            </div>
            <div className={styles.cardBody}>
              <GroupedBarChart />
            </div>
            <div className={styles.helperText}>
              IHHL - Individual Household Latrines | CT/PT - Community/ Public
              Toilets
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ConstructionStatus;
