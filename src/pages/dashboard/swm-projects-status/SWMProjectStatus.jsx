import React, { useState } from "react";

import styles from "./styles.module.css";

import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import BarChart from "components/dashboard/charts/project-status/BarChart";

import SelectOptions from "utils/SelectOptions";

function SWMProjectStatus() {
  const [statusByUnderConstruction, setStatusByUnderConstruction] =
    useState("no-of-projects");
  const [statusByConstructed, setStatusByConstructed] =
    useState("designed-capacity");

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
          "#f7a47a",
          "#f69564",
          "#f5854d",
          "#f37637",
          "#f26721",
          "#da5d1e",
          "#c2521a",
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
          "#f7a47a",
          "#f69564",
          "#f5854d",
          "#f37637",
          "#f26721",
          "#da5d1e",
          "#c2521a",
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
          "#f7a47a",
          "#f69564",
          "#f5854d",
          "#f37637",
          "#f26721",
          "#da5d1e",
          "#c2521a",
          "#793411",
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
          "#f7a47a",
          "#f69564",
          "#f5854d",
          "#f37637",
          "#f26721",
          "#da5d1e",
          "#c2521a",
          "#793411",
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
    <DashboardLayout>
      <div className={styles.container}>
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

            <div className={styles.dropdown}>
              <SelectOptions
                options={options}
                onValueChange={handleChangeConstructed}
                value={statusByConstructed}
              />
            </div>

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