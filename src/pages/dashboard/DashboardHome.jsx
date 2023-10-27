import React from "react";
import ODFGFCStatus from "./odf-gfc-status/ODF_GFC_Status";
import "leaflet/dist/leaflet.css";

function DashboardHome() {
  return (
    <div style={{ width: 500, height: 600 }}>
      <ODFGFCStatus />
    </div>
  );
}

export default DashboardHome;
