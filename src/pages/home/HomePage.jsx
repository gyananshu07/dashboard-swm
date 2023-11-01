import React from "react";
import { Link, useNavigate } from "react-router-dom";

import SBM from "assets/logo/Swachh_Bharat_Mission_Logo.svg";
// import SBMWhite from "assets/svg-icons/Swach Bharat.svg";
import Emblem from "assets/National-Emblem.png";
import PMImage from "assets/pm.png";
import PMSign from "assets/pm-sign.svg";

import styles from "./styles.module.css";

import { Button } from "@mui/material";

// import HomeSlider from "components/home/carousel/HomeSlider";
import { menuItemsHome } from "constants/MenuItemsHome";

function HomePage() {
  const navigation = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img src={SBM} alt="" className={styles.image} />
          <img src={Emblem} alt="" className={styles.image} />
        </div>

        <div className={styles.heading}>
          <div className={styles.headingText}>
            Swachh Bharat Mission Urban - 2.0
          </div>
        </div>

        <div className={styles.logoutContainer}>
          <Button
            fullWidth
            style={{
              backgroundColor: "rgb(26, 64, 75)",
              color: "white",
              paddingInline: 30,
            }}
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to="/"
            >
              Logout
            </Link>
          </Button>
        </div>
      </div>

      <div className={styles.contentContainer}>
        {/* <div className={styles.banner}>
          <HomeSlider />
        </div> */}

        {/* <h2 className={styles.contentHeading}>
          <img src={SBMWhite} alt="" className={styles.image} />
          Swachh Bharat Mission Urban 2.0
          <img src={SBMWhite} alt="" className={styles.image} />
        </h2> */}

        <div className={`${styles.mainContentContainer} container`}>
          <div className={styles.aboutContainer}>
            <div className={styles.SBMContainer}>
              <img src={SBM} alt="SBM Logo" />
            </div>

            <div className={styles.PMContainer}>
              <img src={PMImage} alt="SBM Logo" className={styles.PMImage} />
              <div className={styles.SBMText}>
                “The goal of the <b>‘Swachh Bharat Mission Urban 2.0’</b> is to
                make a garbage - free city, a city completely free of garbage.”
                <br />
                <b>- Shri Narendra Modi, Prime Minister of India</b>
              </div>
              <img src={PMSign} alt="SBM Logo" className={styles.PMSign} />
            </div>
          </div>

          <div className={styles.statusContainer}>
            {menuItemsHome.map((item) => {
              return (
                <div
                  key={item.path}
                  className={styles.iconCard}
                  onClick={() => navigation(item.path)}
                >
                  {item.icon}
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
