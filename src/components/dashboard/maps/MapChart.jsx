import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import indiaStatesGeoJSON from "components/dashboard/maps/geojson/India.json";

const MapChart = ({ highlighted }) => {
  const mapCenter = [22.5937, 82]; // Set the initial map center

  const highlightStyle = {
    fillColor: "green", // Fill color for highlighted states
    color: "black", // Border color
    weight: 1, // Border width
    fillOpacity: 0.5, // Fill opacity
  };

  const notHighlightedStyle = {
    fillColor: "gray", // Fill color for not-highlighted states
    color: "black", // Border color
    weight: 1, // Border width
    fillOpacity: 0.5, // Fill opacity
  };

  const onEachFeature = (feature, layer) => {
    if (highlighted?.includes(feature.properties.ST_NM)) {
      layer.setStyle(highlightStyle);
      layer.bindPopup(feature.properties.ST_NM);
    } else {
      layer.setStyle(notHighlightedStyle);
    }
  };

  return (
    <MapContainer
      center={mapCenter}
      zoom={4}
      maxZoom={10}
      attributionControl={true}
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
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={indiaStatesGeoJSON} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default MapChart;
