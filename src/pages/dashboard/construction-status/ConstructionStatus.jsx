import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import React, { useRef } from "react";

import styles from "./styles.module.css";
import GroupedBarChart from "components/dashboard/charts/construction-status/GroupedBarChart";
import { useReactToPrint } from "react-to-print";

function ConstructionStatus() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `@media print {
      @page {
        size: landscape;
        margin: 0 !important;
        padding:0 !important;
        flex: 1 !important;
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
        padding:0 !important;
      }
    }`,
  });
  return (
    <DashboardLayout onPrint={handlePrint}>
      <div className={styles.container} ref={componentRef}>
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
    </DashboardLayout>
  );
}

export default ConstructionStatus;
