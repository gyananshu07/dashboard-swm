import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import React from "react";

import styles from "./styles.module.css";
import GroupedBarChart from "components/dashboard/charts/fund-status/GroupedBarChart";

function FundStatus() {
  const FundReleaseDataSBM1 = {
    labels: ["Allocated", "Released"],
    datasets: [
      {
        label: "MoHUA",
        data: [609.27, 565.07],
        backgroundColor: "#f5854d",
        stack: "Stack 1",
      },
      {
        label: "States/UTs",
        data: [14013.46, 11905.57],
        backgroundColor: "#f26721",
        stack: "Stack 0",
      },

      {
        label: "Total",
        data: [14622.73, 12470.64],
        backgroundColor: "#a94817",
        stack: "Stack 2",
      },
    ],
  };

  const FundReleaseDataSBMU2 = {
    labels: ["Allocated", "Released"],
    datasets: [
      {
        label: "MoHUA",
        data: [1172.6, 62.36],
        backgroundColor: "#f5854d",
        stack: "Stack 1",
      },
      {
        label: "States/UTs",
        data: [32821.0, 3456.78],
        backgroundColor: "#f26721",
        stack: "Stack 0",
      },

      {
        label: "Total",
        data: [33993.6, 3519.15],
        backgroundColor: "#a94817",
        stack: "Stack 2",
      },
    ],
  };

  const FundUtilizationData = {
    labels: [
      "2014-2015",
      "2015-2016",
      "2016-2017",
      "2017-2018",
      "2019-2020",
      "2020-2021",
      "2021-2022",
      "2022-2023",
      "Total",
    ],
    datasets: [
      {
        label: "UC Pending",
        data: [0.94, 11.81, 2, 26.23, 194, 420, 574.65, 716.5, 1946.84],
        backgroundColor: [
          "#fac2a6",
          "#f7a47a",
          "#f5854d",
          "#f26721",
          "#c2521a",
          "#913e14",
          "#61290d",
          "#491f0a",
          "#301507",
        ],
        stack: "Stack 1",
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>Fund Release (in Crores)</div>
            <div className={styles.cardBody}>
              <GroupedBarChart data={FundReleaseDataSBM1} titleText="SBM 1.0" />
            </div>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>Fund Release (in Crores)</div>
            <div className={styles.cardBody}>
              <GroupedBarChart
                data={FundReleaseDataSBMU2}
                titleText="SBM-U 2.0"
              />
            </div>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              Fund Utilization (in Crores)
            </div>
            <div className={styles.cardBody}>
              <GroupedBarChart data={FundUtilizationData} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default FundStatus;
