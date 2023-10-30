import React, { useEffect, useState } from "react";
import styles from "pages/dashboard/states-progress/styles.module.css";
import MapChart from "../maps/MapChart";

function TopStates({ statusByStates }) {
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

export default TopStates;
