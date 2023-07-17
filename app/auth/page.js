"use client";
import {
  Button,
  CircularProgress,
  ClickAwayListener,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import styles from "./login.module.css";
import { Email, PasswordRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

const inputLabel = {
  fontFamily: "Roboto",
  fontSize: 14,
  fontWeight: 500,
  textAlign: "center",
  alignContent: "center",
  margin: 0,
  padding: 2,
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [loading, setLoading] = useState(false); // [1
  const [otp, setOtp] = useState("");

  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      const response = await fetch("http://localhost:3000/api/auth/verify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
    };
    verifyAuth();
    // console.log(data);
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setDisableButton(true);
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      setSnackbarMsg(data.error);
      setTimeout(() => {
        setSnackbarOpen(true);
        setDisableButton(false);
        setLoading(false);
      }, 2000);
    }
    console.log(data);
    if (response.status === 200) {
      setShowOtpForm(true);
      setDisableButton(false);
      setLoading(false);
    }
  };

  const closeOtpForm = () => {
    setShowOtpForm(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      setSnackbarOpen(false);
      setDisableButton(false);
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSpaceEvent = (event) => {
    if (event.code === "Space") {
      event.preventDefault();
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value.replace(/\s/g, ""));
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["authpage-ctn-left"]}>
        <div className={styles["login-form-box"]}>
          <div style={{ margin: "0.5rem 1rem" }}>
            <Image
              src="./icons/bumblebee.svg"
              width={60}
              height={60}
              alt="A vector graphic of a cute bumblebee"
            />
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              // borderBottom: "1px solid rgba(210, 210, 210, 255)",
              // paddingBottom: 25,
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              fontFamily: "Poppins",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {showOtpForm ? "Verify your email" : "Sign in"}
          </div>
          <form onSubmit={handleSubmit} style={{ width: "85%" }}>
            <TextField
              fullWidth
              sx={{
                mb: 1.5,
                mt: 4,
                marginTop: "1rem",
                marginBottom: "0.5rem",
                borderRadius: 10,
              }}
              disabled={showOtpForm}
              id="email"
              label="Sign in with email"
              variant="outlined"
              type="email"
              size="normal"
              value={email}
              required
              // helperText="Please enter a valid email address."
              onKeyDown={handleSpaceEvent}
              onChange={handleEmailChange}
              InputProps={{
                style: { borderRadius: 15, height: 55, fontSize: 14 },
                endAdornment: (
                  <InputAdornment position="end">
                    <Email />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: inputLabel,
              }}
              FormHelperTextProps={{
                style: {
                  fontFamily: "Poppins",
                  fontSize: 12,
                  textAlign: "left",
                },
              }}
            />
            {showOtpForm ? (
              <TextField
                fullWidth
                sx={{
                  marginTop: "0.25rem",
                  marginBottom: "0.5rem",
                  borderRadius: 10,
                }}
                id="email"
                label="Enter your OTP"
                variant="outlined"
                type="text"
                size="normal"
                value={otp}
                required
                // helperText="Please enter a valid email address."
                onKeyDown={handleSpaceEvent}
                // onChange={handleOtpChange}
                InputProps={{
                  style: { borderRadius: 15, height: 55, fontSize: 14 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <PasswordRounded />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: inputLabel,
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Poppins",
                    fontSize: 12,
                    textAlign: "left",
                  },
                }}
              />
            ) : null}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={disableButton}
              sx={{
                textTransform: "none",
                mt: 1,
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: 13,
                height: 55,
                borderRadius: 10,
                marginTop: 0.5,
                backgroundColor: "rgba(30, 30, 30, 1)",
                ":focus": {
                  backgroundColor: "rgba(30, 30, 30, 1)",
                },
                ":active": {
                  backgroundColor: "rgba(30, 30, 30, 1)",
                },
                ":hover": {
                  backgroundColor: "rgba(35, 35, 35, 1)",
                },
                ":disabled": {
                  backgroundColor: "rgba(225, 225, 225, 1)",
                },
              }}
            >
              {showOtpForm ? "Login" : "Send link"}
              {loading ? <CircularProgress size={20} sx={{ ml: 2 }} /> : null}
            </Button>
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: 400,
                textAlign: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              {showOtpForm
                ? "Please enter your one-time password."
                : "You will receive a one-time password at the email address you provide."}
            </div>
          </form>
        </div>
      </div>
      <div className={styles["authpage-ctn-right"]}>
        <video autoPlay muted loop className={`${styles["authpage-video"]}`}>
          <source src="/videos/login_page_background.mp4" type="video/mp4" />
        </video>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        autoHideDuration={3000}
        message={snackbarMsg}
        sx={{
          textAlign: "center",
          ".MuiSnackbarContent-root": {
            backgroundColor: "rgba(255, 50, 30, 1)",
            color: "white",
            fontFamily: "Poppins",
            fontSize: 14,
            fontWeight: 500,
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
          },
        }}
      />
    </div>
  );
}
