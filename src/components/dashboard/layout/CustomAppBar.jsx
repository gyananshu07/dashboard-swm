import * as React from "react";

import { Button, AppBar, Toolbar, Typography } from "@mui/material";

import { MenuRounded as MenuRoundedIcon } from "@mui/icons-material";

import { IconButton } from "@mui/material";

const drawerWidth = 160;

function CustomAppBar({ onDrawerToggle, onPrint }) {
  return (
    <AppBar
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #1a404b",
      }}
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
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "#1a404b",
            fontFamily: "Poppins",
            textAlign: "center",
          }}
        >
          Swachh Bharat Mission Dashboard - Urban
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
