import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import React from "react";

import styles from "./styles.module.css";
import GroupedBarChart from "components/dashboard/charts/progress-swm/GroupedBarChart";

function ProgressInSWM() {
  const CollectionAndSegregationData = {
    labels: ["Door to Door Collection", "Source Segregation"],
    datasets: [
      {
        label: "Total Wards",
        data: [94854, 94854],
        backgroundColor: "#f9b390",
        stack: "Stack 0",
      },
      {
        label: "Wards with 100% Collection",
        data: [90819, 84166],
        backgroundColor: "#f58d59",
        stack: "Stack 1",
      },
      {
        label: "Remaining Wards",
        data: [4015, 10688],
        backgroundColor: "#f26721",
        stack: "Stack 2",
      },
    ],
  };

  const WasteProcessingData = {
    labels: ["Waste Processing Status"],
    datasets: [
      {
        label: "Total Waste Generated (in TPD)",
        data: [155928],
        backgroundColor: "#f9b390",
        stack: "Stack 0",
      },
      {
        label: "Waste Being Processed (in TPD)",
        data: [119094],
        backgroundColor: "#f58d59",
        stack: "Stack 1",
      },
      {
        label: "Remaining Waste to be Processed (in TPD)",
        data: [4015, 10688],
        backgroundColor: "#f26721",
        stack: "Stack 2",
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              Progress Status in Collection, Segregation
            </div>
            <div className={styles.cardBody}>
              <GroupedBarChart
                data={CollectionAndSegregationData}
                titleText="Wards"
              />
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              Progress Status in Processing
            </div>
            <div className={styles.cardBody}>
              <GroupedBarChart
                data={WasteProcessingData}
                titleText="Waste Generation (Tonnes/day)"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ProgressInSWM;
