import * as React from "react";

import { Button, AppBar, Toolbar, Typography } from "@mui/material";

import { MenuRounded as MenuRoundedIcon } from "@mui/icons-material";

import { IconButton } from "@mui/material";

import styles from "./styles.module.css";

const drawerWidth = 160;

function CustomAppBar({ onDrawerToggle, onPrint }) {
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "2px solid #1a404b",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      className={styles.header}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { md: "none" }, color: "#1a404b" }}
        >
          <MenuRoundedIcon />
        </IconButton>

        <img
          className={styles.headerLogo}
          height="54"
          src={require("assets/logo/Swachh_Bharat_Mission_Logo.svg").default}
          alt="Logo"
        />

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "#1a404b",
            fontFamily: "Poppins",
            textAlign: "center",
            display: { xs: "none", md: "block" },
          }}
        >
          SBM Urban 2.0 - Dashboard
        </Typography>

        <Button
          variant="outlined"
          onClick={onPrint}
          sx={{ borderColor: "#1a404b", color: "#1a404b" }}
        >
          Print!
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
