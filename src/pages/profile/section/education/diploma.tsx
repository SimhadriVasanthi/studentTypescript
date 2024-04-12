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
import { bachelors, diplomaCourses } from "../../../../assets/menu";

const Diploma = () => {
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
    plus2: {
      instituteName: "",
      city: "",
      state: "",
      country: "",
      languageOfInstruction: "",
      gradingSystem: "", // enum % grade gpa cgpa
      board: "",
      stream: "",
      totalScore: "", // for grade A+..., for Percent 0-100, gpa 0-10
      startDate: "",
      endDate: "",
      backlogs: "",
      isCompleted: "",
    },
  };

  const submit = async (values: any) => {
    console.log(values);
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
                    Specialization
                  </InputLabel>
                  <Select
                    size="small"
                    id="Country"
                    name="plus2.stream"
                    displayEmpty
                    defaultValue=""
                    value={values.plus2.stream}
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

                    {diplomaCourses.map((name: any) => (
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
                  <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                    Education status
                  </InputLabel>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="plus2.isCompleted"
                      value={values.plus2.isCompleted}
                      onChange={handleChange}
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
                        label="Completed"
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
                        label="Pursuing"
                      />
                    </RadioGroup>
                  </FormControl>
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
                    name="plus2.instituteName"
                    value={values.plus2.instituteName}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Board
                  </InputLabel>
                  <Select
                    size="small"
                    id="Country"
                    name="plus2.board"
                    displayEmpty
                    defaultValue=""
                    value={values.plus2.board}
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

                    {["CBSE", "ICSE", "IB", "NIOS", "AISSCE", "other"].map(
                      (name: any) => (
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
                      )
                    )}
                  </Select>
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
                    name="plus2.gradingSystem"
                    displayEmpty
                    defaultValue=""
                    value={values.plus2.gradingSystem}
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
                    name="plus2.totalScore"
                    value={values.plus2.totalScore}
                    onChange={handleChange}
                    fullWidth
                  />
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
                    name="plus2.startDate"
                    value={values.plus2.startDate}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {values.plus2.isCompleted === "yes" && (
                    <>
                      <InputLabel
                        id="instituteName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        Attended to
                      </InputLabel>
                      <TextField
                        size="small"
                        name="plus2.endDate"
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={values.plus2.endDate?.slice(0, 10)}
                        onChange={handleChange}
                        inputProps={{
                          min: values.plus2.startDate?.slice(0, 10), // Set min attribute to the Attended From
                        }}
                      />
                    </>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Language Of Instruction
                  </InputLabel>
                  <Select
                    size="small"
                    id="Country"
                    name="plus2.languageOfInstruction"
                    displayEmpty
                    defaultValue=""
                    value={values.plus2.languageOfInstruction}
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
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="" sx={{ color: "#000" }}>
                    Backlogs
                  </InputLabel>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="plus2.backlogs"
                      value={values.plus2.backlogs}
                      onChange={handleChange}
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
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="instituteName"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    State/Province
                  </InputLabel>

                  <Select
                    id="state"
                    name="plus2.state"
                    size="small"
                    value={values.plus2.state}
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
                    name="plus2.city"
                    size="small"
                    value={values.plus2.city}
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
                    name="plus2.country"
                    displayEmpty
                    defaultValue=""
                    value={values.plus2.country}
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

export default Diploma;
