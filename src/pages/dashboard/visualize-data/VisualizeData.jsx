import React, { useState } from "react";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import TableRenderers from "react-pivottable/TableRenderers";
import Plot from "react-plotly.js";
import createPlotlyRenderers from "react-pivottable/PlotlyRenderers";
import { Button } from "@mui/material";

import Papa from "papaparse";

import styles from "./styles.module.css";

const PlotlyRenderers = createPlotlyRenderers(Plot);

function VisualizeData() {
  const [state, setState] = useState({});
  const [CSVData, setCSVData] = useState();

  var commonConfig = { delimiter: "," };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      Papa.parse(data, {
        ...commonConfig,
        header: true,
        complete: (result) => {
          setCSVData(result.data);
        },
      });
    };
    reader.readAsText(file);
  };

  return (
    <div className={styles.container}>
      <Button variant="outlined">
        <input type="file" name="file" id="file" onChange={handleUpload} />
        Upload CSV File
      </Button>
      <PivotTableUI
        data={CSVData}
        onChange={(s) => setState(s)}
        renderers={{ ...TableRenderers, ...PlotlyRenderers }}
        {...state}
      />
    </div>
  );
}

export default VisualizeData;
