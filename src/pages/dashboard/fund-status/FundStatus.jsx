import React, { useState } from "react";

import styles from "./styles.module.css";
import GroupedBarChart from "components/dashboard/charts/fund-status/GroupedBarChart";
import SelectOptions from "utils/SelectOptions";

function FundStatus() {
  const [statusBy, setStatusBy] = useState("sbm-1");

  const FundReleaseDataSBM1 = {
    labels: ["Allocated", "Released"],
    datasets: [
      {
        label: "MoHUA",
        data: [609.27, 565.07],
        backgroundColor: "#54CAEE",
        stack: "Stack 1",
      },
      {
        label: "States/UTs",
        data: [14013.46, 11905.57],
        backgroundColor: "#42A0BC",
        stack: "Stack 0",
      },

      {
        label: "Total",
        data: [14622.73, 12470.64],
        backgroundColor: "#286070",
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
        backgroundColor: "#54CAEE",
        stack: "Stack 1",
      },
      {
        label: "States/UTs",
        data: [32821.0, 3456.78],
        backgroundColor: "#42A0BC",
        stack: "Stack 0",
      },

      {
        label: "Total",
        data: [33993.6, 3519.15],
        backgroundColor: "#286070",
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
          "#8AE2FC",
          "#69D9FB",
          "#79DDFB",
          "#A3E8FC",
          "#4BB5D5",
          "#42A0BC",
          "#398AA3",
          "#30758A",
          "#286070",
        ],
        stack: "Stack 1",
      },
    ],
  };

  const handleChange = (e) => {
    setStatusBy(e.target.value);
  };

  const options = [
    {
      value: "sbm-1",
      label: "SBM 1.0",
    },
    {
      value: "sbm-2",
      label: "SBM U-2.0",
    },
  ];

  return (
    <div className={styles.container}>
      <style type="text/css" media="print">
        {`
          @page {
            size: portrait;
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
          <div className={styles.cardHeader}>Fund Release (in Crores)</div>

          <SelectOptions
            options={options}
            onValueChange={handleChange}
            value={statusBy}
          />

          {statusBy === "sbm-1" ? (
            <div className={styles.cardBody}>
              <GroupedBarChart data={FundReleaseDataSBM1} titleText="SBM 1.0" />
            </div>
          ) : (
            <div className={styles.cardBody}>
              <GroupedBarChart
                data={FundReleaseDataSBMU2}
                titleText="SBM-U 2.0"
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>Fund Utilization (in Crores)</div>
          <div className={styles.cardBody}>
            <GroupedBarChart data={FundUtilizationData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundStatus;
