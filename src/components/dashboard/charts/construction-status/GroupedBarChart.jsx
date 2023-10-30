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

function GroupedBarChart() {
  const options = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    legend: {
      fontFamily: "Poppins",
    },
    axisY: {
      title: "in Lacs",
      titleFontFamily: "Poppins",
      labelFontFamily: "Poppins",
    },
    axisX: {
      labelFontFamily: "Poppins",
      indexLabelFontFamily: "Poppins",
    },

    data: [
      {
        type: "column",
        name: "Targeted Construction (in Lacs)",
        showInLegend: true,
        dataPoints: [
          { label: "IHHL", y: 58.99 },
          { label: "CT/PT", y: 5.07 },
        ],
        toolTipContent: "<b>{name}:</b> {y} (in Lacs)",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
      {
        type: "column",
        name: "Total Construction (Under Construction + Completed) (in Lacs)",
        showInLegend: true,
        dataPoints: [
          { label: "IHHL", y: 67.31 },
          { label: "CT/PT", y: 6.52 },
        ],
        toolTipContent: "<b>{name}:</b> {y} (in Lacs)",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
      {
        type: "column",
        name: "Total Constructed (in Lacs)",
        showInLegend: true,
        dataPoints: [
          { label: "IHHL", y: 63.03 },
          { label: "CT/PT", y: 6.36 },
        ],
        toolTipContent: "<b>{name}:</b> {y} (in Lacs)",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
      {
        type: "column",
        name: "Under Construction (in Lacs)",
        showInLegend: true,
        dataPoints: [
          { label: "IHHL", y: 4.09 },
          { label: "CT/PT", y: 0.15 },
        ],
        toolTipContent: "<b>{name}:</b> {y} (in Lacs)",
        indexLabel: "{y}",
        indexLabelFontFamily: "Poppins",
      },
    ],
  };

  return <CanvasJSChart options={options} style={{ width: "100%" }} />;
}

export default GroupedBarChart;
