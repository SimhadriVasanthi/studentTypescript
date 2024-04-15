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
import { bachelors, pgCourses } from "../../../../assets/menu";
import { useAppDispatch } from "../../../../assets/hooks";
import { setPostGraduation } from "../../../../store/Slices/educationHistorySlice";
import { editProfile } from "../../../../services";

const PostGrad = ({data}:any) => {
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
    postGraduation: {
      instituteName: data?.instituteName,
      city: data?.city,
      state: data?.state,
      country: data?.country,
      specialization: data?.specialization, // enum  eee,ese,ece
      degreeProgram: data?.degreeProgram, // enum btech,bedu,bsc....
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
      dispatch(setPostGraduation(response.data.data.education.postGraduation));
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
                    name="postGraduation.degreeProgram"
                    displayEmpty
                    defaultValue=""
                    value={values.postGraduation.degreeProgram}
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

                    {pgCourses.map((name: any) => (
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
                    name="postGraduation.specialization"
                    displayEmpty
                    defaultValue=""
                    value={values.postGraduation.specialization}
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
                    name="postGraduation.instituteName"
                    value={values.postGraduation.instituteName}
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
                    name="postGraduation.affiliatedUniversity"
                    value={values.postGraduation.affiliatedUniversity}
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
                    name="postGraduation.gradingSystem"
                    displayEmpty
                    defaultValue=""
                    value={values.postGraduation.gradingSystem}
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
                    name="postGraduation.totalScore"
                    value={values.postGraduation.totalScore}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <InputLabel id="" sx={{ color: "#000",fontWeight:600 }}>
                    Education status
                  </InputLabel>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="postGraduation.isCompleted"
                      value={values.postGraduation.isCompleted}
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
                    name="postGraduation.languageOfInstruction"
                    displayEmpty
                    defaultValue=""
                    value={values.postGraduation.languageOfInstruction}
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
                    name="postGraduation.startDate"
                    value={values.postGraduation.startDate?.slice(0,10)}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {values.postGraduation.isCompleted === "true" ? (
                    <>
                      <InputLabel
                        id="instituteName"
                        sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                      >
                        Attended to
                      </InputLabel>
                      <TextField
                        size="small"
                        name="postGraduation.endDate"
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={values.postGraduation.endDate?.slice(0, 10)}
                        onChange={handleChange}
                        inputProps={{
                          min: values.postGraduation.startDate?.slice(0, 10), // Set min attribute to the Attended From
                        }}
                      />
                    </>
                  ):null}
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
                      value={values.postGraduation.backlogs? "yes":"no"}
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
                   name="postGraduation.backlogs"
                   value={values.postGraduation.backlogs}
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
                    name="postGraduation.state"
                    size="small"
                    value={values.postGraduation.state}
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
                    name="postGraduation.city"
                    size="small"
                    value={values.postGraduation.city}
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
                    name="postGraduation.country"
                    displayEmpty
                    defaultValue=""
                    value={values.postGraduation.country}
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

export default PostGrad;
