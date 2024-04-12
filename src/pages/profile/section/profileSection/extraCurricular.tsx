
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

interface ExtraCurricularMember {
  activity: string;
  description: string;
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
const ExtraCurricular = () => {
  const [workStatus, setWorkStatus] = useState<("completed" | "ongoing")[]>([]);
  const [ExtraCurricularDetails, setExtraCurricularDetails] = useState<
    ExtraCurricularMember[]
  >([
    {
      activity: "",
      description: "",
      designation: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const addExtraCurricularMember = () => {
    setExtraCurricularDetails([
      ...ExtraCurricularDetails,
      {
        activity: "",
        description: "",
        designation: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const activities = [
      "Dance",
      "Online Certification",
      "Paper Publication",
      "Project",
      "Research",
      "Student Government",
      "Academic Teams and Clubs",
      "The Debate Team Students",
      "Internships",
  ]
  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const newExtraCurricularDetails = [...ExtraCurricularDetails];
    newExtraCurricularDetails[index][name as keyof ExtraCurricularMember] = value; // description assertion to avoid descriptionScript error
    setExtraCurricularDetails(newExtraCurricularDetails);
  };

  const handleStatusChange = (
    index: number,
    status: "completed" | "ongoing"
  ) => {
    const newWorkStatus = [...workStatus];
    newWorkStatus[index] = status;
    setWorkStatus(newWorkStatus);
  };

  const removeExtraCurricularMember = (index: number) => {
    const newExtraCurricularDetails = [...ExtraCurricularDetails];
    newExtraCurricularDetails.splice(index, 1);
    setExtraCurricularDetails(newExtraCurricularDetails);
  };
  const submitForm = () => {
    console.log(ExtraCurricularDetails);
    // Perform form submission logic here
  };
  const statusChange = () => {};
  return (
    <div>
      {ExtraCurricularDetails.map((ExtraCurricularMember, index) => (
        <div className="mb-5" key={index}>
          <Grid container spacing={2}>
            
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Activity
              </InputLabel>
              <Select
                size="small"
                id="Country"
                name={`activity`}
                displayEmpty
                defaultValue=""
                value={ExtraCurricularMember.activity}
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
                {activities.map((value) => (
                  <MenuItem
                    key={value}
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
                value={ExtraCurricularMember.designation}
                onChange={(e: any) => handleInputChange(index, e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Active status
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
                Description
              </InputLabel>
              <TextField
                    size="small"
                    type="text"
                    name={`description`}
                    placeholder="Description"
                    value={ExtraCurricularMember.description}
                    onChange={(e: any) => handleInputChange(index, e)}
                    required
                    fullWidth
                  />
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
                value={ExtraCurricularMember.startDate}
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
                    value={ExtraCurricularMember.endDate}
                    onChange={(e: any) => handleInputChange(index, e)}
                    required
                    fullWidth
                  />
                </>
              )}
            </Grid>

          

            {ExtraCurricularDetails.length > 1 && (
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <img
                    src={Images.deleteIcon}
                    alt="delete"
                    onClick={() => removeExtraCurricularMember(index)}
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
          handleSubmit={() => addExtraCurricularMember()}
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

export default ExtraCurricular;
