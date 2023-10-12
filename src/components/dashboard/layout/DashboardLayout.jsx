import * as React from "react";

import { Box, Toolbar, CssBaseline } from "@mui/material";

import CustomDrawer from "./CustomDrawer";
import CustomAppBar from "./CustomAppBar";

const drawerWidth = 200;

export default function DashboardLayout(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}>
      <CssBaseline />

      <CustomAppBar onDrawerToggle={handleDrawerToggle} />

      <CustomDrawer
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            xs: "100%",
          },
        }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
