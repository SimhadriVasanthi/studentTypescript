import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../assets/hooks";
import {
  countryList,
  degreeType,
  skillsList,
  subDisciplines,
} from "../../../../assets/menu";
import { editProfile } from "../../../../services";
import { setpreferences } from "../../../../store/Slices/preferencesSlice";
import { setskills } from "../../../../store/Slices/skillsSlice";

const Preferences = () => {
  const Preferences = useAppSelector((state) => state.preferences);
  const dispatch = useAppDispatch();
  const [courseData, setCourseData] = useState(
    Preferences?.data?.courses || []
  );
  const [countryData, setCountryData] = useState(
    Preferences?.data?.country || []
  );
  const initialValues = {
    preference: {
      intake: Preferences?.data?.intake,
      budget: {
        upper: "",
        lower: "",
      },
      degree: Preferences?.data?.degree,
      country: countryData,
      courses: courseData,
    },
  };
  const handleCountryChange = (event:any, newValue:any) => {
    setCountryData(newValue);
  };
  const handleCourseChange = (event:any, newValue:any) => {
      setCourseData(newValue);
  };

  const submit = async (values:any) => {
    const response = await editProfile(values);
    if(response){
      dispatch(setpreferences(response.data.data.preference))
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        // validationSchema={profileSchema}
        onSubmit={(values: any) => submit(values)}
      >
        {({ touched, errors, values, handleChange, setFieldValue }) => {
          return (
            <Form className="mt-5">
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <InputLabel
                    id="subdisciplines"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Subdisciplines
                  </InputLabel>
                  <Autocomplete
                    multiple
                    id="subdisciplines"
                    sx={{
                      "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
                        padding: "5px",
                      },
                      width: "100%",
                      "& .MuiTextField-root": {
                        marginTop: "8px",
                      },
                    }}
                    limitTags={2}
                    size="small"
                    options={subDisciplines}
                    getOptionLabel={(option) => option}
                    value={courseData}
                    filterSelectedOptions
                    ListboxProps={{
                      style: { maxHeight: "180px", overflowY: "auto" },
                    }}
                    onChange={(event, newValue) =>
                      handleCourseChange(event, newValue)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Search subdisciplines"
                        variant="outlined"
                        InputProps={{
                          ...params.InputProps,
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <InputLabel
                    id="subdisciplines"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Country
                  </InputLabel>

                  <Autocomplete
                    multiple
                    id="autocomplete"
                    sx={{
                      "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
                        padding: "5px",
                      },
                      width: "100%",
                      "& .MuiTextField-root": {
                        marginTop: "8px",
                      },
                    }}
                    limitTags={2}
                    size="small"
                    options={countryList}
                    getOptionLabel={(option) => option}
                    value={countryData}
                    filterSelectedOptions
                    ListboxProps={{
                      style: { maxHeight: "180px", overflowY: "auto" },
                    }}
                    
                    onChange={(event, newValue) =>
                      handleCountryChange(event, newValue)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Search country"
                        variant="outlined"
                        InputProps={{
                          ...params.InputProps,
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <InputLabel
                    id="degree"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    {" "}
                    Degree
                  </InputLabel>

                  <FormControl size="small">
                    <InputLabel id="degree">Select Degree</InputLabel>

                    <Select
                      labelId="degree"
                      id="degree"
                      size="small"
                      name="preference.degree"
                      // MenuProps={MenuProps}
                      value={values.preference.degree}
                      label="Select Degree"
                      onChange={handleChange}
                    >
                      {degreeType.map((item, i) => (
                        <MenuItem value={item} key={i}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel
                    id="degree"
                    sx={{ fontWeight: "600", color: "#000", mb: 1 }}
                  >
                    Start Date
                  </InputLabel>

                  <TextField
                    size="small"
                    name="preference.intake"
                    type="month"
                    fullWidth
                    // onFocus={(e) => (e.target.type = "month")}
                    placeholder="Select Intake"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={
                      values.preference.intake
                        ? values.preference.intake.slice(0, 7)
                        : ""
                    }
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography fontWeight="600">Budget</Typography>
                  {/* <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleSlider}
                        // valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={0}
                        max={5000000}
                      />
                      <Stack direction="row" justifyContent="space-between">
                        <Typography>{value[0]}</Typography>
                        <Typography>{value[1]}</Typography>
                      </Stack> */}
                </Grid>
              </Grid>
              <Button
                type="submit"
                // onClick={() => submit}
                sx={{
                  width: "100px",
                  border: "1px solid #027A48",
                  background: "#F8F6F6",
                  color: "#000",
                  textTransform: "none",
                  float: "right",
                  my: 2,
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #0B2D1E 0%, #1E8558 100%)",
                    color: "#fff",
                  },
                }}
              >
                Save
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills = useAppSelector((state) => state.skills);
  const dispatch = useAppDispatch();
  const [skilldata, setSkillsData] = useState<string[]>(skills.data);

  const handleOptionChange = (
    event: React.ChangeEvent<{}>,
    newValue: string[]
  ) => {
    setSkillsData(newValue);
  };
  const submit = async () => {
    const response = await editProfile({ skills: skilldata });
    if (response) {
      dispatch(setskills(response.data.data.skills));
    }
  };
  return (
    <div>
      <Autocomplete
        multiple
        id="autocomplete"
        sx={{
          "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
            padding: "5px",
          },
          width: "50%",
          "& .MuiTextField-root": {
            marginTop: "8px",
          },
        }}
        disableClearable
        size="small"
        options={skillsList}
        getOptionLabel={(option) => option}
        value={skilldata}
        filterSelectedOptions
        ListboxProps={{
          style: { maxHeight: "180px", overflowY: "auto" },
        }}
        renderTags={() => null}
        onChange={handleOptionChange}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search skills"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: null,
            }}
          />
        )}
      />
      {skilldata?.length > 0 ? (
        <Box
          sx={{
            background: "#EDF2F6",
            p: 2,
            width: "fit-content",
            mt: 2,
            borderRadius: "10px",
            display: "flex",
          }}
        >
          {skilldata?.map((item) => (
            <Typography
              sx={{
                p: 1,
                background: "#fff",
                width: "fit-content",
                borderRadius: "10px",
                fontSize: "13px",
                mr: 1,
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      ) : null}
      <Button
        type="submit"
        onClick={submit}
        sx={{
          width: "100px",
          border: "1px solid #027A48",
          background: "#F8F6F6",
          color: "#000",
          textTransform: "none",
          float: "right",
          my: 2,
          "&:hover": {
            background: "linear-gradient(90deg, #0B2D1E 0%, #1E8558 100%)",
            color: "#fff",
          },
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default Skills;

export { Preferences, Skills };
