import React, { useState } from "react";

import styles from "./styles.module.css";
import BarChart from "components/dashboard/charts/project-status-decentralized/BarChart";
import SelectOptions from "utils/SelectOptions";

function SWMProjectStatusDecentralized() {
  const [statusByConstruction, setStatusByConstruction] =
    useState("under-construction");

  const UnderConstructionData = {
    labels: ["No. of Projects", "Designed Capacity (in TPD)"],
    datasets: [
      {
        label: "Value",
        data: [123, 194],
        backgroundColor: ["#46AAC8", "#2C6B7D"],
        borderColor: ["#42A0BC", "#1A404B"],
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
        backgroundColor: ["#46AAC8", "#2C6B7D"],
        borderColor: ["#42A0BC", "#1A404B"],
        borderWidth: 0.2,
      },
    ],
  };

  const handleChange = (e) => {
    setStatusByConstruction(e.target.value);
  };

  const options = [
    {
      value: "under-construction",
      label: "Under Construction",
    },
    {
      value: "constructed",
      label: "Constructed",
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
          <div className={styles.cardHeader}>
            SWM Projects Construction Status
          </div>

          <SelectOptions
            options={options}
            onValueChange={handleChange}
            value={statusByConstruction}
          />

          {statusByConstruction === "under-construction" ? (
            <div className={styles.cardBody}>
              <BarChart
                data={UnderConstructionData}
                titleText="No. of Projects Under Construction"
              />
            </div>
          ) : (
            <div className={styles.cardBody}>
              <BarChart
                data={CompletedConstructionData}
                titleText="No. of Projects Constructed"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SWMProjectStatusDecentralized;
