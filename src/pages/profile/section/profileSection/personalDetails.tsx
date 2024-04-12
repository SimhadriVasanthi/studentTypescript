import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { DestinationTypeEnum } from "../../../../assets/enums";
import CustomField from "../../../../genericComponents/customTextfield";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkExperience from "./workExperience";
import CustomModal from "../../../../genericComponents/modalPopup/customModal";
import PhoneNumber from "../../../../components/authentication/phoneNumber";
import { useAppSelector } from "../../../../assets/hooks";

const PersonalDetails = () => {
  const [refused, setRefused] = useState("");
  const [permanent, setPermanent] = useState();
  const [open, setOpen] = useState(false);
  const personalInfo = useAppSelector((state) => state.personalInfo);
  const sharedInfo = useAppSelector((state) => state.sharedInfo);
  console.log(personalInfo, sharedInfo);
  const initialValues = {
    firstName: "",
    lastName: "",
    personalDetails: {
      DOB: "",
      Gender: "",
      nationality: "",
      countyOfBirth: "",
      maritalStatus: "",
      validPassport: "",
      validPermit: "",
      visaRejectedDetails: "",
      temporaryAddress: {
        city: "",
        state: "",
        pinCode: "",
        country: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
      },
      permanentAddress: {
        city: "",
        state: "",
        pinCode: "",
        country: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
      },
    },
  };
  const submit = async (values: any) => {
    console.log(values);
  };

  const handleContact = () => {
    setOpen(true);
  };
  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(
      today.getFullYear() - 12,
      today.getMonth(),
      today.getDate()
    );
    return maxDate.toISOString().split("T")[0];
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={profileSchema}
        enableReinitialize
        onSubmit={(values: any) => submit(values)}
      >
        {({ touched, errors, values, handleChange, resetForm }) => {
          return (
            <Form style={{}}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    First Name{" "}
                  </InputLabel>
                  <CustomField
                    id="name"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Last Name{" "}
                  </InputLabel>

                  <CustomField
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Gender
                  </InputLabel>

                  <Select
                    id="Country"
                    size="small"
                    name="personalDetails.Gender"
                    displayEmpty
                    defaultValue=""
                    value={values.personalDetails.Gender}
                    onChange={handleChange}
                    fullWidth
                    IconComponent={ExpandMoreIcon}
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px !important",
                        },
                      }}
                    >
                      Gender
                    </MenuItem>

                    {["Male", "Female", "Other"].map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "14px !important",
                          },
                          "& .MuiSvgIcon-root ": {
                            fontSize: "1rem",
                          },
                          whiteSpace: "normal",
                        }}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Date of Birth
                  </InputLabel>
                  <TextField
                    id="name"
                    type="date"
                    size="small"
                    placeholder="Attended From"
                    name="personalDetails.DOB"
                    value={values.personalDetails.DOB}
                    onChange={handleChange}
                    fullWidth
                    inputProps={{
                      max: getMaxDate(),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Nationality
                  </InputLabel>

                  <Select
                    id="Country"
                    size="small"
                    name="personalDetails.nationality"
                    displayEmpty
                    defaultValue=""
                    value={values.personalDetails.nationality}
                    onChange={handleChange}
                    fullWidth
                    IconComponent={ExpandMoreIcon}
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px !important",
                        },
                      }}
                    >
                      Select nationality
                    </MenuItem>

                    {[
                      "Indian",
                      "American",
                      "Australian",
                      "Canadian",
                      "Other",
                    ].map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "14px !important",
                          },
                          "& .MuiSvgIcon-root ": {
                            fontSize: "1rem",
                          },
                          whiteSpace: "normal",
                        }}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Country of Birth
                  </InputLabel>

                  <Select
                    id="Country"
                    size="small"
                    name="personalDetails.countyOfBirth"
                    displayEmpty
                    defaultValue=""
                    value={values.personalDetails.countyOfBirth}
                    onChange={handleChange}
                    fullWidth
                    IconComponent={ExpandMoreIcon}

                    // MenuProps={{}}
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px !important",
                        },
                      }}
                    >
                      Select country
                    </MenuItem>

                    {Object.entries(DestinationTypeEnum).map(([key, value]) => (
                      <MenuItem
                        key={key}
                        value={key}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "14px !important",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: "1rem",
                          },
                          whiteSpace: "normal",
                        }}
                      >
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Marital status
                  </InputLabel>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="personalDetails.maritalStatus"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "14px",
                          },
                        }}
                        value="Married"
                        control={
                          <Radio
                            size="small"
                            sx={{
                              "&.MuiRadio-root.Mui-checked": {
                                color: "#3B3F76 !important",
                              },
                            }}
                          />
                        }
                        label="Married"
                      />
                      <FormControlLabel
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "14px",
                          },
                        }}
                        value="Unmarried"
                        control={
                          <Radio
                            size="small"
                            sx={{
                              "&.MuiRadio-root.Mui-checked": {
                                color: "#3B3F76 !important",
                              },
                            }}
                          />
                        }
                        label="Unmarried"
                      />
                      <FormControlLabel
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "14px",
                          },
                        }}
                        value="Widowed"
                        control={
                          <Radio
                            size="small"
                            sx={{
                              "&.MuiRadio-root.Mui-checked": {
                                color: "#3B3F76 !important",
                              },
                            }}
                          />
                        }
                        label="Widowed"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Do you have a valid passport ?
                  </InputLabel>
                  <Select
                    size="small"
                    id="Country"
                    name="personalDetails.validPassport"
                    displayEmpty
                    defaultValue=""
                    value={values.personalDetails.validPassport}
                    onChange={handleChange}
                    fullWidth
                    IconComponent={ExpandMoreIcon}
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px !important",
                        },
                      }}
                    >
                      Select
                    </MenuItem>

                    {[
                      { name: "Yes", value: "yes" },
                      { name: "No", value: "no" },
                      { name: "Processing", value: "processing" },
                    ].map((name: any) => (
                      <MenuItem
                        key={name}
                        value={name.value}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "14px !important",
                          },
                          "& .MuiSvgIcon-root ": {
                            fontSize: "1rem",
                          },
                          whiteSpace: "normal",
                        }}
                      >
                        {name.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Do you have valid permit?
                  </InputLabel>
                  <Select
                    size="small"
                    id="Country"
                    name="personalDetails.validPermit"
                    displayEmpty
                    defaultValue=""
                    value={values.personalDetails.validPermit}
                    onChange={handleChange}
                    fullWidth
                    IconComponent={ExpandMoreIcon}
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px !important",
                        },
                      }}
                    >
                      Select
                    </MenuItem>

                    {[
                      { name: "Yes", value: "yes" },
                      { name: "No", value: "no" },
                      { name: "Processing", value: "processing" },
                    ].map((name: any) => (
                      <MenuItem
                        key={name}
                        value={name.value}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "14px !important",
                          },
                          "& .MuiSvgIcon-root ": {
                            fontSize: "1rem",
                          },
                          whiteSpace: "normal",
                        }}
                      >
                        {name.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{
                      fontWeight: "600",
                      color: "#000",
                      mb: 1,
                      whiteSpace: "normal",
                    }}
                  >
                    Have you been refused a Visa from Canada, USA, UK, New
                    Zealand, or Australia?
                  </InputLabel>
                  <Select
                    size="small"
                    id="Country"
                    name="refusal"
                    displayEmpty
                    defaultValue=""
                    value={refused}
                    onChange={(e) => setRefused(e.target.value)}
                    fullWidth
                    IconComponent={ExpandMoreIcon}
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px !important",
                        },
                      }}
                    >
                      Select
                    </MenuItem>

                    {[
                      { name: "Yes", value: "yes" },
                      { name: "No", value: "no" },
                    ].map((name: any) => (
                      <MenuItem
                        key={name}
                        value={name.value}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "14px !important",
                          },
                          "& .MuiSvgIcon-root ": {
                            fontSize: "1rem",
                          },
                          whiteSpace: "normal",
                        }}
                      >
                        {name.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                {refused === "yes" ? (
                  <Grid item xs={12} sm={6}>
                    <InputLabel
                      id="firstName"
                      sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                    >
                      Reason for rejected
                    </InputLabel>
                    <TextField
                      variant="outlined"
                      size="small"
                      type="text"
                      id="visaRejectedDetails"
                      multiline
                      fullWidth
                      rows={3}
                      placeholder="Visa Rejected details"
                      onChange={handleChange}
                      name="personalDetails.visaRejectedDetails"
                      value={values.personalDetails.visaRejectedDetails}
                    />
                  </Grid>
                ) : null}

                <Grid item xs={12}>
                  <Typography
                    sx={{ background: "#DCF8F7", p: 1, fontWeight: 600 }}
                  >
                    Address & Contact
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Address Line1
                  </InputLabel>
                  <CustomField
                    id="addressLine1"
                    type="text"
                    placeholder="Address Line1"
                    name="personalDetails.temporaryAddress.addressLine1"
                    value={values.personalDetails.temporaryAddress.addressLine1}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Address Line2
                  </InputLabel>
                  <CustomField
                    id="addressLine2"
                    type="text"
                    placeholder="Address Line2"
                    name="personalDetails.temporaryAddress.addressLine2"
                    value={values.personalDetails.temporaryAddress.addressLine2}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Address Line3
                  </InputLabel>
                  <CustomField
                    id="addressLine3"
                    type="text"
                    placeholder="Address Line3"
                    name="personalDetails.temporaryAddress.addressLine3"
                    value={values.personalDetails.temporaryAddress.addressLine3}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Country
                  </InputLabel>
                  {/* <Select
                    id="country"
                    name="personalDetails.temporaryAddress.country"
                    // value={selectedCountry}
                    // onChange={(e) => handleCountry(e.target.value, "permanent")}
                    fullWidth
                    IconComponent={ExpandMoreIcon}
                    
                    MenuProps={MenuProps}
                    displayEmpty
                    defaultValue=""
                  >
                    <MenuItem value="" disabled>
                      Select Country
                    </MenuItem>
                    {countries.map((country) => (
                      <MenuItem key={country.isoCode} value={country.name}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </Select> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    State/Province
                  </InputLabel>

                  {/* <Select
                    id="state"
                    name="personalDetails.temporaryAddress.state"
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    fullWidth
                    displayEmpty
                    defaultValue=""
                    IconComponent={ExpandMoreIcon}
                    
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="" disabled>
                      Select State
                    </MenuItem>
                    {states.map((state) => (
                      <MenuItem key={state.isoCode} value={state.name}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    City/Town
                  </InputLabel>

                  {/* <Select
                    id="city"
                    name="personalDetails.temporaryAddress.city"
                    value={selectedCity}
                    displayEmpty
                    defaultValue=""
                    onChange={(e) => handleCityChange(e.target.value)}
                    fullWidth
                    // disabled={!selectedState}
                    IconComponent={ExpandMoreIcon}
                    
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="" disabled>
                      Select City
                    </MenuItem>
                    {cities
                      ? cities.map((city) => (
                          <MenuItem key={city} value={city.name}>
                            {city.name}
                          </MenuItem>
                        ))
                      : "Select sta"}
                  </Select> */}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Zipcode
                  </InputLabel>
                  <CustomField
                    id="pinCode"
                    type="number"
                    placeholder="Pincode"
                    name="personalDetails.temporaryAddress.pinCode"
                    value={values.personalDetails.temporaryAddress.pinCode}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ textTransform: "none", fontSize: "1rem" }}
                    onClick={handleContact}
                  >
                    + Add contact number
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="" sx={{ color: "#000" }}>
                    Is your Home address same as Contact address?
                  </InputLabel>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={permanent}
                      onChange={(e: any) => setPermanent(e.target.value)}
                    >
                      <FormControlLabel
                        value="yes"
                        control={
                          <Radio
                            size="small"
                            sx={{
                              "&.MuiRadio-root.Mui-checked": {
                                color: "#3B3F76 !important",
                              },
                            }}
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={
                          <Radio
                            size="small"
                            sx={{
                              "&.MuiRadio-root.Mui-checked": {
                                color: "#3B3F76 !important",
                              },
                            }}
                          />
                        }
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                {permanent === "no" ? (
                  <>
                    <Grid item xs={12} sm={6}>
                      <InputLabel
                        id="firstName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        Address Line1
                      </InputLabel>
                      <CustomField
                        id="addressLine1"
                        type="text"
                        placeholder="Address Line1"
                        name="personalDetails.permanentAddress.addressLine1"
                        value={
                          values.personalDetails.permanentAddress.addressLine1
                        }
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel
                        id="firstName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        Address Line2
                      </InputLabel>
                      <CustomField
                        id="addressLine2"
                        type="text"
                        placeholder="Address Line2"
                        name="personalDetails.permanentAddress.addressLine2"
                        value={
                          values.personalDetails.permanentAddress.addressLine2
                        }
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel
                        id="firstName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        Address Line3
                      </InputLabel>
                      <CustomField
                        id="addressLine3"
                        type="text"
                        placeholder="Address Line3"
                        name="personalDetails.permanentAddress.addressLine3"
                        value={
                          values.personalDetails.permanentAddress.addressLine3
                        }
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel
                        id="firstName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        Country
                      </InputLabel>
                      {/* <Select
                    id="country"
                    name="personalDetails.permanentAddress.country"
                    // value={selectedCountry}
                    // onChange={(e) => handleCountry(e.target.value, "permanent")}
                    fullWidth
                    IconComponent={ExpandMoreIcon}
                    
                    MenuProps={MenuProps}
                    displayEmpty
                    defaultValue=""
                  >
                    <MenuItem value="" disabled>
                      Select Country
                    </MenuItem>
                    {countries.map((country) => (
                      <MenuItem key={country.isoCode} value={country.name}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </Select> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel
                        id="firstName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        State/Province
                      </InputLabel>

                      {/* <Select
                    id="state"
                    name="personalDetails.permanentAddress.state"
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    fullWidth
                    displayEmpty
                    defaultValue=""
                    IconComponent={ExpandMoreIcon}
                    
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="" disabled>
                      Select State
                    </MenuItem>
                    {states.map((state) => (
                      <MenuItem key={state.isoCode} value={state.name}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel
                        id="firstName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        City/Town
                      </InputLabel>

                      {/* <Select
                    id="city"
                    name="personalDetails.permanentAddress.city"
                    value={selectedCity}
                    displayEmpty
                    defaultValue=""
                    onChange={(e) => handleCityChange(e.target.value)}
                    fullWidth
                    // disabled={!selectedState}
                    IconComponent={ExpandMoreIcon}
                    
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="" disabled>
                      Select City
                    </MenuItem>
                    {cities
                      ? cities.map((city) => (
                          <MenuItem key={city} value={city.name}>
                            {city.name}
                          </MenuItem>
                        ))
                      : "Select sta"}
                  </Select> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel
                        id="firstName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        Zipcode
                      </InputLabel>
                      <CustomField
                        id="pinCode"
                        type="number"
                        placeholder="Pincode"
                        name="personalDetails.permanentAddress.pinCode"
                        value={values.personalDetails.permanentAddress.pinCode}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                  </>
                ) : null}
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "end", my: 2 }}
                >
                  <Button
                    type="submit"
                    onClick={() => submit}
                    sx={{
                      width: "100px",
                      border: "1px solid #027A48",
                      background: "#F8F6F6",
                      color: "#000",
                      textTransform: "none",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #0B2D1E 0%, #1E8558 100%)",
                        color: "#fff",
                      },
                    }}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      <CustomModal
        open={open}
        handleClose={() => setOpen(!open)}
        additionalData={{ width: "500px" }}
      >
        <PhoneNumber />
      </CustomModal>
    </div>
  );
};

export default PersonalDetails;
