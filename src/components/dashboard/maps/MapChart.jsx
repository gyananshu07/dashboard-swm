import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import styles from "./Map.css";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const INDIA_TOPO_JSON = require("./topojsons/india.json");

const PROJECTION_CONFIG = {
  scale: 235,
  center: [82, 22.5937],
};

const geographyStyle = {
  default: {
    outline: "none",
    stroke: "darkgray",
    strokeWidth: "0.5px",
    strokeOpacity: "50%",
  },
  hover: {
    fill: "#0D2026",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

function MapChart({ setPosition, position, highlighted }) {
  const [tooltipContent, setTooltipContent] = useState("");

  function handleMoveEnd(position) {
    setPosition(position);
    console.log(position);
  }

  const handleMouseEnter = (geo, isHighlighted) => {
    const { ST_NM } = geo.properties;

    isHighlighted && setTooltipContent(`${ST_NM}`);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={150}
        height={150}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => {
                  const isHighlighted =
                    highlighted.indexOf(geo.properties.ST_NM) !== -1;
                  return (
                    <Geography
                      data-tooltip-id="data-tooltip"
                      data-tooltip-content={tooltipContent}
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? "#1A404B" : "#eee"}
                      style={geographyStyle}
                      onMouseEnter={() => handleMouseEnter(geo, isHighlighted)}
                      onMouseLeave={handleMouseLeave}
                    />
                  );
                })}
              </>
            )}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      <Tooltip id="data-tooltip" />
    </>
  );
}

export default MapChart;
