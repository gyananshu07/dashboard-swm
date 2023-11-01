import * as React from "react";

import { Box, Toolbar, CssBaseline } from "@mui/material";

import CustomDrawer from "./CustomDrawer";
import CustomAppBar from "./CustomAppBar";

const drawerWidth = 160;

export default function DashboardLayout(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />

      <CustomAppBar
        onDrawerToggle={handleDrawerToggle}
        onPrint={props.onPrint}
      />

      <CustomDrawer
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 2,
          alignItems: "center",
          justifyContent: "center",
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            xs: "100%",
          },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
