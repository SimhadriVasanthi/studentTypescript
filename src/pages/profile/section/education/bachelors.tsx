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
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { DestinationTypeEnum } from "../../../../assets/enums";
import CustomField from "../../../../genericComponents/customTextfield";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { bachelors } from "../../../../assets/menu";
import { editProfile } from "../../../../services";
import { useAppDispatch } from "../../../../assets/hooks";
import { setUnderGraduation } from "../../../../store/Slices/educationHistorySlice";

const Bachelors = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const [Isbacklog,setIsbacklog] = useState()
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  };
  const initialValues = {
    underGraduation: {
      instituteName: data?.instituteName,
      city: data?.city,
      state: data?.state,
      country: data?.country,
      programMajor: data?.programMajor, // enum  eee,ese,ece
      degreeProgram:data?.degreeProgram, // enum btech,bedu,bsc....
      gradingSystem: data?.gradingSystem, // enum % grade gpa cgpa
      affiliatedUniversity: data?.affiliatedUniversity,
      totalScore: data?.totalScore, // for grade A+..., for Percent 0-100, gpa 0-10
      startDate: data?.startDate,
      endDate: data?.endDate,
      backlogs: data?.backlogs,
      isCompleted: data?.isCompleted,
    },
  };

  const submit = async (values: any) => {
    const response = await editProfile(values);
    console.log(response);
    if (response) {
      dispatch(setUnderGraduation(response.data.data.education.underGraduation));
    }
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
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Degree Program
                  </InputLabel>
                  <Select
                    size="small"
                    id="Country"
                    name="underGraduation.degreeProgram"
                    displayEmpty
                    defaultValue=""
                    value={values.underGraduation.degreeProgram}
                    onChange={handleChange}
                    fullWidth
                    IconComponent={ExpandMoreIcon}
                    MenuProps={MenuProps}
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

                    {bachelors.map((name: any) => (
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
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Specialization
                  </InputLabel>
                  <Select
                    size="small"
                    id="Country"
                    name="underGraduation.programMajor"
                    displayEmpty
                    defaultValue=""
                    value={values.underGraduation.programMajor}
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

                    {["ECE", "EEE", "CSE", "Other"].map((name) => (
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
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Name of Institution{" "}
                  </InputLabel>
                  <CustomField
                    id="name"
                    type="text"
                    placeholder="Name of Institution"
                    name="underGraduation.instituteName"
                    value={values.underGraduation.instituteName}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Affiliated University
                  </InputLabel>
                  <CustomField
                    id="name"
                    type="text"
                    placeholder="Affiliated University"
                    name="underGraduation.affiliatedUniversity"
                    value={values.underGraduation.affiliatedUniversity}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Grade Scheme
                  </InputLabel>

                  <Select
                    id="Country"
                    size="small"
                    name="underGraduation.gradingSystem"
                    displayEmpty
                    defaultValue=""
                    value={values.underGraduation.gradingSystem}
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

                    {["Percentage", "CGPA", "GPA", "Grade"].map((name) => (
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
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Score{" "}
                  </InputLabel>
                  <CustomField
                    id="name"
                    type="number"
                    placeholder="Score"
                    name="underGraduation.totalScore"
                    value={values.underGraduation.totalScore}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                    Education status
                  </InputLabel>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="underGraduation.isCompleted"
                      value={values.underGraduation.isCompleted}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="true"
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
                        label="Completed"
                      />
                      <FormControlLabel
                        value="false"
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
                        label="Pursuing"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    languageOfInstruction
                  </InputLabel>
                  <Select
                    size="small"
                    id="Country"
                    name="underGraduation.languageOfInstruction"
                    displayEmpty
                    defaultValue=""
                    value={values.underGraduation.languageOfInstruction}
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
                      { name: "English", value: "English" },
                      { name: "Hindi", value: "Telugu" },
                      { name: "Other", value: "Other" },
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
                  </Select> */}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Attended from
                  </InputLabel>
                  <CustomField
                    id="name"
                    type="date"
                    placeholder="Attended From"
                    name="underGraduation.startDate"
                    value={values?.underGraduation?.startDate?.slice(0,10)}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {values.underGraduation?.isCompleted === "true" ? (
                    <>
                      <InputLabel
                        id="instituteName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        Attended to
                      </InputLabel>
                      <TextField
                        size="small"
                        name="underGraduation.endDate"
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={values.underGraduation.endDate?.slice(0, 10)}
                        onChange={handleChange}
                        inputProps={{
                          min: values.underGraduation.startDate?.slice(0, 10), // Set min attribute to the Attended From
                        }}
                      />
                    </>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="" sx={{ color: "#000" }}>
                    Backlogs
                  </InputLabel>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      // name="underGraduation.backlogs"
                      value={values.underGraduation.backlogs? "yes":"no"}
                      onChange={(e:any) =>setIsbacklog(e.target.value)}
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
                {Isbacklog === "yes" ? <Grid item xs={12} sm={6}>
                 <InputLabel id="" sx={{ color: "#000" }}>
                  Number of Backlogs
                 </InputLabel>
                 <CustomField
                   id="name"
                   type="number"
                   placeholder="Attended From"
                   name="underGraduation.backlogs"
                   value={values.underGraduation.backlogs}
                   onChange={handleChange}
                   fullWidth
                 />
               </Grid> : null}
                
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    State/Province
                  </InputLabel>

                  <Select
                    id="state"
                    name="underGraduation.state"
                    size="small"
                    value={values.underGraduation.state}
                    onChange={handleChange}
                    fullWidth
                    displayEmpty
                    defaultValue=""
                    IconComponent={ExpandMoreIcon}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="" disabled>
                      Select State
                    </MenuItem>
                    {[
                      "Andhra Pradesh",
                      "Telangana",
                      "Kerala",
                      "Maharashtra",
                      "Other",
                    ].map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    City/Town
                  </InputLabel>

                  <Select
                    id="state"
                    name="underGraduation.city"
                    size="small"
                    value={values.underGraduation.city}
                    onChange={handleChange}
                    fullWidth
                    displayEmpty
                    defaultValue=""
                    IconComponent={ExpandMoreIcon}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="" disabled>
                      Select City
                    </MenuItem>
                    {[
                      "Hyderabad",
                      "Vijayawada",
                      "Guntur",
                      "Visakhapatnam",
                      "Other",
                    ].map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Country
                  </InputLabel>

                  <Select
                    id="Country"
                    size="small"
                    name="underGraduation.country"
                    displayEmpty
                    defaultValue=""
                    value={values.underGraduation.country}
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

export default Bachelors;
