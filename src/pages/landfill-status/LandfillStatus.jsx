import LandfillMap from "components/dashboard/maps/LandfillMap";
import React from "react";

function LandfillStatus() {
  return (
    <>
      <style type="text/css" media="print">
        {`
          @page {
            size: landscape;
            margin: 0;
            flex: 1 !important;
            padding:0 !important;
            width: 100% !important;
            height: 100vh !important;
          }
         
          `}
      </style>
      <LandfillMap />
    </>
  );
}

export default LandfillStatus;
