// import React, { useState, useRef, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import moment from "moment";

// interface WorkExperienceProps {
//   value: Date | undefined;
//   onChange: (date: Date | Date[] | undefined) => void;
//   displayYearOnly?: boolean;
//   minDate?: Date;
//   maxDate?: Date;
// }

// const WorkExperience: React.FC<WorkExperienceProps> = ({
//   value,
//   onChange,
//   displayYearOnly = false,
//   minDate,
//   maxDate,
// }) => {
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);
//   const calendarRef = useRef<HTMLDivElement>(null);

//   const toggleCalendar = () => {
//     setShowCalendar(!showCalendar);
//   };

//   const handleOutsideClick = (event: MouseEvent) => {
//     if (
//       calendarRef.current &&
//       !calendarRef.current.contains(event.target as Node)
//     ) {
//       setShowCalendar(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   const handleChangeDate = (date: Date | Date[] | undefined) => {
//     onChange(date);
//     setShowCalendar(false); // Hide the calendar after date selection
//   };

//   return (
//     <>
//       <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
//         <input
//           type="text"
//           value={value ? moment(value).format(displayYearOnly ? "YYYY" : "MMMM YYYY") : ""}
//           onClick={toggleCalendar}
//           readOnly // Make the text field read-only
//           style={{
//             height: "20px",
//             width: "95%",
//             borderRadius: " 5px",
//             border: "1px solid rgba(0, 0, 0, 0.23)",
//             fontSize: "16px",
//             padding: "10px",
//           }}
//         />
//         {showCalendar && (
//           <div ref={calendarRef} style={{ position: "absolute", zIndex: 1 }}>
//             <Calendar
//               value={value}
//               onChange={() =>handleChangeDate}
//               calendarType="US"
//               view={displayYearOnly ? "decade" : "month"}
//               minDate={minDate}
//               maxDate={maxDate}
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default WorkExperience;

import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Box,
  InputLabel,
  Stack,
  MenuItem,
  Select,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
} from "@mui/material";
import Images from "../../../../assets";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomButton } from "../../../../genericComponents/customButton";
import { IndustryTypeEnum } from "../../../../assets/enums";
import { useAppDispatch, useAppSelector } from "../../../../assets/hooks";
import { WorkExperience } from "../../../../types/types";
import { setWorkExperience } from "../../../../store/Slices/workexperienceSlice";
import { editProfile } from "../../../../services";

