import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";

import landfillGeoJSON from "components/dashboard/maps/geojson/LandfillStatus.json";
import IndiaGeoJSON from "components/dashboard/maps/geojson/Country_Boundary.json";

import MarkerClusterLandfill from "./MarkerClusterLandfill.jsx";

const LandfillMap = () => {
  const mapCenter = [22.5937, 82];

  let markers;

  const addMarkers = () => {
    markers = [];

    landfillGeoJSON?.features?.map((feature) =>
      markers.push({
        position: {
          latitude: feature.geometry.coordinates[1],
          longitude: feature.geometry.coordinates[0],
        },
        properties: feature.properties,
      })
    );
  };

  addMarkers();

  return (
    <MapContainer
      center={mapCenter}
      zoom={4.25}
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
        height: "80vh",
        borderRadius: 5,
        boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
      }}
    >
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
      <MarkerClusterLandfill markers={markers} addMarkers={addMarkers} />
      <GeoJSON
        data={IndiaGeoJSON}
        style={{
          fill: "transparent",
          weight: 0.3,
          fillOpacity: 0,
          opacity: 1,
          color: "black",
          dashArray: "2",
        }}
      />
    </MapContainer>
  );
};

export default LandfillMap;
