import { MenuItem, Select } from "@mui/material";
import React from "react";

import styles from "./styles.module.css";

function SelectOptions({ options, value, onValueChange }) {
  return (
    <div className={styles.dropdown}>
      <Select
        size="small"
        value={value}
        onChange={onValueChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}>
        <MenuItem disabled value="">
          --Select--
        </MenuItem>

        {options.map((option) => {
          return (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}

export default SelectOptions;
