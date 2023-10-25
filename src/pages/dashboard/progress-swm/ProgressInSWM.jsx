import React, { useState } from "react";

import styles from "./styles.module.css";

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
  );
}

export default ProgressInSWM;
