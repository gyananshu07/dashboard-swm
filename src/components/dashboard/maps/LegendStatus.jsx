import React from "react";
import styles from "./LegendStatus.module.css";

function LegendStatus({ statusName, legendItems }) {
  return (
    <>
      <div className={styles.heading}>Count of Awarded {statusName} Status</div>
      <div className={styles.legend}>
        {legendItems.map((item, index) => (
          <div key={index} className={styles.legendItem}>
            <span
              className={styles.legendColor}
              style={{ backgroundColor: item.color }}
            ></span>
            <span className={styles.legendText}>{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default LegendStatus;
