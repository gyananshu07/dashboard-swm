import React from "react";

import styles from "./styles.module.css";
import GroupedBarChart from "components/dashboard/charts/construction-status/GroupedBarChart";

function ConstructionStatus() {
  return (
    <div className={styles.container}>
      <style type="text/css" media="print">
        {`
          @page {
            size: portrait; 
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .canvasjs-chart-canvas {
            position: relative !important;
          }
          `}
      </style>
      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>
            Construction Status of IHHL & CT/PT
          </div>
          <div className={styles.cardBody}>
            <GroupedBarChart />
          </div>
          <div className={styles.helperText}>
            IHHL - Individual Household Latrines | CT/PT - Community/ Public
            Toilets
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConstructionStatus;
