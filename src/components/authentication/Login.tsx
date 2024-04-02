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
import { authenticateLogin } from "../../services";
import { initUserAuthStatus } from "../../store/Slices/userAuthSlice";
import { loginProps } from "../../types/types";
import * as Yup from "yup";

const Login = ({ setLoginOrSignup }: any) => {
  const [error, setError] = useState("");
  const Appdispatch = useAppDispatch();
  const initValues = {
    email: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, "Too Short!")
      .max(25, "Too Long!")
      .required("Password is required"),
    email: Yup.string()
      .matches(
        /([a-z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-z\.]+)/g,
        "Enter valid Email"
      )
      .required("Enter Email ID")
      .max(40, "Email ID must be atmost 40 characters"),
  });

  const onSubmitForm = async (values: loginProps) => {
    const response = await authenticateLogin(values, setError);
    if (response) {
      localStorage.setItem("_auth", response?.data?.data?.AccessToken);
      Appdispatch(
        initUserAuthStatus({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: {
            isAuthorized: true,
            isRegistered: true,
            role: "student",
          },
        })
      );
    } else {
      console.log(error);
    }
    console.log(response);
  };

  return (
    <Box sx={{ px: 5 }}>
      <Box sx={{ mb: 1.5 }}>
        <img src={Images.campusrootLogo} alt="logo" />
        <Typography
          sx={{
            fontSize: { xs: "32px", sm: "36px" },
            fontWeight: 700,
            color: "#3B3F76",
          }}
        >
          Welcome <b style={{ color: "#FEB853" }}>back</b>
        </Typography>
        <Typography sx={{ color: "#807E7E" }}>
          Please enter your details
        </Typography>
      </Box>
      <Formik
        initialValues={initValues}
        validationSchema={loginSchema}
        onSubmit={(values: loginProps) => onSubmitForm(values)}
        enableReinitialize={true}
      >
        {({ errors, values, handleChange }) => (
          <Form>
            <Grid container spacing={1.25}>
              <Grid item xs={12}>
                <InputLabel id="email" sx={{ fontWeight: 600, color: "#000" }}>
                  Email id
                </InputLabel>
                <Field
                  id="email"
                  name="email"
                  size="small"
                  type="email"
                  as={TextField}
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  fullWidth
                  sx={{}}
                />
                <div style={{ color: "#e60c0c", fontSize: "12px" }}>
                  <ErrorMessage name="email" component="div" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  id="password"
                  sx={{ fontWeight: 600, color: "#000" }}
                >
                  Password
                </InputLabel>
                <Field
                  id="password"
                  name="password"
                  size="small"
                  type="password"
                  as={TextField}
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  fullWidth
                  sx={{}}
                />
                <div style={{ color: "#e60c0c", fontSize: "12px" }}>
                  <ErrorMessage name="password" component="div" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "#7C7A7A",
                    fontSize: "14px",
                    fontWeight: 500,
                    float: "right",
                    my: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => setLoginOrSignup("forgotPassword")}
                >
                  Forgot password
                </Link>
              </Grid>
              <Grid item xs={12}>
                <CustomButton handleSubmit={() => onSubmitForm} width="100%">
                  Login
                </CustomButton>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{ color: "#7C7A7A", fontSize: "1rem", fontWeight: 500 }}
                >
                  {" "}
                  New to Campusroot ?&nbsp;
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "#3B3F76",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                    onClick={() => setLoginOrSignup("signup")}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
