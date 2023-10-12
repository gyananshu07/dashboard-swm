import DashboardLayout from "components/dashboard/layout/DashboardLayout";
import React from "react";

import styles from "./styles.module.css";
import BarChart from "components/dashboard/charts/project-status/BarChart";

function SWMProjectStatus() {
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
        borderColor: "#180a03",
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
        borderColor: "#180a03",
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
        borderColor: "#180a03",
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
        borderColor: "#180a03",
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              Under Construction SWM Projects
            </div>
            <div className={styles.cardBody}>
              <BarChart
                data={noOfProjectsDataUC}
                titleText="No. of Projects Under Construction"
              />
            </div>

            <div className={styles.cardBody}>
              <BarChart
                data={designedCapacityDataUC}
                titleText="Designed Capacity (in TPD)"
              />
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>Completed SWM Projects</div>
            <div className={styles.cardBody}>
              <BarChart
                data={noOfProjectsDataC}
                titleText="No. of Projects Constructed"
              />
            </div>

            <div className={styles.cardBody}>
              <BarChart
                data={designedCapacityDataC}
                titleText="Designed Capacity (in TPD)"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SWMProjectStatus;
