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

const INDIA_TOPO_JSON = require("./topojsons/india.topo.json");

const PROJECTION_CONFIG = {
  scale: 235,
  center: [82, 22.5937],
};

const geographyStyle = {
  default: {
    outline: "none",
    stroke: "darkgray",
    strokeWidth: "0.1px",
    strokeOpacity: "50%",
  },
  hover: {
    fill: "#762e07",
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
      height={150}>
      <ZoomableGroup
        zoom={position.zoom}
        center={position.coordinates}
        onMoveEnd={handleMoveEnd}>
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
                    fill={isHighlighted ? "#f26721" : "#eee"}
                    style={geographyStyle}
                  />
                );
              })}

              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const cur = AllStates.find(
                  (s) => s.mapName === geo.properties.Name
                );
                const isHighlighted =
                  highlighted.indexOf(geo.properties.Name) !== -1;

                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur && isHighlighted && (
                      <Marker coordinates={centroid}>
                        <text
                          fontSize={2}
                          fontWeight="500"
                          fill="#ffffff"
                          textAnchor="middle">
                          {cur.mapName}
                        </text>
                      </Marker>
                    )}
                  </g>
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
