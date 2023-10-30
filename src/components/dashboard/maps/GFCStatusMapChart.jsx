import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";

import indiaStatesGeoJSON from "components/dashboard/maps/geojson/India.json";

const GFCStatusMapChart = ({ status }) => {
  const mapCenter = [22.5937, 82];

  const onEachFeature = (feature, layer) => {
    const { ST_NM } = feature.properties;

    const filteredStatus = status.filter((item) => item.State === ST_NM);

    if (filteredStatus.length > 0) {
      const popupContent = `<b>${ST_NM}</b> <br/> <b>No. of ULBs with GFC Status:</b> ${filteredStatus[0].Awarded}
      `;
      layer.bindPopup(popupContent);
    }
  };

  const mapPolygonColorToAwardedCount = (awardedCount) => {
    return awardedCount === 0
      ? "#89A8B0"
      : awardedCount >= 1 && awardedCount < 5
      ? "#336877"
      : awardedCount < 10
      ? "#22525F"
      : awardedCount < 15
      ? "#1C434E"
      : awardedCount < 20
      ? "#16353E"
      : awardedCount < 30
      ? "#10262D"
      : "#0E2227";
  };

  const style = (feature) => {
    const { ST_NM } = feature.properties;
    return {
      fillColor: mapPolygonColorToAwardedCount(
        status
          .filter((item) => item.State === ST_NM)
          .map((item) => item.Awarded)[0]
      ),
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "2",
      fillOpacity: 0.9,
    };
  };

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
        borderRadius: 5,
        boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
      }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />

      <GeoJSON
        data={indiaStatesGeoJSON}
        style={style}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};

export default GFCStatusMapChart;
