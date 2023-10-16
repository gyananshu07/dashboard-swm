import React, { useState } from "react";
import styles from "pages/dashboard/states-progress/styles.module.css";
import MapControls from "./MapControls";
import MapChart from "../maps/MapChart";

function TopStates({ statusByStates }) {
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
    "Andaman & Nicobar Islands",
    "Chandigarh",
    "Dadra & Nagar Haveli and Daman & Diu",
  ];

  const HighlightedTopODFPlusPlus = [
    "Chhattisgarh",
    "Madhya Pradesh",
    "Gujarat",
    "Maharashtra",
    "Punjab",
    "Gujarat",
    "Andaman & Nicobar Islands",
    "Chandigarh",
    "Delhi",
  ];

  const HighlightedTopInSWM = [
    "Chhattisgarh",
    "Tripura",
    "Madhya Pradesh",
    "GOa",
    "Telangana",
    "Chandigarh",
    "Dadra & Nagar Haveli and Daman & Diu",
    "Andaman & Nicobar Islands",
  ];

  return (
    <div className={styles.mapSuperContainer}>
      <div className={styles.mapContainer}>
        {statusByStates === "odf-plus" ? (
          <div className={styles.mapControls}>
            <MapControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />

            <MapChart
              highlighted={HighlightedTopODFPlus}
              handleZoomIn={handleZoomIn}
              handleZoomOut={handleZoomOut}
              setPosition={setPosition}
              position={position}
            />
          </div>
        ) : statusByStates === "odf-plus-plus" ? (
          <div className={styles.mapControls}>
            <MapControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />

            <MapChart
              highlighted={HighlightedTopODFPlusPlus}
              handleZoomIn={handleZoomIn}
              handleZoomOut={handleZoomOut}
              setPosition={setPosition}
              position={position}
            />
          </div>
        ) : (
          <div className={styles.mapControls}>
            <MapControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />

            <MapChart
              highlighted={HighlightedTopInSWM}
              handleZoomIn={handleZoomIn}
              handleZoomOut={handleZoomOut}
              setPosition={setPosition}
              position={position}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TopStates;
