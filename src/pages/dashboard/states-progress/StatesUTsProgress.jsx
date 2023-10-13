import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import MapChart from "components/dashboard/maps/MapChart";
import React, { useState } from "react";

import styles from "./styles.module.css";
import MapControls from "components/dashboard/others/MapControls";

function StatesUTsProgress() {
  const [position, setPosition] = useState({
    coordinates: [80, 22],
    zoom: 1,
  });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  const HighlightedTopODFPlus = [
    "Goa",
    "Chhattisgarh",
    "Maharashtra",
    "Punjab",
    "Gujarat",
  ];

  const HighlightedTopODFPlusPlus = [
    "Goa",
    "Chhattisgarh",
    "Maharashtra",
    "Punjab",
    "Gujarat",
  ];

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>Top States/UTs in ODF+</div>
              <div className={styles.mapSuperContainer}>
                <div className={styles.mapContainer}>
                  <div className={styles.mapControls}>
                    <MapControls />

                    <MapChart
                      highlighted={HighlightedTopODFPlus}
                      handleZoomIn={handleZoomIn}
                      handleZoomOut={handleZoomOut}
                      setPosition={setPosition}
                      position={position}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>Top States/UTs in ODF++</div>
              <div className={styles.mapSuperContainer}>
                <div className={styles.mapContainer}>
                  <div className={styles.mapControls}>
                    <MapControls />
                    <MapChart
                      highlighted={HighlightedTopODFPlus}
                      handleZoomIn={handleZoomIn}
                      handleZoomOut={handleZoomOut}
                      setPosition={setPosition}
                      position={position}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StatesUTsProgress;
