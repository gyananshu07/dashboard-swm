import DashboardLayout from "components/dashboard/layout/DashboardLayout";
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
    <DashboardLayout>
      <div className={styles.container}>
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
    </DashboardLayout>
  );
}

export default SWMProjectStatusDecentralized;
