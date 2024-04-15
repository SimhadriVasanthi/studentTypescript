import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { testScores } from "../../../../assets/menu";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  ENglishTestNamesEnum,
} from "../../../../assets/enums";
// import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { editProfile } from "../../../../services";
import { useAppDispatch, useAppSelector } from "../../../../assets/hooks";
import { settestScores } from "../../../../store/Slices/testScoresSlice";

const EnglishTestForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const testscores = useAppSelector((state) => state.testscores);
  console.log(testscores);
  const [selectedTest, setSelectedTest] = useState<string>("");
  const [scoreCounts, setScoreCounts] = useState<{
    [description: string]: string;
  }>({});
  const [tookTest, setTookTest] = useState<string>("");
  // const inputFileRef = useRef(null);
  const handleTestSelection = (event: SelectChangeEvent<string>) => {
    setSelectedTest(event.target.value);
  };
  const handleCountChange = (description: string, value: string) => {
    setScoreCounts((prevCounts) => ({
      ...prevCounts,
      [description]: value,
    }));
  };

  const handleSubmit = async () => {
    const selectedTestScores = testScores.find(
      (test) => test.name === selectedTest
    );

    if (!selectedTestScores) {
      console.error("Selected test not found.");
      return;
    }

    const payload = {
      name: selectedTestScores.name,
      scores: selectedTestScores.scores[0].map((score) => ({
        description: score.description,
        count: scoreCounts[score.description] || "",
      })),
      testDate: tookTest,
    };
    const response = await editProfile({ tests: payload });
    if (response) {
      console.log(response);
      dispatch(settestScores(response.data.data.tests));
    }
  };

  const mapScoresToTextFields = () => {
    const selectedTestScores = testScores.find(
      (test) => test.name === selectedTest
    )?.scores[0];
    if (!selectedTestScores) return null;

    return (
      <Grid container spacing={2}>
        {selectedTestScores.map((score, index) => (
          <Grid item key={index} xs={12} sm={4} md={3}>
            <div>
              <Typography>{score.description}</Typography>
              <TextField
                type="number"
                size="small"
                value={scoreCounts[score.description] || ""}
                onChange={(e) =>
                  handleCountChange(score.description, e.target.value)
                }
              />
            </div>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div>
      <Box sx={{ background: "#DCF8F7", p: 2, borderRadius: "10px" }}>
        <Select
          displayEmpty
          defaultValue=""
          value={selectedTest}
          size="small"
          onChange={handleTestSelection}
        >
          <MenuItem value="">Select a test</MenuItem>
          {Object.entries(ENglishTestNamesEnum).map(([key, value]) => (
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
              {key}
            </MenuItem>
          ))}
        </Select>
      </Box>
      {selectedTest && (
        <>
          <div>
            <h3>{selectedTest}</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {mapScoresToTextFields()}
            </div>
            <TextField
              type="date"
              size="small"
              value={tookTest}
              onChange={(e) => setTookTest(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mt: 2 }}
            />
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            sx={{
              width: "100px",
              mt: 2,
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
        </>
      )}
    </div>
  );
};

export default EnglishTestForm;
