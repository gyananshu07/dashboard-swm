import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJS = CanvasJSReact.CanvasJS;
CanvasJS.addColorSet("blueShades", [
  "#4BB5D5",
  "#42A0BC",
  "#398AA3",
  "#30758A",
  "#286070",
]);
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function GroupedBarChart({ data }) {
  return <CanvasJSChart options={data} />;
}
