import { Box, Grid, Typography } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../genericComponents/customButton";
import {  phoneNumberAddition, verifyPhoneOtp } from "../../services";
import OTPInput from "./otpInput";
import * as Yup from "yup";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { closePopup } from "../../store/Slices/popupSlice";
import { useAppDispatch } from "../../assets/hooks";
import Images from "../../assets";

const Verification = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const otpSchema = Yup.object().shape({
    otp: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(6, "Must be exactly 6 digits")
      .max(6, "Must be exactly 6 digits"),
  });

  const verifyCodeSubmit = async (values: any) => {
    setLoading(true)
    const response = await verifyPhoneOtp(values,);
    if (response?.data?.success === true) {
      dispatch(closePopup());
      
    } else {
      
    }
    setLoading(false)
  };


  return (
    <div>
      <Typography
        sx={{
          fontSize: { xs: "24px" },
          fontWeight: 700,
        }}
      >
        OTP verification{" "}
      </Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        {`Please enter the otp sent to your phone number `}
      </Typography>
      <Formik
        initialValues={{
          otp: "",
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
                // onChangeOTP={(otp:number) => (values.otp = otp)}
              />
              <ErrorMessage
                name="otp"
                component="div"
                // style={{ color: "#e60c0c", fontSize: "12px" }}
              />
              <Box sx={{ my: 1, display: "flex", justifyContent: "center" }}>
                <CustomButton
                  handleSubmit={()=>console.log("")}
                  width="100px"
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

const PhoneNumber = () => {
  const [error, setError] = useState("");
  const [phoneorVerify, setphoneorVerify] = useState("phone");
  const [email, setEmail] = useState("");
  const [loading,setLoading] = useState(false)
  //   const Appdispatch = useAppDispatch();
  const [phone, setPhone] = useState({
    countryCode: "",
    number: "",
  });

  const handlePhoneChange = (value: any, data: any) => {
    let code = value?.split(data?.dialCode);
    setPhone({
      countryCode: data?.dialCode,
      number: code[1],
    });
  };
  const onSubmitForm = async (values: any) => {
    setLoading(true)
    const response = await phoneNumberAddition(values);
    if (response) {
      setphoneorVerify("verify")
    } else {
      console.log(error);
    }
    setLoading(false)
  };

  return (
    <Box sx={{ px: 1 }}>
      {phoneorVerify === "phone" ? (
        <Box>
          <Box sx={{ mb: 1.5 }}>
            <Typography
              sx={{
                fontSize: { xs: "22px" },
                fontWeight: 700,
              }}
              gutterBottom
            >
              Enter your contact number
            </Typography>
            <Typography sx={{ color: "#807E7E", fontSize: "16px" }}>
              We will send you an OTP on this contact number
            </Typography>
          </Box>
          <Formik
            initialValues={{ phone: phone }}
            onSubmit={(values: any) => onSubmitForm(values)}
            enableReinitialize={true}
          >
            {({ errors, values, handleChange }) => (
              <Form>
                <Grid container spacing={1.25}>
                  <Grid item xs={12}>
                    <ReactPhoneInput
                      value={`${phone.countryCode} ${phone.number}`}
                      onChange={handlePhoneChange}
                      country="in"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    <CustomButton
                      handleSubmit={() => onSubmitForm}
                      width="100px"
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
        <Verification />
      )}
    </Box>
  );
};

export default PhoneNumber;
