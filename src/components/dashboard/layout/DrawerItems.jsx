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

import SBM from "assets/logo/Swachh_Bharat_Mission_Logo.svg";

import { menuItems } from "constants/MenuItems";
import Scrollbars from "react-custom-scrollbars";

function DrawerItems() {
  const { pathname } = useLocation();

  return (
    <Scrollbars>
      <div>
        <Toolbar
          style={{
            gap: 15,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img height={54} src={SBM} alt="Swachh Bharat Mission- Logo" />
        </Toolbar>
        <Divider sx={{ backgroundColor: "#1a404b", opacity: 1 }} />

        <Box sx={{ overflow: "auto" }} autoFocus>
          <List autoFocus>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  alignItems="center"
                  component={Link}
                  to={item.path}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#f3faf9",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  selected={item.path === pathname}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    style={{
                      color: "black",
                      alignItems: "center",
                      textAlign: "center",
                      alignSelf: "center",
                    }}
                  />
                </ListItemButton>
                <Divider sx={{ backgroundColor: "#1a404b", opacity: 0.25 }} />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </div>
    </Scrollbars>
  );
}

export default DrawerItems;
