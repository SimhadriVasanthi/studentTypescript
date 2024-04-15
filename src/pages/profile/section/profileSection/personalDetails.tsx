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
import React, { useEffect, useState } from "react";
import { DestinationTypeEnum } from "../../../../assets/enums";
import CustomField from "../../../../genericComponents/customTextfield";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppDispatch, useAppSelector } from "../../../../assets/hooks";
import { setPopup } from "../../../../store/Slices/popupSlice";
import { Country, State, City } from "country-state-city";
import { Event } from "../../../../types/types";
import { editProfile } from "../../../../services";
import { setSharedInfo } from "../../../../store/Slices/sharedInfoSlice";
import { setPersonalInfo } from "../../../../store/Slices/personalInfoSlice";
interface ICountry {
  name: string;
  isoCode: string;
}

interface IState {
  name: string;
  isoCode: string;
  countryCode: string;
}

interface ICity {
  name: string;
  stateCode: string;
  countryCode: string;
}
const PersonalDetails = () => {
  const dispatch = useAppDispatch();
  const [refused, setRefused] = useState("");
  const [permanent, setPermanent] = useState("");
  const personalInfo = useAppSelector((state) => state.personalInfo);
  const sharedInfo = useAppSelector((state) => state.sharedInfo);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [permanentstates, setpermanentstates] = useState<IState[]>([]);
  const [permanentcities, setpermanentCities] = useState<ICity[]>([]);
  const [selectedCountry, setSelectedCountry] = useState(
    personalInfo?.data?.temporaryAddress?.country
  );
  const [selectedState, setSelectedState] = useState(
    personalInfo?.data?.temporaryAddress?.state
  );
  const [selectedCity, setSelectedCity] = useState(
    personalInfo?.data?.temporaryAddress?.city
  );
  const [permanentCountry, setPermanentCountry] = useState(
    personalInfo?.data?.permanentAddress?.country
  );
  const [permanentState, setpermanentState] = useState(
    personalInfo?.data?.permanentAddress?.state
  );
  const [permanentCity, setpermanentCity] = useState(
    personalInfo?.data?.permanentAddress?.city
  );

  const ITEM_HEIGHT = 78;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 220,
      },
    },
  };
  const countryInfo = countries.find((c: any) => c.name === selectedCountry);
  const stateInfo = states.find((s: any) => s.name === selectedState);
  const countryPInfo = countries.find((c: any) => c.name === permanentCountry);
  const stateInPfo = states.find((s: any) => s.name === permanentState);
  useEffect(() => {
    const fetchCountries = async () => {
      const allCountries = await Country.getAllCountries();
      setCountries(allCountries);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStateAndCities = async () => {
      const statesOfCountry = await State.getStatesOfCountry(
        countryInfo?.isoCode
      );
      setStates(statesOfCountry);

      const citiesOfState = await City.getCitiesOfState(
        stateInfo?.countryCode ?? "",
        stateInfo?.isoCode ?? ""
      );
      setCities(citiesOfState);
    };
    fetchStateAndCities();
  }, [countryInfo, stateInfo]);

  useEffect(() => {
    const fetchStateAndCities = async () => {
      const statesOfCountry = await State.getStatesOfCountry(
        countryPInfo?.isoCode
      );
      setpermanentstates(statesOfCountry);

      const citiesOfState = await City.getCitiesOfState(
        stateInPfo?.countryCode ?? "",
        stateInPfo?.isoCode ?? ""
      );
      setpermanentCities(citiesOfState);
    };
    fetchStateAndCities();
  }, [countryPInfo, stateInPfo]);

  const eventHandler = async (event: Event) => {
    switch (event.name) {
      case "temporaryCountry":
        setSelectedCountry(event.data);
        const countryInfo = countries.find((c: any) => c.name === event.data);
        if (countryInfo) {
          const statesOfCountry = await State.getStatesOfCountry(
            countryInfo.isoCode
          );
          setStates(statesOfCountry);
        }
        break;
      case "temporaryState":
        setSelectedState(event.data);
        const stateInfo = states.find((s: any) => s.name === event.data);
        if (stateInfo) {
          const citiesOfState = await City.getCitiesOfState(
            stateInfo?.countryCode,
            stateInfo?.isoCode
          );
          setCities(citiesOfState);
        }
        break;
      case "temporaryCity":
        setSelectedCity(event.data);
        break;
      case "permanentCountry":
        setPermanentCountry(event.data);
        const countryPInfo = countries.find((c: any) => c.name === event.data);
        if (countryPInfo) {
          const statesOfCountry = await State.getStatesOfCountry(
            countryPInfo.isoCode
          );
          setpermanentstates(statesOfCountry);
        }
        break;
      case "permanentState":
        setpermanentState(event.data);
        const statePInfo = states.find((s: any) => s.name === event.data);
        if (statePInfo) {
          const citiesOfState = await City.getCitiesOfState(
            statePInfo?.countryCode,
            statePInfo?.isoCode
          );
          setpermanentCities(citiesOfState);
        }
        break;
      case "permanentCity":
        setpermanentCity(event.data);
        break;
    }
  };

  const initialValues = {
    firstName: sharedInfo?.data?.firstName,
    lastName: sharedInfo?.data?.lastName,
    personalDetails: {
      DOB: personalInfo?.data?.DOB,
      Gender: personalInfo?.data?.Gender,
      nationality: personalInfo?.data?.nationality,
      countyOfBirth: personalInfo?.data?.countyOfBirth,
      maritalStatus: personalInfo?.data?.maritalStatus,
      validPassport: personalInfo?.data?.validPassport,
      validPermit: personalInfo?.data?.validPermit,
      visaRejectedDetails: personalInfo?.data?.visaRejectedDetails,
      temporaryAddress: {
        city: selectedCity,
        state: selectedState,
        pinCode: personalInfo?.data?.temporaryAddress?.pinCode,
        country: selectedCountry,
        addressLine1: personalInfo?.data?.temporaryAddress?.addressLine1,
        addressLine2: personalInfo?.data?.temporaryAddress?.addressLine2,
        addressLine3: personalInfo?.data?.temporaryAddress?.addressLine3,
      },
      permanentAddress: {
        city: permanentCity,
        state: permanentState,
        pinCode: personalInfo?.data?.permanentAddress?.pinCode,
        country: permanentCountry,
        addressLine1: personalInfo?.data?.permanentAddress?.addressLine1,
        addressLine2: personalInfo?.data?.permanentAddress?.addressLine2,
        addressLine3: personalInfo?.data?.permanentAddress?.addressLine3,
      },
    },
  };

  useEffect(() => {
    const tempAddress = initialValues.personalDetails.temporaryAddress;
    const permAddress = initialValues.personalDetails.permanentAddress;

    if (
      tempAddress.city === permAddress.city &&
      tempAddress.state === permAddress.state &&
      tempAddress.pinCode === permAddress.pinCode &&
      tempAddress.country === permAddress.country &&
      tempAddress.addressLine1 === permAddress.addressLine1 &&
      tempAddress.addressLine2 === permAddress.addressLine2 &&
      tempAddress.addressLine3 === permAddress.addressLine3
    ) {
      setPermanent("yes");
    } else {
      setPermanent("no");
    }
  }, []);

  const submit = async (values: any) => {
    if (permanent === "yes") {
      values.personalDetails.permanentAddress = {
        ...values.personalDetails.temporaryAddress,
      };
    }
    const response = await editProfile(values);
    if (response.data.success) {
      const sharedProfile = {
        _id: response.data?.data?._id,
        firstName: response.data?.data?.firstName,
        lastName: response.data?.data?.lastName,
        displayPicSrc: response.data?.data?.displayPicSrc,
        email: response.data?.data?.email,
        phone: response.data?.data?.phone,
        LeadSource: response.data?.data?.LeadSource,
        isPlanningToTakeAcademicTest:
          response.data?.data?.isPlanningToTakeAcademicTest,
        isPlanningToTakeLanguageTest:
          response.data?.data?.isPlanningToTakeLanguageTest,
      };
      const personalInfo = {
        DOB: response.data?.data?.personalDetails.DOB,
        Gender: response.data?.data?.personalDetails.Gender, // enum
        temporaryAddress: response.data?.data?.personalDetails.temporaryAddress,
        permanentAddress: response.data?.data?.personalDetails.permanentAddress,
        nationality: response.data?.data?.personalDetails.nationality, // enum
        countyOfBirth: response.data?.data?.personalDetails.countyOfBirth, // enum
        maritalStatus: response.data?.data?.personalDetails.maritalStatus, // enum
        validPassport: response.data?.data?.personalDetails.validPassport, // enum yes no and processing
        validPermit: response.data?.data?.personalDetails.validPermit, // enum yes no and processing,
        visaRejectedDetails:
          response.data?.data?.personalDetails.visaRejectedDetails,
      };
      dispatch(
        setSharedInfo({
          ...sharedProfile,
        })
      );
      dispatch(
        setPersonalInfo({
          ...personalInfo,
        })
      );
    }
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
                    value={
                      values.personalDetails.DOB
                        ? values.personalDetails.DOB.slice(0, 10)
                        : ""
                    }
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
                        value={value}
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
                      aria-label="radio-group"
                      name="Marital status"
                      value={values.personalDetails.maritalStatus}
                      sx={{ display: "flex", flexDirection: "row" }}
                      onChange={handleChange}
                    >
                      {["Married", "Unmarried", "Widowed"].map((option) => (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={
                            <Radio
                              sx={{
                                "&.Mui-checked.Mui-disabled": {
                                  color: "#14C6A4",
                                },
                              }}
                            />
                          }
                          label={option}
                        />
                      ))}
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
                    value={
                      values.personalDetails.visaRejectedDetails ? "yes" : "no"
                    }
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
                  <Select
                    id="country"
                    name="personalDetails.temporaryAddress.country"
                    value={selectedCountry}
                    size="small"
                    onChange={(e) =>
                      eventHandler({
                        name: "temporaryCountry",
                        data: e?.target.value,
                      })
                    }
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
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    State/Province
                  </InputLabel>

                  <Select
                    id="state"
                    name="personalDetails.temporaryAddress.state"
                    value={selectedState}
                    size="small"
                    onChange={(e) =>
                      eventHandler({
                        name: "temporaryState",
                        data: e?.target.value,
                      })
                    }
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
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    City/Town
                  </InputLabel>

                  <Select
                    id="city"
                    size="small"
                    name="personalDetails.temporaryAddress.city"
                    value={selectedCity}
                    displayEmpty
                    defaultValue=""
                    onChange={(e) =>
                      eventHandler({
                        name: "temporaryCity",
                        data: e?.target.value,
                      })
                    }
                    fullWidth
                    // disabled={!selectedState}
                    IconComponent={ExpandMoreIcon}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="" disabled>
                      Select City
                    </MenuItem>
                    {cities
                      ? cities.map((city: any) => (
                          <MenuItem key={city} value={city.name}>
                            {city.name}
                          </MenuItem>
                        ))
                      : "Select state"}
                  </Select>
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
                  {sharedInfo?.data?.phone && Object.keys(sharedInfo.data.phone).length > 0 ? (
                    <>
                     <InputLabel
                    id="firstName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Contact number
                  </InputLabel>
                    <Typography  onClick={() =>
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
                      )
                    }
                    sx={{border:"1px solid rgba(0, 0, 0, 0.23)",p:1,borderRadius:"5px"}}
                    >
                      {sharedInfo?.data?.phone?.countryCode}{" "}
                      {sharedInfo?.data?.phone?.number}
                    </Typography>
                    </>
                  ) : (
                    <Button
                      sx={{ textTransform: "none", fontSize: "1rem" }}
                      onClick={() =>
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
                        )
                      }
                    >
                      + Add contact number
                    </Button>
                  )}
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
                      <Select
                        id="country"
                        size="small"
                        name="personalDetails.permanentAddress.country"
                        value={permanentCountry}
                        onChange={(e) =>
                          eventHandler({
                            name: "permanentCountry",
                            data: e?.target.value,
                          })
                        }
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
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel
                        id="firstName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        State/Province
                      </InputLabel>

                      <Select
                        id="state"
                        name="personalDetails.permanentAddress.state"
                        value={permanentState}
                        size="small"
                        onChange={(e) =>
                          eventHandler({
                            name: "permanentState",
                            data: e?.target.value,
                          })
                        }
                        fullWidth
                        displayEmpty
                        defaultValue=""
                        IconComponent={ExpandMoreIcon}
                        MenuProps={MenuProps}
                      >
                        <MenuItem value="" disabled>
                          Select State
                        </MenuItem>
                        {permanentstates.map((state) => (
                          <MenuItem key={state.isoCode} value={state.name}>
                            {state.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel
                        id="firstName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        City/Town
                      </InputLabel>

                      <Select
                        id="city"
                        name="personalDetails.permanentAddress.city"
                        value={permanentCity}
                        displayEmpty
                        size="small"
                        defaultValue=""
                        onChange={(e) =>
                          eventHandler({
                            name: "permanentCity",
                            data: e?.target.value,
                          })
                        }
                        fullWidth
                        IconComponent={ExpandMoreIcon}
                        MenuProps={MenuProps}
                      >
                        <MenuItem value="" disabled>
                          Select City
                        </MenuItem>
                        {permanentcities.map((city: any) => (
                          <MenuItem key={city} value={city.name}>
                            {city.name}
                          </MenuItem>
                        ))}
                      </Select>
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
    </div>
  );
};

export default PersonalDetails;
