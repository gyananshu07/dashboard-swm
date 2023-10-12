import * as React from "react";

import {
  Box,
  Toolbar,
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

import Arahas from "assets/logo/ArahasLogo.png";
import { menuItems } from "constants/MenuItems";

function DrawerItems() {
  const { pathname } = useLocation();
  return (
    <div>
      <Toolbar
        style={{
          gap: 15,
          padding: 5,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <img height={54} src={Arahas} alt="Arahas Technologies - Logo" />
      </Toolbar>
      <Divider sx={{ backgroundColor: "#f26721", opacity: 1 }} />

      <Box sx={{ overflow: "auto" }}>
        <List>
          <List>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  disablePadding
                  component={Link}
                  to={item.path}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#f3faf9",
                    },
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  selected={item.path === pathname}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    style={{ color: "black", textAlign: "center" }}
                  />
                </ListItemButton>
                <Divider sx={{ backgroundColor: "#f26721", opacity: 0.25 }} />
              </React.Fragment>
            ))}
          </List>
        </List>
      </Box>
    </div>
  );
}

export default DrawerItems;
