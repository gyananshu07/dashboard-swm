import React from "react";
import styles from "./LegendStatusGFC.module.css";

function LegendGFCStatus() {
  const legendItems = [
    { color: "#89A8B0", label: "0" },
    { color: "#336877", label: "1-4" },
    { color: "#22525F", label: "5-9" },
    { color: "#1C434E", label: "10-14" },
    { color: "#16353E", label: "15-19" },
    { color: "#10262D", label: "20-29" },
    { color: "#0E2227", label: "30+" },
  ];
  return (
    <>
      <div className={styles.heading}>Count of Awarded GFC Status</div>
      <div className={styles.legend}>
        {legendItems.map((item, index) => (
          <div key={index} className={styles.legendItem}>
            <span
              className={styles.legendColor}
              style={{ backgroundColor: item.color }}
            ></span>
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
}

export default LegendGFCStatus;
