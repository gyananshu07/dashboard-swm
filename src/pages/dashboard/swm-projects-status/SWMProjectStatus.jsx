import React, { useRef, useState } from "react";

import styles from "./styles.module.css";

import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import BarChart from "components/dashboard/charts/project-status/BarChart";

import SelectOptions from "utils/SelectOptions";
import { useReactToPrint } from "react-to-print";

function SWMProjectStatus() {
  const [statusByUnderConstruction, setStatusByUnderConstruction] =
    useState("no-of-projects");
  const [statusByConstructed, setStatusByConstructed] =
    useState("designed-capacity");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `@media print {
      @page {
        size: portrait;
        margin: 0 !important;
        padding:0 !important;
        flex: 1 !important;
        width: 100% !important;
        height: 100vh !important;
      }
      body {
        display: flex;
        flex: 1 !important;
        justify-content: center;
        align-items: center;
        width: 100% !important;
        height: 100vh !important;
        margin: 0 !important;
        padding:0 !important;
      }
    }`,
  });

  // Under Construction
  const noOfProjectsDataUC = {
    labels: [
      "Waste to Compost",
      "Waste to Electricity",
      "Bio-Meth.",
      "MRF",
      "C&D",
      "RDF",
      "Total",
    ],
    datasets: [
      {
        label: "No. of Projects",
        data: [39, 11, 7, 49, 19, 3, 106],
        backgroundColor: [
          "#69D9FB",
          "#A3E8FC",
          "#4BB5D5",
          "#42A0BC",
          "#398AA3",
          "#30758A",
          "#286070",
        ],
      },
    ],
  };

  const designedCapacityDataUC = {
    labels: [
      "Waste to Compost",
      "Waste to Electricity",
      "Bio-Meth.",
      "MRF",
      "C&D",
      "RDF",
      "Total",
    ],
    datasets: [
      {
        label: "Designed Capacity (in TPD)",
        data: [4511, 10250, 375, 11030, 5555, 40, 26166],
        backgroundColor: [
          "#69D9FB",
          "#A3E8FC",
          "#4BB5D5",
          "#42A0BC",
          "#398AA3",
          "#30758A",
          "#286070",
        ],
      },
    ],
  };

  // Completed Projects Bar Data
  const noOfProjectsDataC = {
    labels: [
      "Waste to Compost",
      "Waste to Electricity",
      "Bio-Meth.",
      "MRF",
      "SRLM",
      "C&D",
      "RDF",
      "Total",
    ],
    datasets: [
      {
        label: "No. of Projects",
        data: [2173, 9, 102, 2050, 331, 868, 40, 4334],
        backgroundColor: [
          "#69D9FB",
          "#79DDFB",
          "#A3E8FC",
          "#4BB5D5",
          "#42A0BC",
          "#398AA3",
          "#30758A",
          "#286070",
        ],
      },
    ],
  };

  const designedCapacityDataC = {
    labels: [
      "Waste to Compost",
      "Waste to Electricity",
      "Bio-Meth.",
      "MRF",
      "SRLM",
      "C&D",
      "RDF",
      "Total",
    ],
    datasets: [
      {
        label: "Designed Capacity (in TPD)",
        data: [98544, 13400, 3135, 74830, 13335, 35626, 6221, 189909],
        backgroundColor: [
          "#69D9FB",
          "#79DDFB",
          "#A3E8FC",
          "#4BB5D5",
          "#42A0BC",
          "#398AA3",
          "#30758A",
          "#286070",
        ],
      },
    ],
  };

  const handleChangeUnderConstruction = (e) => {
    setStatusByUnderConstruction(e.target.value);
  };

  const handleChangeConstructed = (e) => {
    setStatusByConstructed(e.target.value);
  };

  const options = [
    {
      value: "no-of-projects",
      label: "No. of Projects",
    },
    {
      value: "designed-capacity",
      label: "Designed Capacity",
    },
  ];

  return (
    <DashboardLayout onPrint={handlePrint}>
      <div className={styles.container} ref={componentRef}>
        <style type="text/css" media="print">
          {`
          @page {
            size: portrait;
            margin: 0;
            flex: 1 !important;
            padding:0 !important;
            width: 100% !important;
            height: 100vh !important;
          }
          body {
            display: flex;
            flex: 1 !important;
            justify-content: center;
            align-items: center;
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          `}
        </style>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              Under Construction SWM Projects
            </div>

            <SelectOptions
              options={options}
              onValueChange={handleChangeUnderConstruction}
              value={statusByUnderConstruction}
            />

            {statusByUnderConstruction === "no-of-projects" ? (
              <div className={styles.cardBody}>
                <BarChart
                  data={noOfProjectsDataUC}
                  titleText="No. of Projects Under Construction"
                />
              </div>
            ) : (
              <div className={styles.cardBody}>
                <BarChart
                  data={designedCapacityDataUC}
                  titleText="Designed Capacity (in TPD)"
                />
              </div>
            )}
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>Completed SWM Projects</div>

            <SelectOptions
              options={options}
              onValueChange={handleChangeConstructed}
              value={statusByConstructed}
            />

            {statusByConstructed === "no-of-projects" ? (
              <div className={styles.cardBody}>
                <BarChart
                  data={noOfProjectsDataC}
                  titleText="No. of Projects Constructed"
                />
              </div>
            ) : (
              <div className={styles.cardBody}>
                <BarChart
                  data={designedCapacityDataC}
                  titleText="Designed Capacity (in TPD)"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SWMProjectStatus;
