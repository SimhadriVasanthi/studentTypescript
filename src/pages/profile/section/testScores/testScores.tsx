import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AcademicTestForm from "./academic";
import EnglishTestForm from "./englishtest";

const TestScores = () => {
  const [isSelected , setIsSelected] = useState("")
  const [isGRESelected , setIsGRESelected] = useState("")

  const handleChange = () => {};
  return (
    <Stack spacing={2}>
      {isSelected === "No" ? 
      <Box>
      <InputLabel sx={{ color: "#000", fontWeight: 600 }}>English marks in class 12</InputLabel>
      <TextField
        id=""
        type="number"
        name=""
        value=""
        onChange={handleChange}
        size="small"
      />
    </Box> : null}
      
      <Box>
        <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
          Have you taken any English Proficiency Test ?
        </InputLabel>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name=""
            value={isSelected}
            onChange={(e:any) =>setIsSelected(e.target.value)}
          >
            {["Yes", "No", "Planning to take", "Not planning to take"].map(
              (option) => (
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
              )
            )}
          </RadioGroup>
        </FormControl>
        {isSelected === "Yes" ? <EnglishTestForm /> : null}
      </Box>
      <Box>
        <InputLabel id="" sx={{ color: "#000", fontWeight: 600 }}>
          Have you taken  GRE/GMAT Test ?
        </InputLabel>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name=""
            value={isGRESelected}
            onChange={(e:any) =>setIsGRESelected(e.target.value)}
          >
            {["Yes", "No", "Planning to take", "Not planning to take"].map(
              (option) => (
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
              )
            )}
          </RadioGroup>
        </FormControl>
        {isGRESelected === "Yes" ? <AcademicTestForm /> : null}
      </Box>
    </Stack>
  );
};

export default TestScores;