interface WorkExperienceMember {
  companyName: string;
  sector: string;
  type: string;
  startDate: any;
  endDate: any;
  designation: string;
}
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
const WorkExperiences = () => {
  const dispatch = useAppDispatch();
  const workExperienceData = useAppSelector((state) => state.workexperience);
  const [workStatus, setWorkStatus] = useState<("completed" | "ongoing")[]>([]);
  const [WorkExperienceDetails, setWorkExperienceDetails] = useState<
    WorkExperience[]
  >(
    workExperienceData.data?.length > 0
      ? workExperienceData.data
      : [
          {
            companyName: "",
            sector: "",
            type: "",
            startDate: "",
            endDate: "",
            designation: "",
          }
        ]
  );

  const addWorkExperienceMember = () => {
    setWorkExperienceDetails([
      ...WorkExperienceDetails,
      {
        companyName: "",
        sector: "",
        type: "",
        designation: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const newWorkExperienceDetails = [...WorkExperienceDetails];
    newWorkExperienceDetails[index][name as keyof WorkExperience] = value; // type assertion to avoid TypeScript error
    setWorkExperienceDetails(newWorkExperienceDetails);
  };

  const handleStatusChange = (
    index: number,
    status: "completed" | "ongoing"
  ) => {
    const newWorkStatus = [...workStatus];
    newWorkStatus[index] = status;
    setWorkStatus(newWorkStatus);
  };

  const removeWorkExperienceMember = (index: number) => {
    const newWorkExperienceDetails = [...WorkExperienceDetails];
    newWorkExperienceDetails.splice(index, 1);
    setWorkExperienceDetails(newWorkExperienceDetails);
  };
  const submitForm = async () => {

    let workexperience = {
      workExperience: WorkExperienceDetails,
    };
    const response = await editProfile(workexperience);
    if (response) {
      dispatch(setWorkExperience(response.data.data.workExperience));
    }
  };
  return (
    <div>
      {WorkExperienceDetails?.map((WorkExperienceMember, index) => (
        <div className="mb-5" key={index}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Name of Organization
              </InputLabel>
              <TextField
                size="small"
                name={`companyName`}
                placeholder="Name of Organization"
                value={WorkExperienceMember.companyName}
                onChange={(e: any) => handleInputChange(index, e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Sector
              </InputLabel>
              <Select
                size="small"
                id="Country"
                name={`sector`}
                displayEmpty
                defaultValue=""
                value={WorkExperienceMember.sector}
                onChange={(e: any) => handleInputChange(index, e)}
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

                {Object.entries(IndustryTypeEnum).map(([key, value]) => (
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
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Designation
              </InputLabel>
              <TextField
                size="small"
                name={`designation`}
                placeholder="Designation"
                value={WorkExperienceMember.designation}
                onChange={(e: any) => handleInputChange(index, e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Work status
              </InputLabel>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  // name="underGraduation.isCompleted"
                  value={workStatus[index] || ""}
                  onChange={(e) =>
                    handleStatusChange(
                      index,
                      e.target.value as "completed" | "ongoing"
                    )
                  }
                >
                  <FormControlLabel
                    value="completed"
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
                    value="ongoing"
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
                    label="Ongoing"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Started from
              </InputLabel>
              <TextField
                size="small"
                type="date"
                name={`startDate`}
                placeholder="Guardian Occupation"
                value={WorkExperienceMember.startDate.slice(0,10)}
                onChange={(e: any) => handleInputChange(index, e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {workStatus[index] === "completed" && (
                <>
                  <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                    Ended on
                  </InputLabel>
                  <TextField
                    size="small"
                    type="date"
                    name={`endDate`}
                    placeholder="Guardian Occupation"
                    value={WorkExperienceMember.endDate.slice(0,10)}
                    onChange={(e: any) => handleInputChange(index, e)}
                    required
                    fullWidth
                  />
                </>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Work Type
              </InputLabel>
              <Select
                size="small"
                id="Country"
                name={`type`}
                displayEmpty
                defaultValue=""
                value={WorkExperienceMember.type}
                onChange={(e: any) => handleInputChange(index, e)}
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

                {[
                  { name: "Full time", value: "full-time" },
                  { name: "Part time", value: "part-time" },
                  { name: "Freelancing", value: "freelancing" },
                  { name: "Contract", value: "contract" },
                  { name: "Remote", value: "remote" },
                  { name: "Flexible", value: "flexible" },
                  { name: "Shift work", value: "shift work" },
                ].map((item, i) => (
                  <MenuItem
                    key={i}
                    value={item.value}
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
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {WorkExperienceDetails.length > 1 && (
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <img
                    src={Images.deleteIcon}
                    alt="delete"
                    onClick={() => removeWorkExperienceMember(index)}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </div>
      ))}
      <Stack
        direction="row"
        sx={{ mt: 5, mb: 1, display: "flex", justifyContent: "end" }}
        spacing={2}
      >
        <CustomButton
          handleSubmit={() => addWorkExperienceMember()}
          width="100px"
        >
          Add new
        </CustomButton>
        <Button
          type="button"
          onClick={submitForm}
          sx={{
            width: "100px",
            border: "1px solid #027A48",
            background: "#F8F6F6",
            color: "#000",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(90deg, #0B2D1E 0%, #1E8558 100%)",
              color: "#fff",
            },
          }}
        >
          Save
        </Button>
      </Stack>
    </div>
  );
};

export default WorkExperiences;
