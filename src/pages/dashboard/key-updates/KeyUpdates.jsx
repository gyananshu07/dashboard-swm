import React from "react";
import styles from "./styles.module.css";

import BarChart from "components/dashboard/charts/key-updates/BarChart";

function KeyUpdates() {
  const KeyUpdatesData = {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    colorSet: "blueShades",
    legend: {
      fontFamily: "Poppins",
    },
    title: {
      text: "Key Updates Data",
      fontFamily: "Poppins",
      fontSize: 16,
    },
    axisY: {
      labelFontFamily: "Poppins",
    },
    axisX: {
      labelWrap: true,
      labelFontFamily: "Poppins",
    },
    axisYType: "secondary",
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "bar",
        showInLegend: true,
        name: "No. of Dumpsite",
        dataPoints: [
          { label: "Completed", y: 326 },
          { label: "On-going", y: 342 },
          { label: "Action Plan Approved", y: 949 },
          { label: "Taken up by State/Other Funding", y: 34 },
        ],
      },
      {
        type: "bar",
        showInLegend: true,
        name: "Legacy Waste Qty. (Lacs Tonne)",
        dataPoints: [
          { label: "Completed", y: 426 },
          { label: "On-going", y: 551 },
          { label: "Action Plan Approved", y: 972 },
          { label: "Taken up by State/Other Funding", y: 36 },
        ],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.updatesContainer}>
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
        <div className={styles.updates} style={{ justifyContent: "center" }}>
          <div className={styles.header}>Remediation Status</div>
          <div className={styles.chartBody}>
            <BarChart data={KeyUpdatesData} />
          </div>
        </div>
        <div className={styles.updates}>
          <div className={styles.header}>GFC Updates</div>
          <div className={styles.body}>
            <ul>
              <li>
                The application window for ULBs to apply for GFC in quarter 3
                and quarter 4 for FY 2022-23 was opened from{" "}
                <b>
                  15<sup>th</sup> Nov 2022 to 30<sup>th</sup> Dec 2022
                </b>{" "}
                and from{" "}
                <b>
                  16<sup>th</sup> Jan 2023 to 28<sup>th</sup> Feb 2023
                </b>{" "}
                respectively.
              </li>
              <li>
                A total of 3,356 applications from ULBs under GFC were received
                till{" "}
                <b>
                  28<sup>th</sup> Feb 2023.
                </b>
              </li>
              <li>
                For the received applications post Desktop assessment (2012 are
                DA pass, 1104 are DA fail and DA of around 230 ULBs is in
                progress).
              </li>
              <li>
                {" "}
                The Field Assessment (also has been Started in 3 States).
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.updates}>
          <div className={styles.header}>Swachh Survekshan Updates</div>
          <div className={styles.body}>
            <ul>
              <li>
                Toolkit of <b>Swachh Survekshan-2024</b> launched on{" "}
                <b>
                  10<sup>th</sup> July, 2024
                </b>
              </li>
              <li>
                Field assessment of <b>Swachh Survekshan-2023</b> was launched
                on{" "}
                <b>
                  26<sup>th</sup>
                  June, 2023
                </b>
              </li>
              <li>
                The Q-4 field assessment of SS 2023 commenced on{" "}
                <b>
                  1<sup>st</sup> July, 2023
                </b>
              </li>
              <li>
                Citizen feedback under SS 2023 launched on{" "}
                <b>
                  1<sup>st</sup> July, 2023
                </b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.updates}>
        <div className={styles.header}>Google Toilet Locator</div>
        <div className={`${styles.info} text-center mx-auto`}>
          3,326 Cities (with 67,407 toilets) are live on Google Maps
        </div>
        <iframe
          title="Google Toilet Locator"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d2944.70692897118!2d77.2188154836922!3d28.63376501212621!3m2!1i1024!2i768!4f13.1!2m1!1sToilets!5e0!3m2!1sen!2sin!4v1697103040706!5m2!1sen!2sin"
          className={styles.iframe}
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default KeyUpdates;
