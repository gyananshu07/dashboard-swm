import React, { useState } from "react";

import styles from "./styles.module.css";

import SelectOptions from "utils/SelectOptions";

import TopStates from "components/dashboard/others/TopStates";
import BottomStates from "components/dashboard/others/BottomStates";

function StatesUTsProgress() {
  const [statusByStates, setStatusByStates] = useState("odf-plus");

  const options = [
    {
      value: "odf-plus",
      label: "in ODF+",
    },
    {
      value: "odf-plus-plus",
      label: "in ODF++",
    },
    {
      value: "in-swm",
      label: "in SWM",
    },
  ];

  const handleChangeStatesStatus = (e) => {
    setStatusByStates(e.target.value);
  };

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
      <div className={`${styles.cardsContainer} page-print`}>
        <div className={styles.cardContainer}>
          <div className={styles.cardBody}>
            <div className={styles.cardHeader}>
              States/UTs Progress in Different Categories
            </div>

            <SelectOptions
              options={options}
              onValueChange={handleChangeStatesStatus}
              value={statusByStates}
            />
            <div className={styles.mapRow}>
              <div className={styles.mapEachContainer}>
                <div className={styles.mapHeader}>Top States/UTs</div>
                <TopStates statusByStates={statusByStates} />
              </div>

              <div className={styles.mapEachContainer}>
                <div className={styles.mapHeader}>Bottom States/UTs</div>
                <BottomStates statusByStates={statusByStates} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatesUTsProgress;
