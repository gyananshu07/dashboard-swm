import React from "react";

import GFCStatusMapChart from "components/dashboard/maps/GFCStatusMapChart";

import { GFCStatus } from "constants/GFC_States";
import { ODFStatus } from "constants/ODFStatus";

import ODFStatusMapChart from "components/dashboard/maps/ODFStatusMapChart";
import LegendStatus from "components/dashboard/maps/LegendStatus";

import styles from "./styleSheet.module.css";

const ODFGFCStatus = () => {
  const legendItemsGFC = [
    { color: "#89A8B0", label: "0" },
    { color: "#336877", label: "1-4" },
    { color: "#22525F", label: "5-9" },
    { color: "#1C434E", label: "10-14" },
    { color: "#16353E", label: "15-19" },
    { color: "#10262D", label: "20-29" },
    { color: "#0E2227", label: "30+" },
  ];

  const legendItemsODF = [
    { color: "#89A8B0", label: "0/NA" },
    { color: "#336877", label: "1-50" },
    { color: "#1C434E", label: "51-100" },
    { color: "#16353E", label: "101-150" },
    { color: "#10262D", label: "151-200" },
    { color: "#0E2227", label: "201-300" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <GFCStatusMapChart status={GFCStatus} />
        <LegendStatus statusName="GFC" legendItems={legendItemsGFC} />
      </div>

      <div className={styles.mapContainer}>
        <ODFStatusMapChart status={ODFStatus} />
        <LegendStatus statusName="ODF" legendItems={legendItemsODF} />
      </div>
    </div>
  );
};

export default ODFGFCStatus;
