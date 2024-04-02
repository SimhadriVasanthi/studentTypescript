import {
  Box,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Images from "../../assets";
// import { useAppDispatch } from "../../assets/hooks";
import { CustomButton } from "../../genericComponents/customButton";
import {  forgotPswdOtp } from "../../services";
// import { initUserAuthStatus } from "../../store/Slices/userAuthSlice";

const ForgotPassword = ({ setLoginOrSignup }: any) => {
  const [error, setError] = useState("");
//   const Appdispatch = useAppDispatch();
 
  const onSubmitForm = async (values: any) => {
    const response = await forgotPswdOtp(values, setError);
    if (response) {
      console.log(response)
    } else {
      console.log(error);
    }
  };

  return (
    <Box sx={{ px: 3 }}>
      <Box sx={{ mb: 1.5 }}>
        <img src={Images.campusrootLogo} alt="logo" />
        <Typography
          sx={{
            fontSize: { xs: "32px", sm: "36px" },
            fontWeight: 700,
          }}
        >
          Forgot password?
        </Typography>
        <Typography sx={{ color: "#807E7E" }}>
          Enter your email id associated with your account
        </Typography>
      </Box>
      <Formik
        initialValues={{email: ""}}
        onSubmit={(values: any) => onSubmitForm(values)}
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
              </Grid>
              <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
                <CustomButton handleSubmit={() => onSubmitForm} width="100px">
                Continue
                </CustomButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ForgotPassword;
