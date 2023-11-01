import DumpsiteMap from "components/dashboard/maps/DumpsiteMap";
import React from "react";

function DumpsiteStatus() {
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
      <DumpsiteMap />
    </>
  );
}

export default DumpsiteStatus;
