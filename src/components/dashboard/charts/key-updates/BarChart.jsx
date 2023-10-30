import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJS = CanvasJSReact.CanvasJS;
CanvasJS.addColorSet("blueShades", [
  "#4BB5D5",
  "#42A0BC",
  "#398AA3",
  "#30758A",
  "#286070",
  "#336877",
  "#204D5A",
  "#16353E",
]);
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function BarChart({ data }) {
  return <CanvasJSChart options={data} />;
}

export default BarChart;
