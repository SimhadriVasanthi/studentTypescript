import { Box, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets";
// import { useAppDispatch } from "../../assets/hooks";
import { CustomButton } from "../../genericComponents/customButton";
import { forgotPswdOtp, verifyForgotPswdOtp } from "../../services";
import OTPInput from "./otpInput";
// import { initUserAuthStatus } from "../../store/Slices/userAuthSlice";
import * as Yup from "yup";
import CustomField from "../../genericComponents/customTextfield";
import { setPopup } from "../../store/Slices/popupSlice";
import { useAppDispatch } from "../../assets/hooks";

const Verification = ({ email, setForgotorVerify }: any) => {
  const [loading, setLoading] = useState(false);
const dispatch = useAppDispatch();

  const otpSchema = Yup.object().shape({
    otp: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(4, "Must be exactly 4 digits")
      .max(4, "Must be exactly 4 digits"),
    password: Yup.string()
      .min(3, "Too Short!")
      .max(25, "Too Long!")
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must have 1 uppercase, 1 number, 1 special character, and be at least 8 characters long"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match!")
      .required("Confirm password is required!"),
  });

  const verifyCodeSubmit = async (values:any) => {
    setLoading(true);
    const response = await verifyForgotPswdOtp( values);
    if (response?.data?.success === true) {
      dispatch(
        setPopup({
          show: true,
          data: {
            container: {
              name: "login",
              dimensions: {
                width: "500px",
              },
            },
            type: "custom",
          },
        })
      )
    } else {
      
    }
    setLoading(false)
  };

  const maskEmail = (email = "") => {
    const [name, domain] = email.split("@");
    const { length: len } = name;
    const maskedName = name[0] + "****" + name[len - 1];
    const maskedEmail = maskedName + "@" + domain;
    return maskedEmail;
  };

  return (
    <div>
      <Typography
        sx={{
          fontSize: { xs: "22px" },
          fontWeight: 700,
        }}
      >
        Verification code{" "}
      </Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        {`Please enter the verification code sent to your mail id ${maskEmail}`}
      </Typography>
      <Formik
        initialValues={{
          email: email,
          otp: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={otpSchema}
        onSubmit={verifyCodeSubmit}
      >
        {({ values, handleChange }) => {
          return (
            <Form
              style={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // padding:"0 1.5rem"
              }}
            >
              <OTPInput
                length={4}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginBottom: "20px",
                }}
                name="otp"
                isNumberInput
                autoFocus
                inputClassName="otpinput"
                value={values.otp}
                onChangeOTP={(otp: any) => (values.otp = otp)}
              />
              <ErrorMessage
                name="otp"
                component="div"
                // style={{ color: "#e60c0c", fontSize: "12px" }}
              />
              <CustomField
                id="password"
                name="password"
                type="password"
                placeholder="New password"
                value={values.password}
                onChange={handleChange}
                fullWidth
              />
              <ErrorMessage
                name="password"
                component="div"
                // style={{ color: "#e60c0c", fontSize: "12px",mb:2 }}
              />
              <CustomField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Enter confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                fullWidth
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                // style={{ color: "#e60c0c", fontSize: "12px" }}
              />
              <Box sx={{ my: 1, display: "flex", justifyContent: "center" }}>
                <CustomButton
                  handleSubmit={() => console.log("clicked")}
                  width="100%"
                >
                  {loading ? (
                    <img
                      src={Images.standardLoader}
                      alt="load"
                      style={{ width: "20px", height: "20px", padding: "5px" }}
                    />
                  ) : (
                    "Continue"
                  )}
                </CustomButton>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const [forgotorVerify, setForgotorVerify] = useState("forgot");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  //   const Appdispatch = useAppDispatch();

  const onSubmitForm = async (values: any) => {
    setLoading(true)
    setEmail(values.email)
    const response = await forgotPswdOtp(values);
    if (response) {
      setForgotorVerify("verify");
      console.log(response);
    } else {
      console.log(error);
    }
    setLoading(false)
  };

  return (
    <Box sx={{ px: 4 }}>
      {forgotorVerify === "forgot" ? (
        <Box>
          <Box sx={{ mb: 1.5 }}>
            <img src={Images.campusrootLogo} alt="logo" />
            <Typography
              sx={{
                fontSize: { xs: "24px" },
                fontWeight: 700,
              }}
            >
              Forgot password?
            </Typography>
            <Typography sx={{ color: "#807E7E", fontSize: "16px" }}>
              Enter your email id associated with your account
            </Typography>
          </Box>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values: any) => onSubmitForm(values)}
            enableReinitialize={true}
          >
            {({ errors, values, handleChange }) => (
              <Form>
                <Grid container spacing={1.25}>
                  <Grid item xs={12}>
                    <InputLabel
                      id="email"
                      sx={{ fontWeight: 600, color: "#000", mb: 0.5 }}
                    >
                      Email id
                    </InputLabel>
                    <CustomField
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    <CustomButton
                  handleSubmit={() => console.log("clicked")}
                  width="100%"
                >
                  {loading ? (
                    <img
                      src={Images.standardLoader}
                      alt="load"
                      style={{ width: "20px", height: "20px", padding: "5px" }}
                    />
                  ) : (
                    "Continue"
                  )}
                </CustomButton>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      ) : (
        <Verification email={email} setForgotorVerify={setForgotorVerify} />
      )}
    </Box>
  );
};

export default ForgotPassword;
