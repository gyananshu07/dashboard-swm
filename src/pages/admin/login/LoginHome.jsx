import React from "react";
import styles from "./styles.module.css";
import video from "assets/video/login-video-2.mp4";
import SBM_Logo from "assets/logo/Swachh_Bharat_Mission_Logo.svg";
import Emblem from "assets/National-Emblem.png";
import { Button, InputAdornment, TextField } from "@mui/material";
import { AlternateEmailRounded, LockRounded } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

function LoginHome() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <img src={SBM_Logo} alt="SBM-Logo" style={{ height: 120 }} />
          <img src={Emblem} alt="Emblem-India" style={{ height: 120 }} />
        </div>

        <h3 className={styles.heading}>SBM Urban 2.0 - Dashboard</h3>
        <form
          className={styles.formContainer}
          onSubmit={() => navigate("home")}
        >
          <TextField
            fullWidth
            type="email"
            label="Email"
            required
            autoComplete="false"
            placeholder="example@example.com"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailRounded color="#1a404b" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& label.Mui-focused": {
                color: "#1a404b",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#1a404b",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1a404b",
                },
                "&:hover fieldset": {
                  borderColor: "#1a404b",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1a404b",
                },
              },
            }}
          />
          <TextField
            fullWidth
            type="password"
            placeholder="Password"
            label="Password"
            required
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockRounded color="#1a404b" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& label.Mui-focused": {
                color: "#1a404b",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "yellow",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1a404b",
                },
                "&:hover fieldset": {
                  borderColor: "#1a404b",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1a404b",
                },
              },
            }}
          />
          <Button
            fullWidth
            style={{
              backgroundColor: "rgb(26, 64, 75)",
              color: "white",
            }}
            type="submit"
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to="/home"
            >
              Login
            </Link>
          </Button>
        </form>
      </div>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted src={video} className={styles.video} />
      </div>
    </div>
  );
}

export default LoginHome;
