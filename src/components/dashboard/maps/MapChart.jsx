import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import indiaStatesGeoJSON from "components/dashboard/maps/geojson/India.json";

const MapChart = ({ highlighted, component }) => {
  const mapCenter = [22.5937, 82]; // Set the initial map center
  const mapRef = useRef(null);

  const highlightStyle = {
    fillColor: component === "bottom" ? "#FF0D0D" : "#0D860D", // Fill color for highlighted states
    color: "black", // Border color
    weight: 1, // Border width
    fillOpacity: 0.8, // Fill opacity
    dashArray: "2",
  };

  const notHighlightedStyle = {
    fillColor: "lightgray", // Fill color for not-highlighted states
    color: "black", // Border color
    weight: 1, // Border width
    fillOpacity: 0.2, // Fill opacity
  };

  const onEachFeature = (feature, layer) => {
    if (highlighted?.includes(feature.properties.ST_NM)) {
      layer.setStyle(highlightStyle);
      layer.bindPopup(feature.properties.ST_NM);
    } else {
      layer.setStyle(notHighlightedStyle);
    }
  };

  // Use useEffect to update GeoJSON layer when 'highlighted' prop changes
  useEffect(() => {
    if (mapRef.current) {
      const geoJSONLayer = mapRef.current
        .getLayers()
        .find((layer) => layer instanceof GeoJSON);
      if (geoJSONLayer) {
        geoJSONLayer.clearLayers(); // Clear existing GeoJSON layer
        geoJSONLayer.addData(indiaStatesGeoJSON); // Add GeoJSON data with updated styles
      }
    }
  }, [highlighted]);

  return (
    <MapContainer
      center={mapCenter}
      zoom={4}
      maxZoom={10}
      attributionControl={false}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
      style={{
        width: "100%",
        height: "55vh",
      }}
      whenCreated={(map) => (mapRef.current = map)} // Store a reference to the map
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
      <GeoJSON
        key={highlighted ? highlighted.join(",") : "default"}
        data={indiaStatesGeoJSON}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};

export default MapChart;
