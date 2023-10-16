import React, { useState } from "react";

import styles from "./styles.module.css";

import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import GroupedBarChart from "components/dashboard/charts/progress-swm/GroupedBarChart";

import SelectOptions from "utils/SelectOptions";

function ProgressInSWM() {
  const [statusBy, setStatusBy] = useState("collection");

  const CollectionData = {
    labels: ["Door to Door Collection"],
    datasets: [
      {
        label: "Total Wards",
        data: [94854],
        backgroundColor: "#54CAEE",
        stack: "Stack 0",
      },
      {
        label: "Wards with 100% Collection",
        data: [90819],
        backgroundColor: "#42A0BC",
        stack: "Stack 1",
      },
      {
        label: "Remaining Wards",
        data: [4015],
        backgroundColor: "#286070",
        stack: "Stack 2",
      },
    ],
  };

  const SegregationData = {
    labels: ["Source Segregation"],
    datasets: [
      {
        label: "Total Wards",
        data: [94854],
        backgroundColor: "#54CAEE",
        stack: "Stack 0",
      },
      {
        label: "Wards with 100% Segregation",
        data: [84166],
        backgroundColor: "#42A0BC",
        stack: "Stack 1",
      },
      {
        label: "Remaining Wards",
        data: [10688],
        backgroundColor: "#286070",
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
        backgroundColor: "#54CAEE",
        stack: "Stack 0",
      },
      {
        label: "Waste Being Processed (in TPD)",
        data: [119094],
        backgroundColor: "#42A0BC",
        stack: "Stack 1",
      },
      {
        label: "Remaining Waste to be Processed (in TPD)",
        data: [4015, 10688],
        backgroundColor: "#286070",
        stack: "Stack 2",
      },
    ],
  };

  const handleChange = (e) => {
    setStatusBy(e.target.value);
  };

  const options = [
    {
      value: "collection",
      label: "By Collection",
    },
    {
      value: "segregation",
      label: "By Segregation",
    },
    {
      value: "processing",
      label: "By Processing",
    },
  ];

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>Progress Status</div>

            <SelectOptions
              options={options}
              onValueChange={handleChange}
              value={statusBy}
            />

            {statusBy === "collection" ? (
              <div className={styles.cardBody}>
                <GroupedBarChart data={CollectionData} titleText="Wards" />
              </div>
            ) : statusBy === "segregation" ? (
              <div className={styles.cardBody}>
                <GroupedBarChart data={SegregationData} titleText="Wards" />
              </div>
            ) : (
              <div className={styles.cardBody}>
                <GroupedBarChart data={WasteProcessingData} titleText="Wards" />
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ProgressInSWM;
