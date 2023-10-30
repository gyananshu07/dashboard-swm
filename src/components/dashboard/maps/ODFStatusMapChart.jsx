import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";

import indiaStatesGeoJSON from "components/dashboard/maps/geojson/India.json";

const ODFStatusMapChart = ({ status }) => {
  const mapCenter = [22.5937, 82];

  const onEachFeature = (feature, layer) => {
    const { ST_NM } = feature.properties;

    const filteredStatus = status.filter((item) => item.State === ST_NM);

    if (filteredStatus.length > 0) {
      const popupContent = `<b>${ST_NM}</b> 
      <br/>
      <b>No. of Total ULBs with ODF and above status:</b> ${filteredStatus[0].ODF}
      <br/>
      <b>No. of ULBs with ODF Status:</b> ${filteredStatus[0].ODF}
      <br/>
      <b>No. of ULBs with ODF+ Status:</b> ${filteredStatus[0].ODFPlus}
      <br/>
      <b>No. of ULBs with ODF++ Status:</b> ${filteredStatus[0].ODFPlusPlus}
      <br/>
      <b>No. of ULBs with Water+ Status:</b> ${filteredStatus[0].WaterPlus}
      `;
      layer.bindPopup(popupContent);
    }
  };

  const mapPolygonColorToAwardedCount = (awardedCount) => {
    return awardedCount >= 1 && awardedCount <= 50
      ? "#336877"
      : awardedCount > 50 && awardedCount <= 100
      ? "#1C434E"
      : awardedCount > 100 && awardedCount <= 150
      ? "#16353E"
      : awardedCount > 150 && awardedCount <= 200
      ? "#10262D"
      : awardedCount > 200 && awardedCount <= 300
      ? "#0E2227"
      : awardedCount >= 300
      ? "#0A181C"
      : "#89A8B0";
  };

  const style = (feature) => {
    const { ST_NM } = feature.properties;
    return {
      fillColor: mapPolygonColorToAwardedCount(
        status
          .filter((item) => item.State === ST_NM)
          .map((item) => item.Total)[0]
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

export default ODFStatusMapChart;
