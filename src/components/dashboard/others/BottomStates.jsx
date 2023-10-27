import React from "react";
import styles from "pages/dashboard/states-progress/styles.module.css";
import MapChart from "../maps/MapChart";

function BottomStates({ statusByStates }) {
  const HighlightedTopODFPlus = [
    "Arunanchal Pradesh",
    "Nagaland",
    "West Bengal",
    "Meghalaya",
    "Mizoram",
    "Ladakh",
    "Jammu & Kashmir",
    "Puducherry",
  ];

  const HighlightedTopODFPlusPlus = [
    "Arunanchal Pradesh",
    "Assam",
    "Goa",
    "Manipur",
    "Meghalaya",
    "Dadra & Nagar Haveli and Daman & Diu",
    "Jammu & Kashmir",
    "Ladakh",
  ];

  const HighlightedTopInSWM = [
    "Meghalaya",
    "West Bengal",
    "Bihar",
    "Rajasthan",
    "Sikkim",
    "Puducherry",
    "Jammu & Kashmir",
    "Delhi",
  ];

  return (
    <div className={styles.mapSuperContainer}>
      <div className={styles.mapContainer}>
        {statusByStates === "odf-plus" ? (
          <MapChart highlighted={HighlightedTopODFPlus} />
        ) : statusByStates === "odf-plus-plus" ? (
          <MapChart highlighted={HighlightedTopODFPlusPlus} />
        ) : (
          <MapChart highlighted={HighlightedTopInSWM} />
        )}
      </div>
    </div>
  );
}

export default BottomStates;
