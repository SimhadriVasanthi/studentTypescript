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
import { useAppDispatch } from "../../assets/hooks";
import { CustomButton } from "../../genericComponents/customButton";
import { authenticateLogin, googleCodeAuthentication } from "../../services";
import { loginProps } from "../../types/types";
import * as Yup from "yup";
import CustomField from "../../genericComponents/customTextfield";
import { closePopup, setPopup } from "../../store/Slices/popupSlice";
import { checkUser } from "../../assets/library";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

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
    setLoading(true);
    const response = await authenticateLogin(values);
    if (response.data.success) {
      localStorage.setItem("_auth", response?.data?.data?.AccessToken);
      checkUser();
      dispatch(closePopup());
      setLoading(false);
    } else {
    }
  };

  const GoogleLoginComponent = () => {
    // useGoogleLogin hook to initiate Google login
    const login = async (credentialResponse:any) => {
      if (credentialResponse.credential) {
        const response = await googleCodeAuthentication({
          credential: credentialResponse.credential,
        });
        if (response) {
          localStorage.setItem("_auth", response?.data?.data?.AccessToken);
          checkUser();
          dispatch(closePopup());
        }
      }
    };

    return (
      <GoogleOAuthProvider clientId="1043194767197-e8jd2rqaqugqqss9jrnckus0s79dlcb5.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            login(credentialResponse); // send this as body to /google/login
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    );
  };
  return (
    <Box>
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
                  <InputLabel
                    id="email"
                    sx={{ fontWeight: 600, color: "#000" }}
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
                  <InputLabel
                    id="password"
                    sx={{ fontWeight: 600, color: "#000" }}
                  >
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
                    onClick={() =>
                      dispatch(
                        setPopup({
                          show: true,
                          data: {
                            container: {
                              name: "forgot",
                              dimensions: {
                                width: "500px",
                              },
                            },
                            type: "custom",
                          },
                        })
                      )
                    }
                  >
                    Forgot password
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <CustomButton
                    handleSubmit={() => console.log("clicked")}
                    width="100%"
                  >
                    {loading ? (
                      <img
                        src={Images.standardLoader}
                        alt="load"
                        style={{
                          width: "20px",
                          height: "20px",
                          padding: "5px",
                        }}
                      />
                    ) : (
                      "Login"
                    )}
                  </CustomButton>
                  
                </Grid>
                <Grid item xs={12} sx={{width:"100%" }}>
                <h4 style={{textAlign:"center",margin:"0.625rem" }}>Or</h4>
                  <Box sx={{ mb: 1,width:"100%",display:"flex",justifyContent:"center" }}>
                    <GoogleLoginComponent />
                  </Box>
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
                    New to Campusroot ?&nbsp;
                    <Link
                      sx={{
                        textDecoration: "none",
                        color: "#3B3F76",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        dispatch(
                          setPopup({
                            show: true,
                            data: {
                              container: {
                                name: "signup",
                                dimensions: {
                                  width: "500px",
                                },
                              },
                              type: "custom",
                            },
                          })
                        )
                      }
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
    </Box>
  );
};

export default Login;
