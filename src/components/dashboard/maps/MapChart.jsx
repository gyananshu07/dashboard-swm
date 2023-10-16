import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { AllStates } from "constants/AllStates";

const INDIA_TOPO_JSON = require("./topojsons/india.json");

const PROJECTION_CONFIG = {
  scale: 235,
  center: [82, 22.5937],
};

const geographyStyle = {
  default: {
    outline: "none",
    stroke: "darkgray",
    strokeWidth: "0.2px",
    strokeOpacity: "50%",
  },
  hover: {
    fill: "#0D2026",
    stroke: "white",
    strokeWidth: "0.3px",
    strokeOpacity: "50%",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

function MapChart({ setPosition, position, highlighted }) {
  function handleMoveEnd(position) {
    setPosition(position);
  }

  return (
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
                  highlighted.indexOf(geo.properties.Name) !== -1;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted ? "#1A404B" : "#eee"}
                    style={geographyStyle}
                  />
                );
              })}
            </>
          )}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}

export default MapChart;
