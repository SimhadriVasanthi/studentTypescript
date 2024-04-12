import {
  Box,
  Grid,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Images from "../../assets";
import { useAppDispatch, useAppSelector } from "../../assets/hooks";
import { CustomButton } from "../../genericComponents/customButton";
import { registerSignin } from "../../services";
import {
  initUserAuthStatus,
  setUserAuthStatus,
} from "../../store/Slices/userAuthSlice";
import { SignUpProps } from "../../types/types";
import { labelStyle } from "../styles/customStyles";
import * as Yup from "yup";
import PhoneNumber from "./phoneNumber";
import CustomField from "../../genericComponents/customTextfield";
import { closePopup, setPopup } from "../../store/Slices/popupSlice";
import { checkUser } from "../../assets/library";

const SignUp = () => {
  const [error, setError] = useState("");
  const [registerorphone, setRegisterorphone] = useState("signup");
  const dispatch = useAppDispatch();
  const initValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  };

  const signInSchema: Yup.ObjectSchema<SignUpProps> = Yup.object().shape({
    firstName: Yup.string()
      .required("Required")
      .matches(/^[a-zA-Z\s]*$/, "Name should only contain letters and spaces"),
    lastName: Yup.string()
      .required("Required")
      .matches(/^[a-zA-Z\s]*$/, "Name should only contain letters "),
    password: Yup.string()
      .min(3, "Too Short!")
      .max(25, "Too Long!")
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must have 1 uppercase, 1 number, 1 special character, and be at least 8 characters long"
      ),
    cPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match!")
      .required("Confirm password is required!"),
    email: Yup.string()
      .matches(
        /([a-z0-9]+)([{1}])?([a-zA-Z0-9]+)([a-zA-Z0-9]+)([a-z]+)/g,
        "Enter Email Id"
      )
      .required("Enter Email ID")
      .max(40, "Email ID must be at most 40 characters"),
  });

  const onSubmitForm = async (values: SignUpProps) => {
    const response = await registerSignin(values);
    if (response.data.success) {
      localStorage.setItem("_auth", response?.data?.data?.AccessToken);
      checkUser();
      dispatch(
        setPopup({
          show: true,
          data: {
            container: {
              name: "phonenumber",
              dimensions: {
                width: "500px",
              },
            },
            type: "custom",
          },
        })
      );
    } else {
      console.log(error);
    }
  };

  return (
    <Box sx={{ px: 2 }}>
      <Box>
        <Box sx={{ mb: 1.5 }}>
          <img src={Images.campusrootLogo} alt="logo" />
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "32px" },
              fontWeight: 700,
              color: "#3B3F76",
            }}
          >
            Welcome to<b style={{ color: "#FEB853" }}> campusroot</b>
          </Typography>
          <Typography sx={{ color: "#807E7E" }}>
            Please enter your details
          </Typography>
        </Box>
        <Formik
          initialValues={initValues}
          validationSchema={signInSchema}
          onSubmit={(values: SignUpProps) => onSubmitForm(values)}
          enableReinitialize={true}
        >
          {({ errors, values, handleChange }) => (
            <Form>
              <Grid container spacing={1.25} sx={{ width: "90%" }}>
                <Grid item xs={12}>
                  <InputLabel id="firstName" sx={labelStyle}>
                    First name
                  </InputLabel>
                  <CustomField
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    value={values.firstName}
                    onChange={handleChange}
                    fullWidth
                  />
                  <div style={{ color: "#e60c0c", fontSize: "12px" }}>
                    <ErrorMessage name="firstName" component="div" />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="lastName" sx={labelStyle}>
                    Last name
                  </InputLabel>
                  <CustomField
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    value={values.lastName}
                    onChange={handleChange}
                    fullWidth
                  />
                  <div style={{ color: "#e60c0c", fontSize: "12px" }}>
                    <ErrorMessage name="lastName" component="div" />
                  </div>
                </Grid>
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
                  <div style={{ color: "#e60c0c", fontSize: "12px" }}>
                    <ErrorMessage name="email" component="div" />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="password" sx={labelStyle}>
                    Password
                  </InputLabel>
                  <CustomField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    fullWidth
                  />
                  <div style={{ color: "#e60c0c", fontSize: "12px" }}>
                    <ErrorMessage name="password" component="div" />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="cPassword" sx={labelStyle}>
                    Confirm password
                  </InputLabel>
                  <CustomField
                    id="cPassword"
                    name="cPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={values.cPassword}
                    onChange={handleChange}
                    fullWidth
                  />
                  <div style={{ color: "#e60c0c", fontSize: "12px" }}>
                    <ErrorMessage name="cPassword" component="div" />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <CustomButton handleSubmit={() => onSubmitForm} width="100%">
                    Sign up
                  </CustomButton>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      color: "#7C7A7A",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    {" "}
                    Already have an account ? &nbsp;
                    <Link
                      sx={{
                        textDecoration: "none",
                        color: "#3B3F76",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Sign in
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SignUp;
