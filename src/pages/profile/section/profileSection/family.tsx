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
} from "@mui/material";
import Images from "../../../../assets";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomButton } from "../../../../genericComponents/customButton";

interface FamilyMember {
  GuardianFirstName: string;
  GuardianLastName: string;
  GuardianEmail: string;
  GuardianOccupation: string;
  GuardianQualification: string;
  RelationshipWithStudent: string;
}

const Family = () => {
  const [familyDetails, setFamilyDetails] = useState<FamilyMember[]>([
    {
      GuardianFirstName: "",
      GuardianLastName: "",
      GuardianEmail: "",
      GuardianOccupation: "",
      GuardianQualification: "",
      RelationshipWithStudent: "",
    },
  ]);

  const addFamilyMember = () => {
    setFamilyDetails([
      ...familyDetails,
      {
        GuardianFirstName: "",
        GuardianLastName: "",
        GuardianEmail: "",
        GuardianOccupation: "",
        GuardianQualification: "",
        RelationshipWithStudent: "",
      },
    ]);
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const newFamilyDetails = [...familyDetails];
    newFamilyDetails[index][name as keyof FamilyMember] = value; // type assertion to avoid TypeScript error
    setFamilyDetails(newFamilyDetails);
  };

  const removeFamilyMember = (index: number) => {
    const newFamilyDetails = [...familyDetails];
    newFamilyDetails.splice(index, 1);
    setFamilyDetails(newFamilyDetails);
  };
  
  const submitForm = () => {
    console.log(familyDetails);
    // Perform form submission logic here
  };
  return (
    <div>
      {familyDetails.map((familyMember, index) => (
        <div className="mb-5" key={index}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Family relation
              </InputLabel>
              <Select
                size="small"
                id="Country"
                name={`RelationshipWithStudent`}
                displayEmpty
                defaultValue=""
                value={familyMember.RelationshipWithStudent}
                onChange={(e: any) => handleInputChange(index, e)}
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
                  { name: "Father", value: "father" },
                  { name: "Mother", value: "mother" },
                  { name: "Spouse", value: "spouse" },
                  { name: "Guardian", value: "guardian" },
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
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                First name
              </InputLabel>
              <TextField
                size="small"
                name={`GuardianFirstName`}
                placeholder="Guardian First Name"
                value={familyMember.GuardianFirstName}
                onChange={(e: any) => handleInputChange(index, e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Last name
              </InputLabel>
              <TextField
                size="small"
                name={`GuardianLastName`}
                placeholder="Guardian Last Name"
                value={familyMember.GuardianLastName}
                onChange={(e: any) => handleInputChange(index, e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Email id
              </InputLabel>
              <TextField
                size="small"
                type="email"
                name={`GuardianEmail`}
                placeholder="Guardian Email"
                value={familyMember.GuardianEmail}
                onChange={(e: any) => handleInputChange(index, e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Occupation
              </InputLabel>
              <TextField
                size="small"
                name={`GuardianOccupation`}
                placeholder="Guardian Occupation"
                value={familyMember.GuardianOccupation}
                onChange={(e: any) => handleInputChange(index, e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
                Qualification
              </InputLabel>
              <TextField
                size="small"
                name={`GuardianQualification`}
                placeholder="Guardian Qualification"
                value={familyMember.GuardianQualification}
                onChange={(e: any) => handleInputChange(index, e)}
                required
                fullWidth
              />
            </Grid>

            {familyDetails.length > 1 && (
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <img
                    src={Images.deleteIcon}
                    alt="delete"
                    onClick={() => removeFamilyMember(index)}
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
        <CustomButton handleSubmit={() => addFamilyMember()} width="100px">
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

export default Family;
