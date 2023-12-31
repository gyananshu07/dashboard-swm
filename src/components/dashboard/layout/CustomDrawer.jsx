import * as React from "react";

import { Box, Drawer } from "@mui/material";

import DrawerItems from "./DrawerItems";

import styles from "./styles.module.css";

const drawerWidth = 160;

function CustomDrawer({ mobileOpen, onDrawerToggle }) {
  const container =
    window !== undefined ? () => window.document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="Items"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        anchor={"left"}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        className={styles.drawer}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: "2px solid #1a404b",
          },
        }}
      >
        <DrawerItems />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: "2px solid #1a404b",
          },
        }}
        className={styles.drawer}
        open
      >
        <DrawerItems />
      </Drawer>
    </Box>
  );
}

export default CustomDrawer;
